import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "About",
  description: "CCWPermitPro is an independent website for adults thinking about getting a concealed carry permit.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <InfoPage title="About CCWPermitPro">
      <p>
        CCWPermitPro is an independent educational website for adults who are thinking about
        getting a concealed carry permit — and want to do it the responsible way.
      </p>
      <p>
        Many people who want to carry put it off because the process looks confusing: every state
        has its own rules, training requirements, and paperwork. We believe the right starting
        point is good information and quality training.
      </p>
      <h2>What we do</h2>
      <p>
        Our short quiz helps you reflect on where you are in the process and what might be holding
        you back. At the end, you can choose to explore an external concealed carry training
        program and decide for yourself whether it fits your needs.
      </p>
      <h2>What we don&apos;t do</h2>
      <ul>
        <li>We don&apos;t give legal advice. Laws differ by state and change over time — always check your state&apos;s official sources or consult a licensed attorney.</li>
        <li>We don&apos;t issue permits, sell firearms, or sell training courses ourselves.</li>
        <li>We don&apos;t guarantee that any course will be accepted for your state&apos;s permit.</li>
        <li>Our quiz is a reflection tool, not an assessment of your eligibility.</li>
      </ul>
      <h2>Who this site is for</h2>
      <p>This website is intended for adults 18 and older in the United States.</p>
      <h2>How we&apos;re funded</h2>
      <p>
        Some links on this site are affiliate links. If you make a purchase after following one, we
        may earn a commission at no additional cost to you. See our{" "}
        <Link href="/affiliate-disclosure/">Affiliate Disclosure</Link> for details.
      </p>
    </InfoPage>
  );
}
