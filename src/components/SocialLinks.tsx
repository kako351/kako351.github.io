const socials = [
  {
    name: "X (Twitter)",
    href: "https://x.com/kako_351",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/kako351",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Qiita",
    href: "https://qiita.com/kako_351",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.833 2C3.501 2 .227 5.273.227 9.604c0 2.956 1.647 5.529 4.07 6.844l-1.975 3.55a.5.5 0 00.436.744h2.1a.5.5 0 00.434-.252l1.97-3.44c.19.012.38.018.571.018 4.332 0 7.606-3.273 7.606-7.604C15.44 5.273 12.165 2 7.833 2zm0 12.208c-2.544 0-4.605-2.061-4.605-4.604 0-2.544 2.061-4.604 4.605-4.604 2.543 0 4.605 2.06 4.605 4.604 0 2.543-2.062 4.604-4.605 4.604zm14.108-6.016a2.592 2.592 0 10-5.184 0 2.592 2.592 0 005.184 0z" />
      </svg>
    ),
  },
  {
    name: "connpass",
    href: "https://connpass.com/user/kako_351/",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">C</text>
      </svg>
    ),
  },
  {
    name: "Blog",
    href: "https://kako351.dev/",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-surface hover:bg-surface-light text-text-secondary hover:text-accent transition-all"
          aria-label={social.name}
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
