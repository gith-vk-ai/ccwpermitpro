import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CCWPermitPro.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <InfoPage title="Contact">
      <p>Questions, feedback, or a privacy request? We&apos;d love to hear from you.</p>
      <p>
        Email:{" "}
        <a href={`mailto:${site.contactEmail}`} className="font-semibold">
          {site.contactEmail}
        </a>
      </p>
      <p>
        Please note that CCWPermitPro does not sell training courses or issue permits, and we
        can&apos;t give legal advice about your situation. For questions about a course, account,
        or billing on an external platform, please contact that provider directly. For questions
        about permit eligibility, contact your state&apos;s issuing agency or a licensed attorney.
      </p>
    </InfoPage>
  );
}
