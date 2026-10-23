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
              🇳🇵 Based in Nepal · BSc. CSIT · Systems &amp; Code
            </div>
            <h1 id="headline">
              Hi, I'm{' '}
              <span className="title-cherry-wrap">
                <img src="/cherry-logo.svg" alt="Cherry" className="title-cherry-img" />
                Cherry
              </span>
              . I build <em className="hl">from the ground up</em>.
            </h1>
            <p className="lede">
              Tek Raj Awasthi (aka Cherry). BSc. CSIT student and independent developer from Nepal 🇳🇵. Creator of <strong>Rubix</strong>, a systems programming language built from scratch in x86-64 assembly. Focused on low-level computing, compiler design, and creative code. <strong>Less hype. More building.</strong>
            </p>

            <div className="hero-pills">
              <span className="hero-pill">📍 Nepal</span>
              <span className="hero-pill">🎓 BSc. CSIT</span>
              <span className="hero-pill">⚙️ Rubix (x86-64 Language)</span>
              <span className="hero-pill">💻 Low-Level &amp; Systems</span>
            </div>

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
