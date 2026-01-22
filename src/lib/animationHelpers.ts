import { EasingFunction } from './easingFunctions';

/**
 * Animation state interface
 */
export interface AnimationState {
  isActive: boolean;
  startTime: number;
  duration: number;
  startValue: number;
  targetValue: number;
  currentValue: number;
}

/**
 * Animation configuration interface
 */
export interface AnimationConfig {
  duration: number;
  easing: EasingFunction;
  delay: number;
  triggerThreshold: number;
}

/**
 * Default animation configuration
 */
export const defaultAnimationConfig: AnimationConfig = {
  duration: 1500, // 1.5 seconds
  easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOut
  delay: 0,
  triggerThreshold: 0.1, // 10% of element visible
};

/**
 * Calculate animation progress based on elapsed time and easing function
 */
export const calculateAnimationProgress = (
  startTime: number,
  duration: number,
  easing: EasingFunction,
  currentTime: number = performance.now()
): number => {
  const elapsed = currentTime - startTime;
  const normalizedTime = Math.min(elapsed / duration, 1);
  return easing(normalizedTime);
};

/**
 * Interpolate between start and target values based on progress
 */
export const interpolateValue = (
  startValue: number,
  targetValue: number,
  progress: number
): number => {
  return startValue + (targetValue - startValue) * progress;
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Detect if device is mobile/touch device
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.innerWidth <= 768
  );
};

/**
 * Detect if connection is slow (2G/3G)
 */
export const isSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) return false;
  const connection = (navigator as any).connection;
  return connection && (
    connection.effectiveType === '2g' ||
    connection.effectiveType === 'slow-2g' ||
    connection.saveData === true
  );
};

/**
 * Get adjusted animation duration based on user preferences and device capabilities
 */
export const getAdjustedDuration = (baseDuration: number): number => {
  if (prefersReducedMotion()) {
    return Math.min(baseDuration * 0.3, 300); // Reduce to 30% or max 300ms
  }
  
  if (isMobileDevice()) {
    return Math.min(baseDuration * 0.8, 1200); // Reduce by 20% for mobile, max 1.2s
  }
  
  if (isSlowConnection()) {
    return Math.min(baseDuration * 0.6, 800); // Reduce by 40% for slow connections
  }
  
  return baseDuration;
};

/**
 * Get adjusted threshold for intersection observer based on device
 */
export const getAdjustedThreshold = (baseThreshold: number = 0.1): number => {
  if (isMobileDevice()) {
    return Math.max(baseThreshold * 0.5, 0.05); // Lower threshold for mobile (trigger earlier)
  }
  return baseThreshold;
};

/**
 * Format number for display (removes decimals for integers)
 */
export const formatAnimatedNumber = (value: number): string => {
  return Math.round(value).toString();
};

/**
 * Clamp value between min and max
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Check if animation should be triggered based on intersection ratio
 */
export const shouldTriggerAnimation = (
  intersectionRatio: number,
  threshold: number = 0.1
): boolean => {
  return intersectionRatio >= threshold;
};

/**
 * Throttle function to limit animation triggers
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: number | undefined;
  let lastExecTime = 0;
  
  return (...args: Parameters<T>) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

/**
 * Debounce function to delay animation triggers
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: number | undefined;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => func(...args), delay);
  };
};

/**
 * Performance monitor for animations
 */
export class AnimationPerformanceMonitor {
  private frameCount = 0;
  private startTime = 0;
  private lastFrameTime = 0;
  private isMonitoring = false;

  start() {
    this.frameCount = 0;
    this.startTime = performance.now();
    this.lastFrameTime = this.startTime;
    this.isMonitoring = true;
  }

  recordFrame() {
    if (!this.isMonitoring) return;
    
    this.frameCount++;
    this.lastFrameTime = performance.now();
  }

  stop(): { fps: number; duration: number; frameCount: number } {
    if (!this.isMonitoring) {
      return { fps: 0, duration: 0, frameCount: 0 };
    }
    
    this.isMonitoring = false;
    const duration = this.lastFrameTime - this.startTime;
    const fps = this.frameCount / (duration / 1000);
    
    return {
      fps: Math.round(fps),
      duration: Math.round(duration),
      frameCount: this.frameCount,
    };
  }

  getCurrentFPS(): number {
    if (!this.isMonitoring || this.frameCount < 2) return 0;
    
    const duration = performance.now() - this.startTime;
    return Math.round(this.frameCount / (duration / 1000));
  }
}

/**
 * Global performance monitor instance
 */
export const globalPerformanceMonitor = new AnimationPerformanceMonitor();

/**
 * Check if device has good animation performance
 */
export const hasGoodAnimationPerformance = (): boolean => {
  // Check for hardware acceleration support
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  
  if (!gl) return false;
  
  // Check for high refresh rate display
  const refreshRate = (screen as any).refreshRate || 60;
  
  // Check memory (rough estimate)
  const memory = (navigator as any).deviceMemory || 4;
  
  return refreshRate >= 60 && memory >= 2;
};

/**
 * Get optimal animation configuration based on device capabilities
 */
export const getOptimalAnimationConfig = (baseConfig: AnimationConfig): AnimationConfig => {
  const hasGoodPerf = hasGoodAnimationPerformance();
  const isMobile = isMobileDevice();
  const prefersReduced = prefersReducedMotion();
  const isSlowConn = isSlowConnection();
  
  let durationMultiplier = 1;
  let thresholdMultiplier = 1;
  
  if (prefersReduced) {
    durationMultiplier = 0.3;
    thresholdMultiplier = 0.5;
  } else if (isSlowConn) {
    durationMultiplier = 0.6;
    thresholdMultiplier = 0.7;
  } else if (isMobile) {
    durationMultiplier = 0.8;
    thresholdMultiplier = 0.8;
  } else if (!hasGoodPerf) {
    durationMultiplier = 0.7;
    thresholdMultiplier = 0.9;
  }
  
  return {
    ...baseConfig,
    duration: Math.round(baseConfig.duration * durationMultiplier),
    triggerThreshold: baseConfig.triggerThreshold * thresholdMultiplier,
  };
};