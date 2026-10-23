import React from 'react';
import { SKILL_GROUPS, Icon } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="mono" style={{ marginBottom: '14px' }}>
              What I do
            </p>
            <h2>Toolkit & Systems</h2>
          </div>
          <p>From low-level x86-64 assembly to interactive client apps and creative algorithms.</p>
        </div>

        <div className="skills" id="skills-grid">
          {SKILL_GROUPS.map((g) => (
            <article
              key={g.name}
              className="skill"
              style={{ '--bgc': g.color } as React.CSSProperties}
            >
              <div className="skill-head">
                <span className="ico">
                  <Icon name={g.icon} />
                </span>
                <h3>{g.name}</h3>
              </div>
              <p>{g.description}</p>
              <div className="tags">
                {g.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: '36px',
            background: 'var(--card)',
            border: '2.5px solid var(--ink)',
            borderRadius: '24px',
            padding: '24px 18px',
            boxShadow: '5px 5px 0 var(--ink)',
            textAlign: 'center',
          }}
        >
          <p className="mono" style={{ marginBottom: '14px' }}>
            Technologies &amp; Languages
          </p>
          <img
            src="https://skillicons.dev/icons?i=linux,git,github,c,cpp,java,dart,flutter,html,css,js&theme=dark&perline=11"
            alt="Technology stack"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};
