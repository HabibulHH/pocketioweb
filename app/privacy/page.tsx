import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: `Privacy Policy | ${company.name}`,
  description: `How ${company.name} collects, uses and protects personal data.`,
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="October 20, 2026">
      <p>
        This Privacy Policy explains how {company.name} (&quot;{company.name}&quot;, &quot;we&quot;, &quot;us&quot;)
        collects, uses, shares and protects personal data when you visit {company.website} or use our
        products and services, including our WhatsApp CRM built on the WhatsApp Business Platform
        (together, the &quot;Services&quot;).
      </p>

      <h2>1. Who we are</h2>
      <p>
        {company.name}, {company.address}. Phone: {company.phone}. Email:{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>

      <h2>2. Information we collect</h2>
      <ul>
        <li>
          <strong>Account information:</strong> your name, business name, email address, phone number and
          login details when you sign up or contact us.
        </li>
        <li>
          <strong>WhatsApp Business data:</strong> when you connect a WhatsApp Business account to our
          Services, we receive data from Meta through the WhatsApp Business Platform. This includes your
          WhatsApp Business Account ID, phone number ID, business profile, message templates, and the
          messages, contact names, phone numbers and delivery statuses of conversations sent or received
          through our Services.
        </li>
        <li>
          <strong>Billing information:</strong> invoices and payment status. Card details are handled by our
          payment processors. We do not store full card numbers.
        </li>
        <li>
          <strong>Usage and device data:</strong> IP address, browser type, pages visited and log data
          needed to run and secure the Services.
        </li>
      </ul>

      <h2>3. How we use information</h2>
      <ul>
        <li>To provide the Services, including sending and receiving WhatsApp messages on your instruction.</li>
        <li>To set up and manage your account, and to give customer support.</li>
        <li>To keep the Services secure and prevent fraud, spam and abuse.</li>
        <li>To meet legal and regulatory obligations.</li>
        <li>To improve and maintain our products.</li>
      </ul>
      <p>
        We do not sell personal data. We do not use the content of WhatsApp messages for advertising.
      </p>

      <h2>4. Our role for customer data</h2>
      <p>
        When a business uses our Services to message its own customers, that business decides what data is
        processed and why. For that data, {company.name} acts as a service provider and processes it only to
        provide the Services to that business. Requests about such data should be sent to the business you
        messaged. We will help them respond.
      </p>

      <h2>5. How we share information</h2>
      <ul>
        <li>
          <strong>Meta Platforms:</strong> messages are sent and received through the WhatsApp Business
          Platform operated by Meta, under Meta&apos;s own terms and privacy policy.
        </li>
        <li>
          <strong>Service providers:</strong> hosting, storage, email and payment providers that process data
          for us under confidentiality and data protection obligations.
        </li>
        <li>
          <strong>Legal reasons:</strong> when required by law, court order or a valid request from a public
          authority, or to protect the rights and safety of our users and {company.name}.
        </li>
        <li>
          <strong>Business transfers:</strong> in a merger, acquisition or sale of assets, subject to this
          policy.
        </li>
      </ul>

      <h2>6. Data retention</h2>
      <p>
        We keep personal data while your account is active and as needed to provide the Services. After an
        account is closed, or after a deletion request, we delete or anonymise the data within 30 days,
        unless we must keep it longer by law (for example, billing records).
      </p>

      <h2 id="data-deletion">7. Data deletion</h2>
      <p>
        You can ask us to delete your personal data at any time. Email{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a> with the subject &quot;Data deletion
        request&quot; and include the phone number or email linked to your account. We will confirm your
        request and complete the deletion within 30 days. If you disconnect your WhatsApp Business account
        from our Services, we stop receiving new data from it.
      </p>

      <h2>8. Security</h2>
      <p>
        We use encryption in transit, access controls and monitoring to protect personal data. No system is
        fully secure, so we cannot guarantee absolute security.
      </p>

      <h2>9. International transfers</h2>
      <p>
        Our Services and providers, including Meta, may process data on servers outside Bangladesh. When
        they do, we take reasonable steps to keep the data protected in line with this policy.
      </p>

      <h2>10. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete or export your
        personal data, and to object to or restrict certain processing. To use these rights, contact us at{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>

      <h2>11. Children</h2>
      <p>
        Our Services are for businesses and are not directed at children under 18. We do not knowingly
        collect personal data from children.
      </p>

      <h2>12. Cookies</h2>
      <p>
        Our website uses only the cookies and local storage needed for it to work, such as remembering your
        light or dark theme.
      </p>

      <h2>13. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. We will post the new version on this page and change
        the date at the top.
      </p>

      <h2>14. Contact us</h2>
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
