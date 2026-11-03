import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function QuizCta({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Link
        href="/quiz/"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-teal px-7 py-4 text-lg font-bold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-teal-dark active:translate-y-0 sm:w-auto"
      >
        See Where I Stand
        <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 transition group-hover:translate-x-0.5">
          <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
      <p className="mt-3 text-center text-sm text-muted sm:text-left">
        Free 60-second quiz • No signup required • 18+ only
      </p>
    </div>
  );
}

const steps = [
  { label: "Check your state's rules", done: true },
  { label: "Complete approved training", done: false },
  { label: "Submit your application", done: false },
  { label: "Carry with confidence", done: false },
];

function ChecklistIllustration() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-sm animate-rise [animation-delay:150ms]">
      <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-soft via-white to-[#f6efd6] sm:-inset-6 sm:rounded-[2.5rem]" />
      <div className="rounded-3xl border border-line bg-surface p-5 shadow-lift">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
          <span className="h-2 w-2 rounded-full bg-teal" /> Your permit roadmap
        </div>
        <ol className="space-y-3">
          {steps.map((s, i) => (
            <li key={s.label} className="flex items-center gap-3 rounded-2xl bg-canvas px-4 py-3">
              <span
                className={[
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                  s.done ? "bg-teal text-white" : "border-2 border-line text-muted",
                ].join(" ")}
              >
                {s.done ? "✓" : i + 1}
              </span>
              <span className={`font-semibold ${s.done ? "text-navy" : "text-ink"}`}>{s.label}</span>
            </li>
          ))}
        </ol>
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-dashed border-line px-4 py-3">
          <span className="text-2xl">🤔</span>
          <p className="text-sm text-muted">“Where do I even start — and which class actually counts?”</p>
        </div>
      </div>
    </div>
  );
}

const familiar = [
  {
    icon: "📜",
    title: "The rulebook maze",
    body: "Every state has different rules — and the official websites don't always make them easy to understand.",
  },
  {
    icon: "🗓️",
    title: "The class you keep postponing",
    body: "You meant to sign up for a course, but the dates never seemed to line up with your schedule.",
  },
  {
    icon: "⚖️",
    title: "The “what if” question",
    body: "You want to protect your family, but you're not sure what the law expects of you if you ever had to.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="mx-auto grid w-full max-w-5xl items-center gap-12 px-4 pb-14 pt-6 sm:px-6 md:grid-cols-[1.15fr_1fr] md:pb-20 md:pt-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">
              Concealed carry, made clear
            </p>
            <h1 className="mt-3 text-balance text-[2.1rem] font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
              Thinking About Getting Your Concealed Carry Permit?
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
              Maybe you&apos;ve looked up the requirements once or twice. But between state laws,
              training rules, and paperwork, it&apos;s hard to know what the right first step is.
            </p>
            <p className="mt-5 border-l-4 border-sun pl-4 text-lg font-semibold leading-snug text-navy">
              Being a responsible carrier starts with the right knowledge — not just a permit card.
            </p>
            <QuizCta className="mt-8" />
          </div>
          <ChecklistIllustration />
        </section>

        <section className="border-y border-line bg-surface">
          <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Sound familiar?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {familiar.map((f) => (
                <div key={f.title} className="rounded-2xl border border-line bg-canvas p-5">
                  <div className="text-2xl" aria-hidden="true">{f.icon}</div>
                  <h3 className="mt-3 font-bold text-navy">{f.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{f.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 max-w-2xl space-y-4 text-lg leading-relaxed text-ink">
              <p>
                Plenty of people who want to carry responsibly put it off — not because they
                aren&apos;t serious, but because the process looks more complicated than it is.
              </p>
              <p>
                Quality training can cover safe handling, the legal basics of self-defense, and
                what your state expects from permit holders.
              </p>
              <p className="font-semibold text-navy">
                Take our short quiz to see where you stand — and what a sensible next step could
                look like for you.
              </p>
            </div>
            <QuizCta className="mt-8" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
