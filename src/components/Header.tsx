import React from 'react';
import { SOCIAL_LINKS, Icon } from '../data/portfolioData';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#top" title="Cherry (Tek Raj Awasthi)">
          <i />cherry
        </a>
        <div className="head-actions">
          <button
            className="btn ghost theme"
            id="theme"
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={onToggleTheme}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="8" />
              <path d="M12 4v16" />
              <path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" />
            </svg>
          </button>
          <div className="icons" id="head-icons">
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
      </div>
    </header>
  );
};
