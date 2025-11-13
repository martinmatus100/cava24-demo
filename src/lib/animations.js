import { cubicOut } from 'svelte/easing';

export function fadeSlide(node, { delay = 0, duration = 600, y = 20 }) {
  return {
    delay,
    duration,
    css: (t) => `
      opacity: ${t};
      transform: translateY(${(1 - t) * y}px);
    `
  };
}
