import React, { useRef, useState } from 'react';
import { EMAIL, SOCIAL_LINKS, Icon } from '../data/portfolioData';
import { triggerConfetti } from '../utils/confetti';

export const ContactSection: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState('');
  const addrRef = useRef<HTMLSpanElement | null>(null);
  const copyBtnRef = useRef<HTMLButtonElement | null>(null);
  const timerRef = useRef<number | null>(null);

  const handleCopyEmail = () => {
    if (copyBtnRef.current) {
      const r = copyBtnRef.current.getBoundingClientRect();
      triggerConfetti(r.left + r.width / 2, r.top, 120);
    }

    const showMsg = (msg: string) => {
      setCopyStatus(msg);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopyStatus(''), 3200);
    };

    const fallback = () => {
      if (addrRef.current) {
        const range = document.createRange();
        range.selectNodeContents(addrRef.current);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
      showMsg('Selected. Press Ctrl+C or Cmd+C to copy.');
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(() => {
        showMsg('Copied. Now go send it.');
      }, fallback);
    } else {
      fallback();
    }
  };

  return (
    <section id="hi">
      <div className="wrap">
        <div className="say">
          <div className="say-main">
            <p className="mono">Contact</p>
            <h2>Let's build from scratch.</h2>
            <p>
              Tell me what you're building. Systems programming, compiler experiments, practical applications, or creative code.
            </p>
            <div className="mail">
              <span className="addr" id="addr" ref={addrRef}>
                {EMAIL}
              </span>
              <button
                ref={copyBtnRef}
                className="btn"
                id="copy"
                type="button"
                onClick={handleCopyEmail}
              >
                Copy my email
              </button>
            </div>
            <p
              className="mono"
              id="copy-status"
              role="status"
              aria-live="polite"
              style={{ margin: '18px 0 0', minHeight: '1.2em' }}
            >
              {copyStatus}
            </p>
          </div>

          <div className="say-links">
            <p className="mono">Find me elsewhere</p>
            <ul id="links">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    className="link"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--bgc': link.color } as React.CSSProperties}
                  >
                    <span className="ico">
                      <Icon name={link.icon} />
                    </span>
                    <span className="t">
                      <b>{link.name}</b>
                      <small>{link.handle}</small>
                    </span>
                    <span className="arr">
                      <Icon name="arrow" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
