'use client';

import { useEffect, useRef } from 'react';

export default function FoodMotion({ children }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    root.classList.add('rf-motion-ready');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const scroller = root.querySelector('.rf-page');
    const sections = Array.from(root.querySelectorAll('.rf-section'));
    const revealItems = Array.from(root.querySelectorAll('.rf-reveal'));
    let hashFrame = 0;

    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const target = id ? root.querySelector(`#${CSS.escape(id)}`) : sections[0];
      if (!scroller || !target) return;

      hashFrame = requestAnimationFrame(() => {
        scroller.scrollTop = target.offsetTop;
      });
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      { root: scroller, rootMargin: '-4% 0px -4% 0px', threshold: 0.14 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-active', entry.intersectionRatio >= 0.55);
        });
      },
      { root: scroller, threshold: [0.25, 0.55, 0.85] },
    );

    sections.forEach((section) => sectionObserver.observe(section));
    sections[0]?.classList.add('is-active');

    let frame = 0;

    const onPointerMove = (event) => {
      if (reducedMotion.matches || !finePointer.matches) return;
      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const section = event.target.closest('.rf-section');
        if (!section) return;
        const bounds = section.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        section.style.setProperty('--pointer-x', `${x * -8}px`);
        section.style.setProperty('--pointer-y', `${y * -6}px`);
      });
    };

    const onPointerLeave = () => {
      sections.forEach((section) => {
        section.style.setProperty('--pointer-x', '0px');
        section.style.setProperty('--pointer-y', '0px');
      });
    };

    const onClick = async (event) => {
      const swatch = event.target.closest('[data-copy-color]');
      if (!swatch) return;
      const color = swatch.dataset.copyColor;
      const status = swatch.parentElement.querySelector('.rf-copy-status');

      try {
        await navigator.clipboard.writeText(color);
        swatch.dataset.copied = 'true';
        if (status) status.textContent = `Cor ${color} copiada.`;
        window.setTimeout(() => {
          delete swatch.dataset.copied;
        }, 1200);
      } catch {
        if (status) status.textContent = `Cor ${color}.`;
      }
    };

    root.addEventListener('pointermove', onPointerMove, { passive: true });
    root.addEventListener('pointerleave', onPointerLeave, { passive: true });
    root.addEventListener('click', onClick);

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      if (frame) cancelAnimationFrame(frame);
      if (hashFrame) cancelAnimationFrame(hashFrame);
      window.removeEventListener('hashchange', scrollToHash);
      root.removeEventListener('pointermove', onPointerMove);
      root.removeEventListener('pointerleave', onPointerLeave);
      root.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className="rf-root" ref={rootRef}>
      {children}
    </div>
  );
}
