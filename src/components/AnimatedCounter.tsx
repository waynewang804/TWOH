import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { EasingFunction } from '@/lib/easingFunctions';
import { getAdjustedThreshold } from '@/lib/animationHelpers';

export interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  formatValue?: (value: number) => string;
  triggerOnView?: boolean;
  triggerOnHover?: boolean;
  easing?: EasingFunction;
  startDelay?: number;
  onComplete?: () => void;
  threshold?: number;
  // Accessibility props
  ariaLabel?: string;
  announceChanges?: boolean;
  role?: string;
}

export interface AnimatedCounterRef {
  resetAnimation: () => void;
  startAnimation: () => void;
}

/**
 * AnimatedCounter component that counts from 0 to target value
 * Automatically triggers when element comes into view
 */
export const AnimatedCounter = forwardRef<AnimatedCounterRef, AnimatedCounterProps>(({
  value,
  duration = 1500,
  className = '',
  suffix = '',
  prefix = '',
  formatValue,
  triggerOnView = true,
  triggerOnHover = false,
  easing,
  startDelay = 0,
  onComplete,
  threshold = 0.1,
  ariaLabel,
  announceChanges = false,
  role = 'status',
}, ref) => {
  const { ref: intersectionRef, hasIntersected } = useIntersectionObserver({
    threshold: getAdjustedThreshold(threshold),
    triggerOnce: true,
  });

  const {
    displayValue,
    isAnimating,
    startAnimation,
    resetAnimation,
    error,
  } = useAnimatedCounter(value, {
    duration,
    easing,
    startDelay,
    onComplete,
    formatValue,
  });

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    resetAnimation,
    startAnimation,
  }), [resetAnimation, startAnimation]);

  // Start animation when element comes into view or immediately if triggerOnView is false
  useEffect(() => {
    if (triggerOnView) {
      if (hasIntersected) {
        startAnimation();
      }
    } else if (!triggerOnHover) {
      // Start animation immediately if not triggered by hover
      startAnimation();
    }
  }, [hasIntersected, triggerOnView, triggerOnHover]); // Removed startAnimation dependency to prevent re-triggering

  // Handle hover events
  const handleMouseEnter = () => {
    if (triggerOnHover) {
      resetAnimation();
      // Small delay to ensure reset is complete
      setTimeout(() => {
        startAnimation();
      }, 50);
    }
  };

  // Log errors for debugging
  useEffect(() => {
    if (error) {
      console.warn('AnimatedCounter error:', error);
    }
  }, [error]);

  return (
    <span 
      ref={intersectionRef}
      className={`animated-counter ${className} ${isAnimating ? 'animating' : ''} ${error ? 'error' : ''} ${triggerOnHover ? 'cursor-pointer' : ''}`}
      aria-live={announceChanges ? 'polite' : 'off'}
      aria-label={ariaLabel || `${prefix}${value}${suffix}`}
      role={role}
      title={error || undefined}
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
    >
      {prefix}{displayValue}{suffix}
    </span>
  );
});

export default AnimatedCounter;