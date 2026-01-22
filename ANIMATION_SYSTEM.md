# Animation System Documentation

## Overview

This project implements a comprehensive animation system for progress bars and counters that automatically triggers when elements come into view. The system is designed with performance, accessibility, and user experience in mind.

## Features

- **Viewport-triggered animations**: Animations start when elements enter the viewport
- **Smooth easing functions**: Multiple easing options for natural motion
- **Performance optimized**: GPU acceleration, throttling, and performance monitoring
- **Accessibility compliant**: Respects `prefers-reduced-motion` and includes proper ARIA attributes
- **Responsive design**: Adapts to mobile devices and slow connections
- **Error handling**: Robust error handling and resource cleanup
- **TypeScript support**: Full type safety and IntelliSense support

## Components

### AnimatedCounter

Animates numbers from 0 to a target value with smooth counting effect.

```tsx
import AnimatedCounter from '@/components/AnimatedCounter';

<AnimatedCounter 
  value={300} 
  duration={1500}
  suffix="人"
  startDelay={500}
/>
```

**Props:**
- `value`: Target number to count to
- `duration`: Animation duration in milliseconds (default: 1500)
- `suffix/prefix`: Text to append/prepend to the number
- `startDelay`: Delay before animation starts
- `triggerOnView`: Whether to trigger on viewport entry (default: true)
- `ariaLabel`: Custom accessibility label
- `announceChanges`: Whether to announce changes to screen readers

### AnimatedProgressBar

Animates progress bars from 0% to target percentage with smooth filling effect.

```tsx
import AnimatedProgressBar from '@/components/AnimatedProgressBar';

<AnimatedProgressBar 
  progress={85} 
  duration={1500}
  showPercentage={true}
  startDelay={200}
/>
```

**Props:**
- `progress`: Target percentage (0-100)
- `duration`: Animation duration in milliseconds (default: 1500)
- `showPercentage`: Whether to display percentage text
- `startDelay`: Delay before animation starts
- `triggerOnView`: Whether to trigger on viewport entry (default: true)
- `ariaLabel`: Custom accessibility label
- `height`: Custom height for the progress bar

## Hooks

### useAnimatedCounter

Low-level hook for number animations.

```tsx
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

const { displayValue, isAnimating, startAnimation } = useAnimatedCounter(100, {
  duration: 1000,
  easing: easeOutQuart,
});
```

### useAnimatedProgressBar

Low-level hook for progress bar animations.

```tsx
import { useAnimatedProgressBar } from '@/hooks/useAnimatedProgressBar';

const { currentProgress, startAnimation } = useAnimatedProgressBar(75, {
  duration: 1200,
  easing: easeOut,
});
```

### useIntersectionObserver

Detects when elements enter the viewport.

```tsx
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const { ref, hasIntersected } = useIntersectionObserver({
  threshold: 0.1,
  triggerOnce: true,
});
```

## Performance Features

- **GPU Acceleration**: Uses `transform` and `opacity` for smooth animations
- **RequestAnimationFrame**: Synced with browser refresh rate
- **Throttling**: Prevents excessive callback execution
- **Performance Monitoring**: Tracks FPS and warns about performance issues
- **Adaptive Duration**: Reduces animation time on slower devices
- **Resource Cleanup**: Proper cleanup on component unmount

## Accessibility Features

- **Reduced Motion Support**: Respects `prefers-reduced-motion: reduce`
- **ARIA Attributes**: Proper `role`, `aria-label`, and `aria-live` attributes
- **Keyboard Navigation**: Focusable elements with proper focus indicators
- **Screen Reader Support**: Announces changes when appropriate
- **High Contrast Support**: Adapts to high contrast mode preferences

## Browser Compatibility

- **Modern Browsers**: Full support for Chrome, Firefox, Safari, Edge
- **Intersection Observer**: Polyfill fallback for older browsers
- **RequestAnimationFrame**: Fallback to setTimeout if unavailable
- **Mobile Devices**: Optimized performance and touch-friendly

## Usage Examples

### Basic Counter Animation
```tsx
<AnimatedCounter value={42} />
```

### Progress Bar with Custom Styling
```tsx
<AnimatedProgressBar 
  progress={90}
  className="my-custom-class"
  barClassName="bg-green-500"
  showPercentage={true}
/>
```

### Delayed Animation Sequence
```tsx
<div>
  <AnimatedCounter value={4} startDelay={0} />
  <AnimatedCounter value={50} startDelay={200} />
  <AnimatedCounter value={300} startDelay={400} />
</div>
```

## Configuration

The animation system automatically adapts based on:
- User motion preferences (`prefers-reduced-motion`)
- Device capabilities (mobile, desktop)
- Network conditions (slow connections)
- Performance characteristics

## Troubleshooting

### Animations Not Starting
- Check if element is in viewport
- Verify `triggerOnView` setting
- Check browser console for errors

### Performance Issues
- Monitor console for FPS warnings
- Reduce number of simultaneous animations
- Check device capabilities

### Accessibility Issues
- Test with screen readers
- Verify ARIA attributes
- Check keyboard navigation

## Best Practices

1. **Stagger Animations**: Use `startDelay` to create smooth sequences
2. **Reasonable Durations**: Keep animations between 800-2000ms
3. **Respect User Preferences**: Always support reduced motion
4. **Test Performance**: Monitor FPS on various devices
5. **Provide Fallbacks**: Ensure content is accessible without animations