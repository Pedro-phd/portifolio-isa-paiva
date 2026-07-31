'use client';

import { useEffect, useRef } from 'react';

const POINTER_RANGE_X = 15;
const POINTER_RANGE_Y = 12;
const ACTIVE_RATIO = 0.42;
const INACTIVE_RATIO = 0.2;

export default function FoodMotion({ className, children }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const sections = Array.from(root.querySelectorAll(':scope > section'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    root.dataset.foodMotion = 'ready';

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= ACTIVE_RATIO) {
            entry.target.setAttribute('data-food-active', '');
          } else if (entry.intersectionRatio < INACTIVE_RATIO) {
            entry.target.removeAttribute('data-food-active');
          }
        });
      },
      {
        root,
        threshold: [0.1, INACTIVE_RATIO, ACTIVE_RATIO, 0.7],
      },
    );

    sections.forEach((section) => sectionObserver.observe(section));
    sections[0]?.setAttribute('data-food-active', '');

    let pointerFrame = 0;
    let lastPointer = null;

    const onPointerMove = (event) => {
      if (reducedMotion.matches || !finePointer.matches) return;
      lastPointer = { x: event.clientX, y: event.clientY, target: event.target };
      if (pointerFrame) return;

      pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0;
        if (!lastPointer) return;

        const section = lastPointer.target.closest?.('section');
        if (!section || !root.contains(section)) return;

        const bounds = section.getBoundingClientRect();
        if (!bounds.width || !bounds.height) return;

        const x = (lastPointer.x - bounds.left) / bounds.width - 0.5;
        const y = (lastPointer.y - bounds.top) / bounds.height - 0.5;
        section.style.setProperty('--food-px', `${(x * POINTER_RANGE_X).toFixed(2)}px`);
        section.style.setProperty('--food-py', `${(y * POINTER_RANGE_Y).toFixed(2)}px`);
      });
    };

    const onPointerLeave = () => {
      lastPointer = null;
      sections.forEach((section) => {
        section.style.setProperty('--food-px', '0px');
        section.style.setProperty('--food-py', '0px');
      });
    };

    root.addEventListener('pointermove', onPointerMove, { passive: true });
    root.addEventListener('pointerleave', onPointerLeave, { passive: true });

    return () => {
      sectionObserver.disconnect();
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      root.removeEventListener('pointermove', onPointerMove);
      root.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <main className={className} ref={rootRef}>
      {children}
    </main>
  );
}
