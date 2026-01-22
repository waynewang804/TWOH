import { useState, useEffect, useCallback, useRef } from 'react';
import { EasingFunction, easeOutQuart } from '@/lib/easingFunctions';
import { 
  calculateAnimationProgress, 
  interpolateValue, 
  getAdjustedDuration,
  formatAnimatedNumber,
  globalPerformanceMonitor 
} from '@/lib/animationHelpers';

export interface AnimatedCounterOptions {
  duration?: number;
  easing?: EasingFunction;
  startDelay?: number;
  onComplete?: () => void;
  formatValue?: (value: number) => string;
  timeout?: number; // Maximum animation time before force completion
}

export interface UseAnimatedCounterReturn {
  currentValue: number;
  displayValue: string;
  isAnimating: boolean;
  startAnimation: () => void;
  resetAnimation: () => void;
  progress: number;
  error: string | null;
}

/**
 * Hook for animating numbers from 0 to target value
 * Perfect for statistics and metrics that should count up
 */
export const useAnimatedCounter = (
  targetValue: number,
  options: AnimatedCounterOptions = {}
): UseAnimatedCounterReturn => {
  const {
    duration = 1500,
    easing = easeOutQuart,
    startDelay = 0,
    onComplete,
    formatValue = formatAnimatedNumber,
    timeout = 10000, // 10 second timeout
  } = options;

  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const hasCompletedRef = useRef(false);
  const timeoutRef = useRef<number>();
  const isMountedRef = useRef(true);

  const adjustedDuration = getAdjustedDuration(duration);

  const cleanup = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }, []);

  const completeAnimation = useCallback((isTimeout = false) => {
    if (!isMountedRef.current) return;
    
    cleanup();
    setCurrentValue(targetValue);
    setProgress(1);
    setIsAnimating(false);
    
    if (isTimeout) {
      setError('Animation timed out');
    }
    
    if (!hasCompletedRef.current && onComplete) {
      hasCompletedRef.current = true;
      try {
        onComplete();
      } catch (err) {
        console.error('Animation completion callback error:', err);
        setError('Completion callback failed');
      }
    }
  }, [targetValue, onComplete, cleanup]);

  const animate = useCallback(() => {
    if (!isMountedRef.current) return;
    
    try {
      // Record frame for performance monitoring
      globalPerformanceMonitor.recordFrame();
      
      if (!startTimeRef.current) {
        startTimeRef.current = performance.now();
        globalPerformanceMonitor.start();
      }

      const currentTime = performance.now();
      const animationProgress = calculateAnimationProgress(
        startTimeRef.current,
        adjustedDuration,
        easing,
        currentTime
      );

      const newValue = interpolateValue(0, targetValue, animationProgress);
      
      if (isMountedRef.current) {
        setCurrentValue(newValue);
        setProgress(animationProgress);
      }

      if (animationProgress < 1 && isMountedRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        const perfStats = globalPerformanceMonitor.stop();
        if (perfStats.fps < 30) {
          console.warn('Animation performance warning: Low FPS detected', perfStats);
        }
        completeAnimation();
      }
    } catch (err) {
      console.error('Animation frame error:', err);
      setError('Animation frame failed');
      completeAnimation();
    }
  }, [targetValue, adjustedDuration, easing, completeAnimation]);

  const startAnimation = useCallback(() => {
    if (isAnimating || hasCompletedRef.current || !isMountedRef.current) return;

    try {
      // Clear any previous errors
      setError(null);
      
      // Cancel any existing animation
      cleanup();

      // Reset state
      setCurrentValue(0);
      setProgress(0);
      setIsAnimating(true);
      startTimeRef.current = undefined;
      hasCompletedRef.current = false;

      // Set timeout protection
      timeoutRef.current = window.setTimeout(() => {
        completeAnimation(true);
      }, timeout);

      // Start animation with delay if specified
      if (startDelay > 0) {
        setTimeout(() => {
          if (isMountedRef.current) {
            animationRef.current = requestAnimationFrame(animate);
          }
        }, startDelay);
      } else {
        animationRef.current = requestAnimationFrame(animate);
      }
    } catch (err) {
      console.error('Failed to start animation:', err);
      setError('Failed to start animation');
      setIsAnimating(false);
    }
  }, [isAnimating, startDelay, animate, cleanup, timeout, completeAnimation, targetValue]);

  const resetAnimation = useCallback(() => {
    cleanup();
    
    if (isMountedRef.current) {
      setCurrentValue(0);
      setProgress(0);
      setIsAnimating(false);
      setError(null);
    }
    
    startTimeRef.current = undefined;
    hasCompletedRef.current = false;
  }, [cleanup]);

  // Cleanup on unmount
  useEffect(() => {
    isMountedRef.current = true;
    
    return () => {
      isMountedRef.current = false;
      cleanup();
    };
  }, [cleanup]);

  // Validate target value
  useEffect(() => {
    if (typeof targetValue !== 'number' || !isFinite(targetValue)) {
      setError('Invalid target value');
    }
  }, [targetValue]);

  const displayValue = error ? '0' : formatValue(currentValue);

  return {
    currentValue,
    displayValue,
    isAnimating,
    startAnimation,
    resetAnimation,
    progress,
    error,
  };
};