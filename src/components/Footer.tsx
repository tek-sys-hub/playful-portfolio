import React from 'react';
import { SOCIAL_LINKS, Icon } from '../data/portfolioData';

interface FooterProps {
  pokes: number;
}

export const Footer: React.FC<FooterProps> = ({ pokes }) => {
  return (
    <footer>
      <div className="wrap foot">
        <div className="foot-brand">
          <a className="logo" href="#top">
            <i />cherry
          </a>
          <p>
            Tek Raj Awasthi (Cherry) · Independent Developer · Systems · Creative Code. Building things from the ground up.
          </p>
        </div>

        <nav className="foot-nav" aria-label="Footer">
          <p className="mono">Explore</p>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#hi">Contact</a>
        </nav>

        <div className="foot-social">
          <p className="mono">Find me</p>
          <div className="icons" id="foot-icons">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                className="ibtn"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.name}
              >
                <Icon name={link.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="foot-base mono">
          <span>CHERRY &copy; 2026 · Less hype. More building.</span>
          <span>
            You've poked Bloop <b id="pokes">{pokes}</b> {pokes === 1 ? 'time' : 'times'}
          </span>
          <a href="#top">Back to the top</a>
        </div>
      </div>
    </footer>
  );
};
