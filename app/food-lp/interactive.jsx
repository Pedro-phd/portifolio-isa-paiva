'use client';

import React, { useId, useState } from 'react';
import { useReveal } from '@/components/sections';

/* ──────────────────────────────────────────────────────────────────────────
   Os dois únicos pedaços interativos de /food-lp. O resto da rota é Server
   Component, o que permite exportar metadata e mantém o bundle de cliente
   restrito a estes dois componentes.
   ────────────────────────────────────────────────────────────────────────── */

/** Casca da página. Observa os `.reveal` do próprio subtree (hook do portfólio). */
export function RevealRoot({ children }) {
  const ref = useReveal();
  return (
    <div className="fl-shell" ref={ref}>
      {children}
    </div>
  );
}

/** Acordeão de perguntas. O primeiro item abre por padrão (regra da seção S10). */
export function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  const uid = useId();

  return (
    <div className="fl-faq">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const btnId = `${uid}-b${i}`;
        const panelId = `${uid}-p${i}`;
        return (
          <div className="fl-faq-item reveal" key={item.q}>
            <h3 className="fl-faq-heading">
              <button
                type="button"
                id={btnId}
                className="fl-faq-btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span className="fl-faq-q">{item.q}</span>
                <span className="fl-faq-sign" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="fl-faq-panel"
              hidden={!isOpen}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
