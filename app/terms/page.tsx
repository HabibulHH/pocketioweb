import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: `Terms of Service | ${company.name}`,
  description: `The terms that apply when you use ${company.name} products and services.`,
};

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" updated="October 20, 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) apply to your use of {company.website} and the products and
        services of {company.name}, {company.address} (&quot;{company.name}&quot;, &quot;we&quot;, &quot;us&quot;),
        including our WhatsApp CRM (together, the &quot;Services&quot;). By using the Services, you agree to
        these Terms. If you use the Services for a business, you confirm that you can accept these Terms for
        that business.
      </p>

      <h2>1. The Services</h2>
      <p>
        {company.name} builds and runs business software, including tools that let businesses manage
        customer conversations on the WhatsApp Business Platform. Features may change as we improve the
        Services.
      </p>

      <h2>2. Accounts</h2>
      <p>
        You must give accurate information when you create an account and keep it up to date. You are
        responsible for keeping your login details safe and for all activity under your account. Tell us
        right away at <a href={`mailto:${company.email}`}>{company.email}</a> if you think your account has
        been misused.
      </p>

      <h2>3. WhatsApp Business Platform</h2>
      <ul>
        <li>
          You must follow Meta&apos;s WhatsApp Business Terms of Service, WhatsApp Business Messaging Policy
          and WhatsApp Commerce Policy when you use our WhatsApp features.
        </li>
        <li>
          You must get the opt-in consent required by Meta and by law before messaging any person, and you
          must honour opt-out requests.
        </li>
        <li>
          You keep ownership of your WhatsApp Business account. Meta may review, limit or suspend it under
          its own policies, and we are not responsible for Meta&apos;s decisions.
        </li>
        <li>
          Unless we agree otherwise in writing, Meta bills its messaging charges directly to the payment
          method on your WhatsApp Business account.
        </li>
      </ul>

      <h2>4. Acceptable use</h2>
      <p>You must not use the Services to:</p>
      <ul>
        <li>send spam, bulk unsolicited messages or misleading content;</li>
        <li>break any law, or infringe anyone&apos;s rights, including privacy and intellectual property rights;</li>
        <li>send malware, or try to access systems or data you are not allowed to access;</li>
        <li>sell or promote products or services that Meta&apos;s policies prohibit.</li>
      </ul>
      <p>We may suspend accounts that break these rules.</p>

      <h2>5. Fees and payment</h2>
      <p>
        Fees for paid plans are shown on your order or invoice. You agree to pay them on time, together with
        any applicable taxes. Fees already paid are not refundable unless the law or a written agreement
        with us says otherwise.
      </p>

      <h2>6. Your data</h2>
      <p>
        You own the data you and your customers put into the Services. You give us permission to host,
        process and send that data only to provide and support the Services. Our{" "}
        <Link href="/privacy">Privacy Policy</Link> explains how we handle personal data.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        {company.name} owns the Services, including the software, design and trademarks. We give you a
        limited, non-exclusive, non-transferable right to use the Services while you follow these Terms.
      </p>

      <h2>8. Third-party services</h2>
      <p>
        The Services work with third-party services such as Meta&apos;s WhatsApp Business Platform. Your use
        of those services is governed by their own terms. We are not responsible for third-party services.
      </p>

      <h2>9. Disclaimer</h2>
      <p>
        We work to keep the Services available and reliable, but they are provided &quot;as is&quot; and
        &quot;as available&quot;. To the extent the law allows, we do not give any other warranties.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the extent the law allows, {company.name} is not liable for indirect, incidental or consequential
        losses, or for lost profits or data. Our total liability for any claim is limited to the fees you
        paid us in the 12 months before the claim.
      </p>

      <h2>11. Indemnity</h2>
      <p>
        You agree to cover {company.name} against claims and costs that arise from your misuse of the
        Services, your messages, or your breach of these Terms.
      </p>

      <h2>12. Termination</h2>
      <p>
        You can stop using the Services at any time. We may suspend or end your access if you break these
        Terms or if we must do so by law. Sections that by their nature should continue after termination
        will continue.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These Terms are governed by the laws of Bangladesh. The courts of Dhaka, Bangladesh have exclusive
        jurisdiction over any dispute arising from these Terms or the Services.
      </p>

      <h2>14. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. We will post the new version on this page and change
        the date at the top. If you keep using the Services after a change, you accept the new Terms.
      </p>

      <h2>15. Contact us</h2>
      <p>
        {company.name}
        <br />
        {company.address}
        <br />
        Phone: {company.phone}
        <br />
        Email: <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>
    </LegalPage>
  );
}
