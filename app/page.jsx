'use client';

import React, { useEffect } from 'react';
import {
  Nav,
  Hero,
  About,
  VideoMosaic,
  Services,
  Brands,
  Cases,
  Contact,
} from '@/components/sections';
import CustomCursor from '@/components/custom-cursor';
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRadio,
  TweakToggle,
} from '@/components/tweaks-panel';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "cinematic",
  "showCursor": true
}/*EDITMODE-END*/;

/* ─── tweaks ──────────────────────────────────────────────────────── */
function PortfolioTweaks({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Direção visual" />
      <TweakRadio
        label="Estilo"
        value={t.direction}
        onChange={(v) => setTweak("direction", v)}
        options={[
          { value: "editorial", label: "Editorial" },
          { value: "swiss", label: "Swiss" },
          { value: "cinematic", label: "Cinema" },
        ]}
      />
      <div style={{ padding: "4px 0 12px", fontSize: 11, color: "#888", lineHeight: 1.5 }}>
        {t.direction === "editorial" && "Serif Instrument · whitespace generoso · creme · estilo revista."}
        {t.direction === "swiss" && "Helvetica · grid rígido · ultra-clean Apple/Bauhaus."}
        {t.direction === "cinematic" && "Dark mode · presença forte · sensação de filme."}
      </div>
      <TweakSection label="Interação" />
      <TweakToggle
        label="Cursor custom"
        value={t.showCursor}
        onChange={(v) => setTweak("showCursor", v)}
      />
    </TweaksPanel>
  );
}

/* ─── app ─────────────────────────────────────────────────────────── */
export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.setAttribute("data-dir", t.direction);
  }, [t.direction]);

  return (
    <div className="shell">
      <CustomCursor enabled={t.showCursor} />
      <Nav />
      <Hero />
      <About />
      <VideoMosaic />
      <Services />
      <Brands />
      <Cases />
      <Contact />
      <PortfolioTweaks t={t} setTweak={setTweak} />
    </div>
  );
}
