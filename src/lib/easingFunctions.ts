/**
 * Easing functions for smooth animations
 * These functions take a normalized time value (0-1) and return a progress value (0-1)
 */

export type EasingFunction = (t: number) => number;

/**
 * Linear easing - constant speed
 */
export const linear: EasingFunction = (t: number) => t;

/**
 * Ease out - starts fast, slows down at the end
 * Perfect for progress bars that should fill quickly then slow down
 */
export const easeOut: EasingFunction = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Ease in out - slow start, fast middle, slow end
 * Good for general animations
 */
export const easeInOut: EasingFunction = (t: number) => 
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

/**
 * Ease out quart - very smooth deceleration
 * Perfect for number counting animations that should slow down near the target
 */
export const easeOutQuart: EasingFunction = (t: number) => 1 - Math.pow(1 - t, 4);

/**
 * Ease out cubic - smooth deceleration for progress bars
 */
export const easeOutCubic: EasingFunction = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Collection of all easing functions
 */
export const easingFunctions = {
  linear,
  easeOut,
  easeInOut,
  easeOutQuart,
  easeOutCubic,
} as const;

export type EasingType = keyof typeof easingFunctions;