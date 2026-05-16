import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "SMS Terms & Opt-In Methods",
  description:
    "Mass HVAC Inc SMS Terms — how customers opt-in to receive text messages, what we send, frequency, opt-out keywords, and our zero-third-party-sharing pledge.",
  alternates: { canonical: "https://masshvac.net/sms-terms" },
};

export default function SmsTerms() {
  return (
    <LegalPage title="SMS Terms & Opt-In Methods" lastUpdated="May 1, 2026">
      <div className="callout">
        <p>
          <strong>Mass HVAC Inc does NOT sell, rent, share, or transfer Your
          mobile phone number, SMS opt-in consent, or any phone-related data
          to third parties or affiliates for marketing or promotional purposes.</strong>
        </p>
        <p>Your mobile information stays with Mass HVAC. Period.</p>
      </div>

      <h2>1. Who is sending the messages</h2>
      <ul>
        <li><strong>Brand:</strong> Mass HVAC Inc</li>
        <li><strong>DBA:</strong> Mass HVAC</li>
        <li><strong>Sending phone number:</strong> (508) 786-8755</li>
        <li><strong>Office address:</strong> Milford, MA 01757</li>
        <li><strong>Customer service email:</strong> info@masshvac.net</li>
        <li><strong>Website:</strong> <a href="https://masshvac.net">masshvac.net</a></li>
      </ul>

      <h2>2. How customers opt in to receive SMS</h2>
      <p>
        Mass HVAC collects SMS opt-in consent through three (3) methods, each
        listed in detail below. Every method requires explicit, active
        consent — we never auto-enroll a customer based on a phone call alone
        or a service inquiry alone.
      </p>

      <h3>Method A: Website Chat Widget</h3>
      <ul>
        <li><strong>Verifiable URL:</strong> <a href="https://masshvac.net">https://masshvac.net</a></li>
        <li>
          <strong>Description:</strong> Chat widget embedded on every page of
          our website. The visitor must enter their phone number to start a
          conversation — entering the number constitutes explicit opt-in to
          receive SMS replies related to their inquiry.
        </li>
        <li>
          <strong>First SMS disclosure (sent automatically):</strong>{" "}
          <code>
            Mass HVAC: Hi {`{first_name}`}, thanks for reaching out! Reply STOP
            to opt out, HELP for help. Msg frequency varies, msg &amp; data
            rates may apply. https://masshvac.net/privacy
          </code>
        </li>
      </ul>

      <h3>Method B: Website Lead Form (Free Estimate Request)</h3>
      <ul>
        <li><strong>Verifiable URL:</strong> <a href="https://masshvac.net">https://masshvac.net</a></li>
        <li>
          <strong>Description:</strong> Our chat-gated lead form collects
          name, email, project details, and a phone number. Submitting the
          form constitutes opt-in to receive SMS related to the project
          inquiry.
        </li>
        <li>
          <strong>Form language:</strong> &quot;By submitting this form, you
          agree to our Terms &amp; Conditions and Privacy Policy and consent
          to receive SMS updates about your project. Reply STOP at any time to
          opt out.&quot;
        </li>
      </ul>

      <h3>Method C: Verbal Opt-In via Phone</h3>
      <ul>
        <li>
          <strong>Mechanism:</strong> Our team verbally requests consent during
          inbound calls to (508) 786-8755.
        </li>
        <li>
          <strong>Disclosure language read by team:</strong> &quot;Mass HVAC
          would like to send you text-message updates about your estimate and
          project. Message frequency varies. Standard message and data rates
          may apply. Reply STOP at any time to opt out, or HELP for help. Do
          you consent?&quot;
        </li>
        <li>
          <strong>Documentation:</strong> Timestamp + agent name recorded in
          the CRM at the time of consent.
        </li>
        <li>
          <strong>First follow-up SMS</strong> includes TCPA disclosure
          language.
        </li>
      </ul>

      <h2>3. What kind of messages we send</h2>
      <p>SMS only (no MMS). Categories:</p>
      <ul>
        <li><strong>Estimate confirmation</strong> — walkthrough date / time</li>
        <li><strong>Project scheduling</strong> — crew arrival times, schedule changes</li>
        <li><strong>Service updates</strong> — active project status</li>
        <li><strong>Lead-response</strong> — replies to customer inbound questions</li>
        <li><strong>Occasional service reminders</strong> — seasonal maintenance availability (marketing opt-in only)</li>
      </ul>
      <p>
        <strong>We do NOT send promotional / marketing SMS without explicit
        second-step opt-in</strong> (separate from the project-related opt-in).
      </p>

      <h2>4. Message frequency</h2>
      <ul>
        <li>Active project: 3–6 messages per week</li>
        <li>Open lead / estimate phase: 1–2 messages</li>
        <li>Project complete: 0 messages (unless opted into seasonal maintenance updates)</li>
      </ul>

      <h2>5. Cost</h2>
      <p>
        Mass HVAC does not charge to send or receive SMS. However,{" "}
        <strong>standard message and data rates from Your carrier may apply.</strong>{" "}
        Contact Your wireless provider for details about Your plan.
      </p>

      <h2>6. How to opt out</h2>
      <p>You can opt out at any time using any of the following methods:</p>
      <ul>
        <li>Reply <code>STOP</code> to any SMS from us.</li>
        <li>Reply <code>UNSUBSCRIBE</code>, <code>CANCEL</code>, <code>QUIT</code>, <code>END</code>, or <code>OPT OUT</code> (also accepted).</li>
        <li>Call <a href="tel:+15087868755">(508) 786-8755</a> and request removal.</li>
        <li>Email <a href="mailto:info@masshvac.net">info@masshvac.net</a> with the subject &quot;UNSUBSCRIBE&quot;.</li>
      </ul>
      <p>
        You will receive one final confirmation SMS confirming the opt-out,
        then no further messages until You re-opt-in by replying{" "}
        <code>START</code> or by going through one of the opt-in methods above.
      </p>

      <h2>7. How to get help</h2>
      <ul>
        <li>Reply <code>HELP</code> to any SMS</li>
        <li>Call <a href="tel:+15087868755">(508) 786-8755</a></li>
        <li>Email <a href="mailto:info@masshvac.net">info@masshvac.net</a></li>
        <li>Hours: Monday–Saturday, 7:00 AM – 8:00 PM EST (24/7 emergency line available)</li>
      </ul>

      <h2>8. Mobile information &amp; third-party data sharing</h2>
      <p>
        <strong>Mass HVAC does NOT share, sell, rent, transfer, or otherwise
        disclose Your mobile phone number, SMS opt-in consent record, or any
        phone-related Personal Information with third parties or affiliates
        for their marketing or promotional purposes — under any
        circumstances.</strong>
      </p>
      <p>Specific practices:</p>
      <ul>
        <li>We do NOT sell phone numbers to data brokers, lead-gen companies, or list aggregators.</li>
        <li>We do NOT share SMS opt-in consent with affiliates or sister companies.</li>
        <li>We do NOT use phone numbers for third-party retargeting.</li>
        <li>
          We DO use a CRM / SMS provider (HighLevel / LeadConnector) under a
          Data Processing Agreement strictly for operational message delivery —
          this is not a sale or share.
        </li>
      </ul>
      <p>
        Full data-handling disclosure is in our{" "}
        <a href="/privacy">Privacy Policy §5 (SMS Messaging Consent)</a> and{" "}
        <a href="/privacy">Privacy Policy §4 (Sharing of Personal Data)</a>.
      </p>

      <h2>9. Example messages we send</h2>
      <p>For transparency, here are three real-world example messages:</p>
      <ol>
        <li>
          <code>
            Mass HVAC: Hi Mike, thanks for reaching out! Reply STOP to opt out,
            HELP for help. Msg frequency varies, msg &amp; data rates may
            apply. https://masshvac.net/privacy
          </code>
        </li>
        <li>
          <code>
            Mass HVAC: Hi Mike, confirming your free AC estimate at 12 Maple
            St on Tue 3pm. Reply C to confirm, R to reschedule, STOP to opt
            out. Help? Reply HELP.
          </code>
        </li>
        <li>
          <code>
            Mass HVAC: Mike, your mini-split install is on schedule for Mon
            5/12. Crew arrives at 7am. Questions? Reply here or call (508)
            786-8755. STOP to opt out.
          </code>
        </li>
      </ol>

      <h2>10. Legal references</h2>
      <p>Documents referenced:</p>
      <ul>
        <li><a href="/privacy">Privacy Policy</a> — full data-handling disclosure</li>
        <li><a href="/terms">Terms &amp; Conditions</a> — service agreement</li>
        <li><a href="/cookies">Cookie Policy</a> — website tracking technologies</li>
      </ul>
      <p>Compliance frameworks:</p>
      <ul>
        <li>Telephone Consumer Protection Act (TCPA)</li>
        <li>CAN-SPAM Act</li>
        <li>CTIA Short Code Monitoring Handbook</li>
        <li>A2P 10DLC carrier guidelines (Verizon, AT&amp;T, T-Mobile)</li>
      </ul>

      <h2>11. Questions about SMS or this policy</h2>
      <ul>
        <li>Email: <a href="mailto:info@masshvac.net">info@masshvac.net</a></li>
        <li>Phone: <a href="tel:+15087868755">(508) 786-8755</a></li>
        <li>Address: Mass HVAC Inc, Milford, MA 01757</li>
      </ul>
    </LegalPage>
  );
}
