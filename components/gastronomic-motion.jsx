'use client';

import { useEffect, useRef } from 'react';

export default function GastronomicMotion({ children }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const scroller = root.querySelector('.gp-page');
    const sections = Array.from(root.querySelectorAll('.gp-section'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    root.classList.add('gp-motion-ready');

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            'is-active',
            entry.isIntersecting && entry.intersectionRatio >= 0.56,
          );
        });
      },
      {
        root: scroller,
        threshold: [0.15, 0.56, 0.82],
      },
    );

    sections.forEach((section) => sectionObserver.observe(section));
    sections[0]?.classList.add('is-active');

    const hashTarget = window.location.hash
      ? document.getElementById(window.location.hash.slice(1))
      : null;

    if (hashTarget && scroller.contains(hashTarget)) {
      requestAnimationFrame(() => {
        scroller.scrollTo({ top: hashTarget.offsetTop, behavior: 'instant' });
      });
    }

    let pointerFrame = 0;
    const onPointerMove = (event) => {
      if (reducedMotion.matches || !finePointer.matches) return;
      if (pointerFrame) cancelAnimationFrame(pointerFrame);

      pointerFrame = requestAnimationFrame(() => {
        const section = event.target.closest('.gp-section');
        if (!section) return;
        const bounds = section.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        section.style.setProperty('--gp-pointer-x', `${x * 9}px`);
        section.style.setProperty('--gp-pointer-y', `${y * 7}px`);
      });
    };

    const onPointerLeave = () => {
      sections.forEach((section) => {
        section.style.setProperty('--gp-pointer-x', '0px');
        section.style.setProperty('--gp-pointer-y', '0px');
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
    <div className="gp-root" ref={rootRef}>
      {children}
    </div>
  );
}
