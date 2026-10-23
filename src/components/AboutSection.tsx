import React, { useState } from 'react';
import { FLIP_CARDS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [flippedMap, setFlippedMap] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="mono" style={{ marginBottom: '14px' }}>
              A bit about me
            </p>
            <h2>Know me in four cards</h2>
          </div>
          <p>Tap a card to turn it over.</p>
        </div>

        <div className="flips" id="flips">
          {FLIP_CARDS.map((f) => {
            const isFlipped = !!flippedMap[f.id];
            return (
              <button
                key={f.id}
                className="flip"
                type="button"
                aria-pressed={isFlipped}
                style={{ '--bgc': f.color } as React.CSSProperties}
                onClick={() => toggleFlip(f.id)}
              >
                <span className="flip-in">
                  <span className="face front">
                    <span className="tap mono">
                      <span>{f.tag}</span>
                      <span>Tap</span>
                    </span>
                    <span className="q">{f.question}</span>
                  </span>
                  <span className="face back">
                    <span className="tap mono">
                      <span>{f.tag}</span>
                      <span>Tap again</span>
                    </span>
                    <span className="a">{f.answer}</span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
