// Icon library — Lucide-style stroke icons, 24x24 viewBox, currentColor
// Usage: <Icon name="bolt" /> or Icon.Bolt
const Icon = ({ name, size = 20, className = "", strokeWidth = 1.6, ...rest }) => {
  const path = ICON_PATHS[name];
  if (!path) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={"ms-icon " + className}
      aria-hidden="true"
      {...rest}
    >
      {path}
    </svg>
  );
};

const ICON_PATHS = {
  // Product & capability icons
  bolt: <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>,
  lock: <><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></>,
  sparkles: <><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/></>,
  workflow: <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a3 3 0 013 3v3M6 9v6a3 3 0 003 3h6"/></>,
  chart: <><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></>,
  users: <><circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6"/><circle cx="17" cy="7" r="2.5"/><path d="M15 14c3 .5 5 2.5 5 6"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
  server: <><rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/></>,
  cpu: <><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></>,
  scale: <><path d="M6 21h12M12 3v18M4 7h16M7 7l-3 7a3 3 0 006 0l-3-7M17 7l-3 7a3 3 0 006 0l-3-7"/></>,
  // Category / chip icons
  coins: <><circle cx="8" cy="8" r="5"/><path d="M13 11a5 5 0 11-5 5"/></>,
  gavel: <><path d="M14 4l6 6M10 8l6 6M8 10l-5 5a2 2 0 102.8 2.8L11 13M21 21h-8"/></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/></>,
  terminal: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/></>,
  building: <><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-4h4v4"/></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  // UI
  arrow: <path d="M5 12h14M13 6l6 6-6 6"/>,
  arrowUpRight: <path d="M7 17L17 7M9 7h8v8"/>,
  check: <path d="M4 12l5 5L20 6"/>,
  x: <path d="M6 6l12 12M18 6L6 18"/>,
  dot: <circle cx="12" cy="12" r="4"/>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
  phone: <path d="M4 5a2 2 0 012-2h2l2 5-2.5 1.5a11 11 0 005 5L14 12l5 2v2a2 2 0 01-2 2A15 15 0 014 5z"/>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>,
  play: <path d="M7 5v14l12-7z"/>,
  // Agent categories (Intelligo)
  finance: <><path d="M3 12h4l2-7 4 14 2-7h6"/></>,
  book: <><path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5z"/><path d="M4 19a2 2 0 012-2h13"/></>,
  megaphone: <><path d="M3 11v2a2 2 0 002 2h1l3 5V4L6 9H5a2 2 0 00-2 2z"/><path d="M16 5s4 2 4 7-4 7-4 7"/></>,
  code: <path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"/>,
  heart: <path d="M12 21s-8-5-8-11a5 5 0 019-3 5 5 0 019 3c0 6-8 11-8 11z"/>,
  // Sovereignty / compliance
  flag: <><path d="M5 21V4a9 9 0 0114 0l-2 2 2 2a9 9 0 01-14 0"/></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></>,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></>,
  // Social & misc
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7.5v.01M12 17v-4.5a2.5 2.5 0 015 0V17M12 17v-7"/></>,
  github: <path d="M12 2a10 10 0 00-3 19.5c.5 0 .7-.2.7-.5v-2c-3 .6-3.6-1.4-3.6-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7 0-.7 0-.7 1 0 1.6 1 1.6 1 1 1.6 2.5 1.2 3.2.9a2.3 2.3 0 01.7-1.5c-2.4-.3-5-1.2-5-5.4 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3 1a10.2 10.2 0 015.4 0c2.1-1.3 3-1 3-1 .6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.2-2.6 5.1-5 5.4.4.3.7 1 .7 2v3c0 .3.2.5.7.5A10 10 0 0012 2z"/>,
};

Object.assign(window, { Icon, ICON_PATHS });
