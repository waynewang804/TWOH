import { useState, useEffect, useCallback, useRef } from 'react';
import { EasingFunction, easeOut } from '@/lib/easingFunctions';
import { 
  calculateAnimationProgress, 
  interpolateValue, 
  getAdjustedDuration,
  clamp 
} from '@/lib/animationHelpers';

export interface AnimatedProgressBarOptions {
  duration?: number;
  easing?: EasingFunction;
  startDelay?: number;
  onComplete?: () => void;
  timeout?: number; // Maximum animation time before force completion
}

export interface UseAnimatedProgressBarReturn {
  currentProgress: number;
  isAnimating: boolean;
  startAnimation: () => void;
  resetAnimation: () => void;
  animationProgress: number;
  error: string | null;
}

/**
 * Hook for animating progress bars from 0% to target percentage
 * Perfect for visual progress indicators and completion bars
 */
export const useAnimatedProgressBar = (
  targetProgress: number,
  options: AnimatedProgressBarOptions = {}
): UseAnimatedProgressBarReturn => {
  const {
    duration = 1500,
    easing = easeOut,
    startDelay = 0,
    onComplete,
    timeout = 10000, // 10 second timeout
  } = options;

  // Ensure target progress is between 0 and 100
  const clampedTarget = clamp(targetProgress, 0, 100);

  const [currentProgress, setCurrentProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
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
    setCurrentProgress(clampedTarget);
    setAnimationProgress(1);
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
  }, [clampedTarget, onComplete, cleanup]);

  const animate = useCallback(() => {
    if (!isMountedRef.current) return;
    
    try {
      if (!startTimeRef.current) {
        startTimeRef.current = performance.now();
      }

      const currentTime = performance.now();
      const progress = calculateAnimationProgress(
        startTimeRef.current,
        adjustedDuration,
        easing,
        currentTime
      );

      const newProgress = interpolateValue(0, clampedTarget, progress);
      
      if (isMountedRef.current) {
        setCurrentProgress(newProgress);
        setAnimationProgress(progress);
      }

      if (progress < 1 && isMountedRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        completeAnimation();
      }
    } catch (err) {
      console.error('Animation frame error:', err);
      setError('Animation frame failed');
      completeAnimation();
    }
  }, [clampedTarget, adjustedDuration, easing, completeAnimation]);

  const startAnimation = useCallback(() => {
    if (isAnimating || hasCompletedRef.current || !isMountedRef.current) return;

    try {
      // Clear any previous errors
      setError(null);
      
      // Cancel any existing animation
      cleanup();

      // Reset state
      setCurrentProgress(0);
      setAnimationProgress(0);
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
  }, [isAnimating, startDelay, animate, cleanup, timeout, completeAnimation]);

  const resetAnimation = useCallback(() => {
    cleanup();
    
    if (isMountedRef.current) {
      setCurrentProgress(0);
      setAnimationProgress(0);
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

  // Validate target progress
  useEffect(() => {
    if (typeof targetProgress !== 'number' || !isFinite(targetProgress)) {
      setError('Invalid target progress');
    }
  }, [targetProgress]);

  return {
    currentProgress: error ? 0 : currentProgress,
    isAnimating,
    startAnimation,
    resetAnimation,
    animationProgress,
    error,
  };
};