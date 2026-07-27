'use client';

import React, { useEffect, useRef, useState } from 'react';

/* ─── custom cursor ───────────────────────────────────────────────────────
   Signature 6px dot + 36px ring, mix-blend-mode difference. Grows over links
   and turns into a "Play" disc over [data-cursor="video"] targets. Hidden on
   coarse pointers. Shared by the home page and the niche pages.
   ────────────────────────────────────────────────────────────────────────── */
export default function CustomCursor({ enabled = true }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const pos = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef(null);
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    setCoarse(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (!enabled || coarse) return;
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    const onOver = (e) => {
      const el = e.target.closest("[data-cursor]");
      if (!ringRef.current) return;
      ringRef.current.classList.remove("is-hover", "is-video");
      if (dotRef.current) dotRef.current.classList.remove("is-video");
      if (labelRef.current) labelRef.current.textContent = "";
      if (!el) return;
      const kind = el.dataset.cursor;
      if (kind === "video") {
        ringRef.current.classList.add("is-video");
        if (dotRef.current) dotRef.current.classList.add("is-video");
        if (labelRef.current) labelRef.current.textContent = "Play";
      } else {
        ringRef.current.classList.add("is-hover");
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    const loop = () => {
      const t = target.current;
      const p = pos.current;
      p.rx += (t.x - p.rx) * 0.18;
      p.ry += (t.y - p.ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${p.rx}px, ${p.ry}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf.current);
    };
  }, [enabled, coarse]);

  if (!enabled || coarse) return null;
  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring">
        <span ref={labelRef} className="cursor-label"></span>
      </div>
    </>
  );
}
