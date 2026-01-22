import { useEffect, useRef, useState, RefObject } from 'react';
import { getAdjustedThreshold, throttle } from '@/lib/animationHelpers';

export interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  root?: Element | null;
}

export interface UseIntersectionObserverReturn {
  ref: RefObject<HTMLElement>;
  isIntersecting: boolean;
  hasIntersected: boolean;
  intersectionRatio: number;
}

/**
 * Hook to detect when an element enters the viewport
 * Triggers animations when elements become visible
 */
export const useIntersectionObserver = (
  options: IntersectionObserverOptions = {}
): UseIntersectionObserverReturn => {
  const {
    threshold = getAdjustedThreshold(0.1),
    rootMargin = '0px',
    triggerOnce = true,
    root = null,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!window.IntersectionObserver) {
      // Fallback: immediately trigger animation
      setIsIntersecting(true);
      setHasIntersected(true);
      setIntersectionRatio(1);
      return;
    }

    // Throttle the intersection callback to improve performance
    const throttledCallback = throttle((entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      const isCurrentlyIntersecting = entry.isIntersecting;
      const currentRatio = entry.intersectionRatio;

      setIsIntersecting(isCurrentlyIntersecting);
      setIntersectionRatio(currentRatio);

      if (isCurrentlyIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }

      // If triggerOnce is false, allow re-triggering
      if (!triggerOnce && !isCurrentlyIntersecting && hasIntersected) {
        setHasIntersected(false);
      }
    }, 16); // ~60fps throttling

    const observer = new IntersectionObserver(throttledCallback, {
      threshold,
      rootMargin,
      root,
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, root, hasIntersected]);

  return {
    ref,
    isIntersecting,
    hasIntersected,
    intersectionRatio,
  };
};