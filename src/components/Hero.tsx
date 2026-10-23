import React from 'react';
import { FunnyHeroMascot } from './FunnyHeroMascot';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="status mono">
              <b />
              Independent Developer · Systems · Creative Code
            </div>
            <h1 id="headline">
              Hi, I'm Cherry. I build <em className="hl">from the ground up</em>.
            </h1>
            <p className="lede">
              Tek Raj Awasthi (aka Cherry). Developing systems programming languages, low-level computing, and creative interactive experiences. <strong>Less hype. More building.</strong>
            </p>
            <div className="cta">
              <a className="btn" href="#work">
                Explore Projects
              </a>
              <a
                className="btn ghost"
                href="https://github.com/tek-sys-hub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile ↗
              </a>
            </div>
          </div>

          <div className="hero-right">
            <FunnyHeroMascot />
          </div>
        </div>
      </div>
    </section>
  );
};
