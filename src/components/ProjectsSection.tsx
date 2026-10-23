import React, { useState } from 'react';
import { PROJECTS, CoverArt } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

type CategoryFilter = 'All' | 'Systems' | 'Creative Code' | 'Applications';

const CATEGORIES: CategoryFilter[] = ['All', 'Systems', 'Creative Code', 'Applications'];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredProjects: Project[] = PROJECTS.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section className="work" id="work">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="mono" style={{ marginBottom: '14px' }}>
              Featured Repositories
            </p>
            <h2>Things I built</h2>
          </div>
          <p>Building things from the ground up: low-level computing, compiler design, and creative code.</p>
        </div>

        <div className="filters" id="filters" role="group" aria-label="Filter projects">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className="chip"
              type="button"
              data-cat={cat}
              aria-pressed={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="board" id="board">
          {filteredProjects.map((p, index) => {
            const isFeature = filteredProjects.length >= 3 && index === 0;
            return (
              <article
                key={p.id}
                className={`card ${isFeature ? 'feature' : ''}`}
                data-cat={p.category}
                style={{ '--bgc': p.color } as React.CSSProperties}
              >
                <div className="cover">
                  <CoverArt name={p.coverKey} />
                </div>
                <div className="card-body">
                  <div className="card-meta mono">
                    <span>{p.tag}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn small"
                      >
                        Live Demo ↗
                      </a>
                    )}
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn small ${p.liveUrl ? 'ghost' : ''}`}
                    >
                      {p.liveUrl ? 'GitHub ↗' : 'View on GitHub →'}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <a
            href="https://github.com/tek-sys-hub?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn ghost"
          >
            Explore all repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};
