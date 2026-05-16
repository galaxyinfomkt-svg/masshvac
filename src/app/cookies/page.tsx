import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Mass HVAC Inc Cookie Policy — what cookies are, how we use them, and how you can control them on our website.",
  alternates: { canonical: "https://masshvac.net/cookies" },
};

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="May 1, 2026">
      <p>
        This Cookie Policy explains how <strong>Mass HVAC Inc</strong>{" "}
        (&quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, &quot;Our&quot;)
        uses cookies and similar technologies to recognize You when You visit
        our website at <a href="https://masshvac.net">masshvac.net</a>. It
        explains what these technologies are and why we use them, as well as
        Your rights to control our use of them.
      </p>

      <h2>What are Cookies?</h2>
      <p>
        Cookies are small data files that are placed on Your computer or mobile
        device when You visit a website. Cookies are widely used by website
        owners to make their websites work or work more efficiently, as well as
        to provide reporting information.
      </p>
      <p>
        Cookies set by the website owner (in this case, Mass HVAC Inc) are
        called &quot;first-party cookies.&quot; Cookies set by parties other
        than the website owner are called &quot;third-party cookies.&quot;
        Third-party cookies enable third-party features or functionality to be
        provided on or through the website (such as advertising, analytics,
        interactive content and forms).
      </p>

      <h2>Why do we use Cookies?</h2>
      <p>We use first- and third-party cookies for several reasons:</p>
      <ul>
        <li>Some cookies are required for technical reasons in order for our website to operate (essential or strictly necessary cookies).</li>
        <li>Other cookies enable us to enhance Your user experience, personalize content, analyze the performance of our website, and deliver targeted advertising.</li>
        <li>Specific reasons are outlined in the &quot;Types of Cookies We May Use&quot; section below.</li>
      </ul>

      <h2>How can I control cookies?</h2>
      <p>
        You have the right to decide whether to accept or reject cookies. You
        can exercise Your cookie rights by setting Your preferences in the
        cookie consent banner shown on our website.
      </p>
      <p>
        You can also set or amend Your web browser controls to accept or refuse
        cookies. If You choose to reject cookies, You may still use our website,
        though Your access to some functionality and areas of our website may be
        restricted. Essential cookies cannot be disabled because they are
        required for the site to function.
      </p>

      <h2>Types of Cookies We May Use</h2>
      <ul>
        <li>
          <strong>Essential Cookies</strong> — Required for basic functionality
          of our website (form submissions, navigation, our chat widget,
          security). These cannot be disabled.
        </li>
        <li>
          <strong>Performance / Functionality Cookies</strong> — Used to improve
          site performance and remember Your preferences (e.g. last city
          viewed).
        </li>
        <li>
          <strong>Analytics &amp; Customization Cookies</strong> — Help us
          understand how visitors interact with our website (e.g. Google
          Analytics, Vercel Analytics).
        </li>
        <li>
          <strong>Advertising Cookies</strong> — Used to deliver relevant ads
          and track ad campaign performance (e.g. Meta Pixel, Google Ads).
        </li>
        <li>
          <strong>Social Networking Cookies</strong> — Set by social platforms
          (Facebook, Instagram, YouTube) to enable sharing and tracking.
        </li>
      </ul>

      <h2>Managing Cookies in Your Browser</h2>
      <p>You can manage cookies through your browser settings:</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Firefox</a></li>
        <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        <li><a href="https://help.opera.com/en/latest/web-preferences/" target="_blank" rel="noopener noreferrer">Opera</a></li>
      </ul>
      <p>
        For opt-out tools regarding targeted advertising, visit:{" "}
        <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">DAA (US)</a>,{" "}
        <a href="https://youradchoices.ca/en/tools" target="_blank" rel="noopener noreferrer">DAAC (Canada)</a>, or{" "}
        <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">EDAA (Europe)</a>.
      </p>

      <h2>Other Tracking Technologies</h2>
      <p>
        Cookies are not the only way to recognize or track visitors to a
        website. We may use other, similar technologies from time to time, like
        web beacons (also called &quot;tracking pixels&quot; or &quot;clear
        gifs&quot;). These are tiny graphics files containing a unique
        identifier that enable us to recognize when someone has visited our
        website or opened an email.
      </p>

      <h2>Flash Cookies / Local Shared Objects</h2>
      <p>
        Our website may use so-called &quot;Flash Cookies&quot; (also known as
        Local Shared Objects) to collect and store information about Your use
        of our services. You can manage your Flash Cookie settings on Adobe&apos;s
        website.
      </p>

      <h2>Targeted Advertising</h2>
      <p>
        Third-party advertisers may use cookies to serve ads relevant to Your
        interests on our website and on third-party websites. We do not control
        these third-party cookies.
      </p>

      <h2>Updates to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy from time to time in order to reflect,
        for example, changes to the cookies we use or for other operational,
        legal or regulatory reasons. Please re-visit this Cookie Policy
        regularly to stay informed about our use of cookies and related
        technologies.
      </p>

      <h2>Contact Us</h2>
      <p>If you have any questions about our use of cookies, please contact us:</p>
      <ul>
        <li>By email: <a href="mailto:info@masshvac.net">info@masshvac.net</a></li>
        <li>By phone: <a href="tel:+15087868755">(508) 786-8755</a></li>
        <li>By visiting this page on our website: <a href="/">masshvac.net</a></li>
        <li>By mail: Mass HVAC Inc, Milford, MA 01757</li>
      </ul>
    </LegalPage>
  );
}
