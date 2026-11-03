import Link from "next/link";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="9" fill="#14202e" />
      <path d="M16 6.5 24 9.5v6c0 4.8-3.3 8.6-8 10-4.7-1.4-8-5.2-8-10v-6z" fill="#a33a22" />
      <path d="m12.3 15.8 2.6 2.6 4.9-5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 rounded-lg" aria-label="CCWPermitPro home">
      <LogoMark className="h-8 w-8" />
      <span className="text-lg font-extrabold tracking-tight text-navy">
        CCWPermit<span className="text-teal">Pro</span>
      </span>
    </Link>
  );
}
