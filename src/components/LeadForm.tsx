import LazyIframe from "@/components/LazyIframe";
import { PHONE_DISPLAY, TEL_HREF } from "@/data/company";

const FORM_ID = "ko3gg97CJtkDUrqpruBq";
const FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;

/**
 * The one LeadConnector (Bee Pro Hub) quote form, lazy-loaded everywhere.
 * `instance` must be unique per page so LeadConnector can size each iframe.
 */
export default function LeadForm({
  instance,
  height = 640,
  delayMs = 0,
  title = "Free HVAC Estimate — Mass HVAC Inc",
}: {
  instance: string;
  height?: number;
  delayMs?: number;
  title?: string;
}) {
  const id = `${instance}-${FORM_ID}`;
  return (
    <LazyIframe
      src={FORM_SRC}
      className="w-full border-none"
      style={{ height: `${height}px` }}
      id={id}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-activation-type="alwaysActivated"
      data-deactivation-type="neverDeactivate"
      data-form-name="FunilGhl"
      data-height={String(height)}
      data-layout-iframe-id={id}
      data-form-id={FORM_ID}
      title={title}
      delayMs={delayMs}
      placeholderHeight={`${height}px`}
      placeholder={
        <p className="text-sm text-gray-600 text-center px-6">
          Loading the quote form…
          <br />
          Prefer to talk?{" "}
          <a href={TEL_HREF} className="font-semibold text-accent underline">
            Call {PHONE_DISPLAY}
          </a>
        </p>
      }
    />
  );
}
