import React from 'react';

export interface Project {
  id: string;
  title: string;
  tag: string;
  category: 'Systems' | 'Creative Code' | 'Applications';
  year: string;
  color: string;
  coverKey: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
}

export interface FlipCardItem {
  id: string;
  question: string;
  answer: string;
  color: string;
  tag: string;
}

export interface SkillGroup {
  name: string;
  icon: 'code' | 'palette' | 'pencil' | 'sliders';
  color: string;
  description: string;
  tags: string[];
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  icon: 'code' | 'palette' | 'briefcase' | 'camera';
  color: string;
}

export const EMAIL = 'tekawasthi87@gmail.com';

export const MARQUEE_SKILLS = [
  'Independent Developer',
  'Systems Programming',
  'x86-64 Assembly',
  'Compiler Design',
  'C & C++',
  'Creative Code',
  'Arch Linux',
  'Flutter & Dart',
  'Building From Scratch',
];

export const PROJECTS: Project[] = [
  {
    id: 'rubix-lang',
    title: 'Rubix-lang',
    tag: 'Assembly · Systems',
    category: 'Systems',
    year: '2026',
    color: 'var(--hot)',
    coverKey: 'rubix',
    description:
      'A programming language built from scratch in x86-64 assembly, focused on low-level systems development and raw machine efficiency.',
    repoUrl: 'https://github.com/tek-sys-hub/Rubix-lang',
  },
  {
    id: 'botanical-pixels',
    title: 'botanical-pixels',
    tag: 'Creative Coding · Art',
    category: 'Creative Code',
    year: '2025',
    color: 'var(--mint)',
    coverKey: 'botanical',
    description:
      'A creative coding project exploring botanical visuals, generative algorithmic growth, and computational floral art.',
    repoUrl: 'https://github.com/tek-sys-hub/botanical-pixels',
    liveUrl: 'https://www.smilling.dev',
  },
  {
    id: 'spectrum-editor',
    title: 'spectrum-editor',
    tag: 'Creative Tool · Web App',
    category: 'Applications',
    year: '2025',
    color: 'var(--pink)',
    coverKey: 'spectrum',
    description:
      'An interactive web-based creative code and shader/spectrum editor providing real-time visual experimentation and intuitive controls.',
    repoUrl: 'https://github.com/tek-sys-hub/spectrum-editor',
    liveUrl: 'https://spectrum-editor.vercel.app/',
  },
  {
    id: 'zarona',
    title: 'zarona',
    tag: 'Web Platform · Design',
    category: 'Applications',
    year: '2025',
    color: 'var(--sky)',
    coverKey: 'zarona',
    description:
      'A clean, modern web application exploring expressive layout dynamics, curated typography, and responsive interface architecture.',
    repoUrl: 'https://github.com/tek-sys-hub/zarona',
    liveUrl: 'https://zarona.vercel.app/',
  },
  {
    id: 'arch-rice',
    title: 'arch-rice',
    tag: 'Linux · Workflow',
    category: 'Systems',
    year: '2025',
    color: 'var(--lilac)',
    coverKey: 'arch',
    description:
      'A tuned, minimal Arch Linux environment with aesthetic tiling window management, keyboard-driven productivity, and custom dotfiles.',
    repoUrl: 'https://github.com/tek-sys-hub/arch-rice',
  },
  {
    id: 'lunelle',
    title: 'lunelle',
    tag: 'Health & Cycle · App',
    category: 'Applications',
    year: '2025',
    color: 'var(--pink)',
    coverKey: 'lunelle',
    description:
      'A gentle, privacy-conscious menstrual cycle and period tracker designed with comforting aesthetics, cycle phase insights, and discreet symptom logging.',
    repoUrl: 'https://github.com/tek-sys-hub/lunelle',
  },
  {
    id: 'agro-app',
    title: 'agro-app',
    tag: 'App Dev · Agriculture',
    category: 'Applications',
    year: '2025',
    color: 'var(--sunny)',
    coverKey: 'agro',
    description:
      'An agriculture-focused application exploring practical digital tools, agricultural monitoring, and actionable utilities for farmers.',
    repoUrl: 'https://github.com/tek-sys-hub/agro-app',
  },
];

export const FLIP_CARDS: FlipCardItem[] = [
  {
    id: '1',
    question: 'What drives me?',
    answer: 'Building things from the ground up.',
    color: 'var(--sunny)',
    tag: 'Mission',
  },
  {
    id: '2',
    question: 'Current focus?',
    answer: 'Developing Rubix, an independent systems language in x86-64 assembly.',
    color: 'var(--mint)',
    tag: 'Focus',
  },
  {
    id: '3',
    question: 'My philosophy?',
    answer: 'Less hype. More building.',
    color: 'var(--pink)',
    tag: 'Motto',
  },
  {
    id: '4',
    question: 'Core toolkit?',
    answer: 'Linux, C, C++, x86-64, Java, Dart, Flutter & web.',
    color: 'var(--sky)',
    tag: 'Stack',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Systems & Compilers',
    icon: 'code',
    color: 'var(--mint)',
    description: 'Low-level computing and compilers from raw assembly to machine architecture.',
    tags: ['x86-64 Assembly', 'C / C++', 'Compiler Design', 'OS Concepts', 'Low-level Computing'],
  },
  {
    name: 'Applications & Mobile',
    icon: 'sliders',
    color: 'var(--sky)',
    description: 'Practical digital tools, cross-platform apps, and real-world utility software.',
    tags: ['Flutter', 'Dart', 'Java', 'App Architecture', 'State Management'],
  },
  {
    name: 'Creative Code & Web',
    icon: 'palette',
    color: 'var(--pink)',
    description: 'Generative algorithms, computational visuals, and tactile interactive interfaces.',
    tags: ['Creative Coding', 'HTML & CSS', 'JavaScript', 'Canvas Art', 'Generative Design'],
  },
  {
    name: 'Toolchain & Platform',
    icon: 'pencil',
    color: 'var(--sunny)',
    description: 'UNIX environment mastery, version control, and bare-metal debugging workflow.',
    tags: ['Arch Linux', 'Git & GitHub', 'Bash / Zsh', 'GDB / Debugging', 'Systems Architecture'],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    handle: '@tek-sys-hub',
    url: 'https://github.com/tek-sys-hub',
    icon: 'code',
    color: 'var(--mint)',
  },
  {
    name: 'Portfolio',
    handle: 'tekawasthi.dev',
    url: 'https://www.tekawasthi.dev/',
    icon: 'palette',
    color: 'var(--pink)',
  },
  {
    name: 'LinkedIn',
    handle: 'in/tek-raj-awasthi',
    url: 'https://www.linkedin.com/in/tek-raj-awasthi-1a9768412',
    icon: 'briefcase',
    color: 'var(--sky)',
  },
];

export const BLOOP_LINES = [
  'Less hype. More building.',
  'Checking x86-64 registers...',
  'Compiling Rubix from scratch.',
  'Zero bones. 100% systems.',
  'Tek says hi.',
  'Cherry says keep building.',
  'Check out the repos below!',
  'Have you debugged with GDB today?',
  '100% blob. 0% hype.',
];

export const BLOOP_MOODS = ['#FF6B4A', '#8EA2FF', '#3DDBA6', '#FF8AD1', '#FFC933'];

// Custom SVG Cover Artwork for All Repositories
export const CoverArt: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'rubix':
      return (
        <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="25" y="16" width="150" height="88" rx="8" style={{ fill: 'var(--navy)', stroke: 'var(--navy)' }} />
          <line x1="25" y1="36" x2="175" y2="36" style={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 1.5 }} />
          <circle cx="37" cy="26" r="3" style={{ fill: '#FF6B4A' }} />
          <circle cx="48" cy="26" r="3" style={{ fill: '#FFC933' }} />
          <circle cx="59" cy="26" r="3" style={{ fill: '#3DDBA6' }} />
          <text x="36" y="56" style={{ fontFamily: 'var(--mono)', fontSize: '10px', fill: 'var(--mint)', fontWeight: 700 }}>
            mov %rax, %rdi
          </text>
          <text x="36" y="70" style={{ fontFamily: 'var(--mono)', fontSize: '10px', fill: 'var(--paper)', fontWeight: 600 }}>
            syscall ; x86-64
          </text>
          <text x="36" y="86" style={{ fontFamily: 'var(--mono)', fontSize: '10px', fill: 'var(--sunny)', fontWeight: 700 }}>
            jmp .rubix_loop
          </text>
          <rect x="134" y="52" width="28" height="36" rx="4" style={{ fill: 'rgba(61,219,166,0.15)', stroke: 'var(--mint)', strokeWidth: 1.5 }} />
          <text x="148" y="75" textAnchor="middle" style={{ fontFamily: 'var(--mono)', fontSize: '16px', fill: 'var(--mint)', fontWeight: 800 }}>
            x64
          </text>
        </svg>
      );
    case 'botanical':
      return (
        <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="25" y="16" width="150" height="88" rx="8" style={{ fill: 'var(--card)', stroke: 'var(--ink)' }} />
          <line x1="25" y1="60" x2="175" y2="60" style={{ stroke: 'rgba(20,22,58,0.1)', strokeWidth: 1 }} />
          <line x1="100" y1="16" x2="100" y2="104" style={{ stroke: 'rgba(20,22,58,0.1)', strokeWidth: 1 }} />
          <path d="M100 95 Q90 65 100 40 Q110 65 100 95" style={{ fill: 'var(--mint)', stroke: 'var(--navy)' }} />
          <path d="M100 70 Q130 60 135 45 Q115 50 100 65" style={{ fill: 'var(--sunny)', stroke: 'var(--navy)' }} />
          <path d="M100 55 Q70 45 65 30 Q85 35 100 50" style={{ fill: 'var(--pink)', stroke: 'var(--navy)' }} />
          <rect x="94" y="24" width="12" height="12" rx="2" style={{ fill: '#FF6B4A', stroke: 'var(--navy)', strokeWidth: 2 }} />
          <circle cx="100" cy="30" r="2.5" style={{ fill: '#fff' }} />
        </svg>
      );
    case 'spectrum':
      return (
        <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="25" y="16" width="150" height="88" rx="8" style={{ fill: 'var(--card)', stroke: 'var(--ink)' }} />
          <rect x="42" y="65" width="8" height="26" rx="2" style={{ fill: 'var(--pink)', stroke: 'var(--navy)' }} />
          <rect x="56" y="48" width="8" height="43" rx="2" style={{ fill: 'var(--hot)', stroke: 'var(--navy)' }} />
          <rect x="70" y="36" width="8" height="55" rx="2" style={{ fill: 'var(--sunny)', stroke: 'var(--navy)' }} />
          <rect x="84" y="52" width="8" height="39" rx="2" style={{ fill: 'var(--mint)', stroke: 'var(--navy)' }} />
          <rect x="98" y="32" width="8" height="59" rx="2" style={{ fill: 'var(--sky)', stroke: 'var(--navy)' }} />
          <rect x="112" y="44" width="8" height="47" rx="2" style={{ fill: 'var(--lilac)', stroke: 'var(--navy)' }} />
          <rect x="126" y="58" width="8" height="33" rx="2" style={{ fill: 'var(--pink)', stroke: 'var(--navy)' }} />
          <rect x="140" y="68" width="8" height="23" rx="2" style={{ fill: 'var(--hot)', stroke: 'var(--navy)' }} />
          <path d="M38 72 Q70 20 100 40 T162 60" style={{ stroke: 'var(--navy)', strokeWidth: 2.5 }} />
        </svg>
      );
    case 'zarona':
      return (
        <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="25" y="16" width="150" height="88" rx="8" style={{ fill: 'var(--card)', stroke: 'var(--ink)' }} />
          <rect x="36" y="28" width="56" height="34" rx="4" style={{ fill: 'var(--sky)', stroke: 'var(--navy)', opacity: 0.8 }} />
          <rect x="100" y="28" width="64" height="14" rx="3" style={{ fill: 'var(--navy)' }} />
          <rect x="100" y="48" width="48" height="8" rx="2" style={{ fill: 'rgba(20,22,58,0.2)' }} />
          <rect x="36" y="70" width="128" height="22" rx="4" style={{ fill: 'var(--ground)', stroke: 'var(--ink)' }} />
          <circle cx="50" cy="81" r="5" style={{ fill: 'var(--hot)' }} />
          <line x1="64" y1="81" x2="150" y2="81" style={{ stroke: 'var(--navy)', strokeWidth: 2.5 }} />
        </svg>
      );
    case 'arch':
      return (
        <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="25" y="16" width="150" height="88" rx="8" style={{ fill: '#0E1117', stroke: 'var(--navy)' }} />
          <line x1="100" y1="16" x2="100" y2="104" style={{ stroke: '#30363D', strokeWidth: 2 }} />
          <line x1="100" y1="60" x2="175" y2="60" style={{ stroke: '#30363D', strokeWidth: 2 }} />
          <path d="M62 78 L52 78 Q58 60 62 40 Q66 60 72 78 L62 78 Z" style={{ fill: '#1793D1', stroke: '#1793D1' }} />
          <circle cx="62" cy="62" r="3" style={{ fill: '#fff' }} />
          <text x="110" y="38" style={{ fontFamily: 'var(--mono)', fontSize: '9px', fill: '#3DDBA6', fontWeight: 700 }}>
            $ bspwm
          </text>
          <text x="110" y="50" style={{ fontFamily: 'var(--mono)', fontSize: '8px', fill: '#8EA2FF' }}>
            rice: clean
          </text>
          <text x="110" y="82" style={{ fontFamily: 'var(--mono)', fontSize: '9px', fill: '#FF6B4A', fontWeight: 700 }}>
            $ neofetch
          </text>
        </svg>
      );
    case 'lunelle':
      return (
        <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="25" y="16" width="150" height="88" rx="10" style={{ fill: 'var(--card)', stroke: 'var(--ink)' }} />
          {/* Calming circular cycle ring */}
          <circle cx="100" cy="56" r="30" style={{ stroke: 'rgba(20,22,58,0.12)', strokeWidth: 5 }} />
          <path d="M100 26 A30 30 0 0 1 128 48" style={{ stroke: 'var(--pink)', strokeWidth: 6, strokeLinecap: 'round' }} />
          {/* Crescent moon / droplet center icon */}
          <path d="M95 44 C95 44 86 54 86 60 A14 14 0 0 0 114 60 C114 54 105 44 105 44 Z" style={{ fill: 'var(--pink)', stroke: 'var(--navy)', strokeWidth: 2 }} />
          {/* Cycle calendar dots */}
          <circle cx="48" cy="38" r="3" style={{ fill: 'var(--sunny)' }} />
          <circle cx="48" cy="56" r="3" style={{ fill: 'var(--mint)' }} />
          <circle cx="48" cy="74" r="3" style={{ fill: 'var(--sky)' }} />
          <circle cx="152" cy="38" r="3" style={{ fill: 'var(--hot)' }} />
          <circle cx="152" cy="56" r="3" style={{ fill: 'var(--pink)' }} />
          <circle cx="152" cy="74" r="3" style={{ fill: 'var(--mint)' }} />
          {/* Soft status tag */}
          <rect x="74" y="86" width="52" height="13" rx="6" style={{ fill: 'var(--ground)', stroke: 'var(--ink)', strokeWidth: 1.5 }} />
          <text x="100" y="95.5" textAnchor="middle" style={{ fontFamily: 'var(--mono)', fontSize: '8px', fill: 'var(--ink)', fontWeight: 700 }}>
            Cycle Day 14
          </text>
        </svg>
      );
    case 'agro':
      return (
        <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="30" y="20" width="140" height="80" rx="10" style={{ fill: 'var(--paper)', stroke: 'var(--navy)' }} />
          <path d="M30 85 Q70 70 100 82 T170 80" style={{ stroke: 'var(--navy)', strokeWidth: 3 }} />
          <path d="M30 92 Q80 82 120 90 T170 88" style={{ stroke: 'var(--mint)', strokeWidth: 2.5 }} />
          <path d="M90 78 Q90 50 100 44 Q110 50 110 78" style={{ stroke: 'var(--navy)', strokeWidth: 3 }} />
          <path d="M100 52 Q120 40 126 50 Q110 58 100 54" style={{ fill: 'var(--mint)', stroke: 'var(--navy)' }} />
          <path d="M100 58 Q80 46 74 56 Q90 64 100 60" style={{ fill: 'var(--sunny)', stroke: 'var(--navy)' }} />
          <path d="M92 34 Q100 28 108 34" style={{ stroke: '#FF6B4A', strokeWidth: 2.5 }} />
          <path d="M86 28 Q100 20 114 28" style={{ stroke: '#FF6B4A', strokeWidth: 2.5 }} />
          <circle cx="100" cy="38" r="2" style={{ fill: '#FF6B4A' }} />
        </svg>
      );
    default:
      return null;
  }
};

// Common Icons
export const Icon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'code':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
        </svg>
      );
    case 'palette':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3a9 9 0 1 0 0 18c1.6 0 2.1-1.1 1.6-2.1s0-2.1 1.5-2.1H17a4 4 0 0 0 4-4c0-5.2-4-9.8-9-9.8z" />
          <circle cx="7.5" cy="11" r="1" />
          <circle cx="10.5" cy="7" r="1" />
          <circle cx="15" cy="7.5" r="1" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
        </svg>
      );
    case 'camera':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
      );
    case 'pencil':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 20l1-5L16 4l4 4L9 19z" />
          <path d="M14 6l4 4" />
        </svg>
      );
    case 'sliders':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
          <circle cx="16" cy="7" r="2" />
          <circle cx="8" cy="17" r="2" />
        </svg>
      );
    case 'arrow':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 17L17 7M8 7h9v9" />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 1l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    default:
      return null;
  }
};
