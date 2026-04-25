// Icons as plain React components — minimal stroke drawings
const Icon = {
  NFC: ({size=32, color="currentColor"}) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
      <path d="M8 8c3 2 3 14 0 16" />
      <path d="M13 5c5 3.5 5 18.5 0 22" />
      <path d="M18 2c7 5 7 23 0 28" />
      <circle cx="4" cy="16" r="1.2" fill={color} />
    </svg>
  ),
  Camera: ({size=32, color="currentColor"}) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="1.5">
      <rect x="3" y="8" width="26" height="18" rx="2" />
      <circle cx="16" cy="17" r="5" />
      <path d="M11 8l2-3h6l2 3" />
      <circle cx="16" cy="17" r="1.5" fill={color} />
    </svg>
  ),
  Pin: ({size=32, color="currentColor"}) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="1.5">
      <path d="M16 4c-5 0-8 3.8-8 8.5 0 6 8 15.5 8 15.5s8-9.5 8-15.5c0-4.7-3-8.5-8-8.5z" />
      <circle cx="16" cy="12.5" r="2.5" fill={color} stroke="none" />
    </svg>
  ),
  Search: ({size=32, color="currentColor"}) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
      <circle cx="14" cy="14" r="8" />
      <path d="M20 20l6 6" />
    </svg>
  ),
  PlayStore: ({size=26}) => (
    <svg viewBox="0 0 512 512" width={size} height={size}>
      <path fill="#00D7FE" d="M30 18 277 256 30 494c-8-6-13-16-13-28V46c0-12 5-22 13-28z"/>
      <path fill="#FFCE00" d="M390 256l-64-37-49 37 49 37 64-37z"/>
      <path fill="#FE4131" d="M277 256 30 18c4-3 9-5 14-5 7 0 14 2 21 6l261 149-49 88z"/>
      <path fill="#00F076" d="M326 293 65 442c-7 4-14 6-21 6-5 0-10-2-14-5l247-187 49 37z"/>
    </svg>
  ),
  Apple: ({size=26, color="currentColor"}) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <path d="M17.5 12.5c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.1 1.7 2.4 3 2.3 1.2-.1 1.6-.8 3.1-.8 1.4 0 1.8.8 3.1.8 1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.5-.9-2.5-3.7zM15.4 5.2c.6-.8 1.1-1.9 1-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2-.5 2.7-1.3z"/>
    </svg>
  ),
  Plus: ({size=16, color="currentColor"}) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  ),
  Mic: ({size=16, color="currentColor"}) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round">
      <rect x="9" y="3" width="6" height="12" rx="3"/>
      <path d="M5 12a7 7 0 0 0 14 0M12 19v3"/>
    </svg>
  ),
  Back: ({size=16, color="currentColor"}) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
      <path d="M15 6l-6 6 6 6"/>
    </svg>
  ),
  Signal: () => (
    <svg viewBox="0 0 18 12" width="14" height="10" fill="currentColor">
      <rect x="0" y="8" width="3" height="4" rx="0.5"/>
      <rect x="5" y="5" width="3" height="7" rx="0.5"/>
      <rect x="10" y="2" width="3" height="10" rx="0.5"/>
      <rect x="15" y="0" width="3" height="12" rx="0.5" opacity=".4"/>
    </svg>
  ),
  Battery: () => (
    <svg viewBox="0 0 24 12" width="20" height="10" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="0.5" y="0.5" width="21" height="11" rx="2"/>
      <rect x="2" y="2" width="15" height="8" fill="currentColor"/>
      <rect x="22" y="4" width="2" height="4" fill="currentColor"/>
    </svg>
  ),
};

window.Icon = Icon;
