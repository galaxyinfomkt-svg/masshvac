const FORM_ID = "ko3gg97CJtkDUrqpruBq";
const FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;

/**
 * The LeadConnector (Bee Pro Hub) quote form, exactly as GHL embeds it: a bare iframe in the
 * server HTML, so the browser starts loading it with the page. No placeholder text, no delay and
 * no card behind it; the form brings its own background.
 *
 * loading="lazy" only matters for forms that are off screen or inside a hidden breakpoint
 * (the hero form on phones, the phone form on desktop): the browser skips those, and starts a
 * form that is in view right away.
 * `instance` must be unique per form so LeadConnector can size each iframe.
 */
export default function LeadForm({
  instance,
  height = 640,
  title = "Free HVAC Estimate - Mass HVAC Inc",
  className = "w-full border-none",
}: {
  instance: string;
  height?: number;
  title?: string;
  className?: string;
}) {
  const id = `${instance}-${FORM_ID}`;
  return (
    <iframe
      src={FORM_SRC}
      className={className}
      style={{ height: `${height}px` }}
      id={id}
      loading="lazy"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-form-name="FunilGhl"
      data-height={String(height)}
      data-layout-iframe-id={id}
      data-form-id={FORM_ID}
      title={title}
    />
  );
}
