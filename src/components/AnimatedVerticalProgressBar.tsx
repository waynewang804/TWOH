import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import { useAnimatedProgressBar } from '@/hooks/useAnimatedProgressBar';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { EasingFunction } from '@/lib/easingFunctions';
import { getAdjustedThreshold } from '@/lib/animationHelpers';

export interface AnimatedVerticalProgressBarProps {
  progress: number;
  duration?: number;
  className?: string;
  barClassName?: string;
  triggerOnView?: boolean;
  triggerOnHover?: boolean;
  easing?: EasingFunction;
  startDelay?: number;
  onComplete?: () => void;
  threshold?: number;
  // Accessibility props
  ariaLabel?: string;
  ariaValueText?: string;
  role?: string;
  announceChanges?: boolean;
}

export interface AnimatedVerticalProgressBarRef {
  resetAnimation: () => void;
  startAnimation: () => void;
}

/**
 * AnimatedVerticalProgressBar component that fills from bottom to top (0% to target percentage)
 * Automatically triggers when element comes into view
 */
export const AnimatedVerticalProgressBar = forwardRef<AnimatedVerticalProgressBarRef, AnimatedVerticalProgressBarProps>(({
  progress,
  duration = 1500,
  className = '',
  barClassName = '',
  triggerOnView = true,
  triggerOnHover = false,
  easing,
  startDelay = 0,
  onComplete,
  threshold = 0.1,
  ariaLabel,
  ariaValueText,
  role = 'progressbar',
  announceChanges = false,
}, ref) => {
  const { ref: intersectionRef, hasIntersected } = useIntersectionObserver({
    threshold: getAdjustedThreshold(threshold),
    triggerOnce: true,
  });

  const {
    currentProgress,
    isAnimating,
    startAnimation,
    resetAnimation,
    error,
  } = useAnimatedProgressBar(progress, {
    duration,
    easing,
    startDelay,
    onComplete,
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
      console.warn('AnimatedVerticalProgressBar error:', error);
    }
  }, [error]);

  return (
    <div 
      ref={intersectionRef as React.RefObject<HTMLDivElement>}
      className={`vertical-progress-bar ${className} ${isAnimating ? 'animating' : ''} ${error ? 'error' : ''} ${triggerOnHover ? 'cursor-pointer' : ''}`}
      role={role}
      aria-label={ariaLabel || `Progress: ${Math.round(progress)}%`}
      aria-valuenow={Math.round(currentProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext={ariaValueText || `${Math.round(currentProgress)} percent`}
      aria-live={announceChanges ? 'polite' : 'off'}
      title={error || undefined}
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
    >
      <div 
        className={`vertical-progress-fill ${barClassName}`}
        style={{ 
          height: `${currentProgress}%`,
          transition: 'none', // We handle animation manually
        }}
        aria-hidden="true"
      />
    </div>
  );
});

export default AnimatedVerticalProgressBar;