import { ImageResponse } from "next/og";

/* ─────────────────────────────────────────────────────────────
   Post data — NO prices, creative copy, Instagram-optimized
   ───────────────────────────────────────────────────────────── */
const posts = [
  {
    id: "1",
    title: "YOUR COMFORT\nIS OUR MISSION",
    subtitle: "Free Expert Consultation Available",
    badge: "FREE ESTIMATE",
    image:
      "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853108245e718a03d08d.jpg",
  },
  {
    id: "2",
    title: "WHEN YOU\nNEED US MOST",
    subtitle: "Fast Response · Any Hour · Any Day",
    badge: "24/7 EMERGENCY",
    image:
      "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853163ae753dac28d098.jpg",
  },
  {
    id: "3",
    title: "ENERGY-EFFICIENT\nCOMFORT",
    subtitle: "Ductless Mini-Split Systems",
    badge: "SMART HEATING & COOLING",
    image:
      "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853120c0359b195a0dd9.jpeg",
  },
  {
    id: "4",
    title: "BEAT THE\nSUMMER HEAT",
    subtitle: "Schedule Your AC Tune-Up Today",
    badge: "STAY COOL",
    image:
      "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531df9bdffb5f5e9f09.jpeg",
  },
  {
    id: "5",
    title: "BREATHE\nEASY",
    subtitle: "Indoor Air Quality Solutions",
    badge: "HEALTHIER HOME",
    image:
      "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc121bee97966.jpg",
  },
  {
    id: "6",
    title: "UPGRADE\nYOUR SYSTEM",
    subtitle: "Oil-to-Gas Conversion Experts",
    badge: "SAVE ON ENERGY",
    image:
      "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531d83aecc9666cf028.jpg",
  },
  {
    id: "7",
    title: "KEEP IT\nRUNNING",
    subtitle: "Annual HVAC Maintenance Plans",
    badge: "PREVENTION FIRST",
    image:
      "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc1302fe9796c.jpg",
  },
  {
    id: "8",
    title: "LOCAL\n& TRUSTED",
    subtitle: "Serving 100+ Cities Across Massachusetts",
    badge: "YOUR NEIGHBORS",
    image:
      "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/699885315ba498e66200370c.jpg",
  },
];

/* ─────────────────────────────────────────────────────────────
   Three alternating templates for a harmonious Instagram feed:
   A (1,4,7) — Centered bottom text, bold gradient
   B (2,5,8) — Left-aligned text, side accent stripe
   C (3,6)   — Center-screen text, minimal clean style
   ───────────────────────────────────────────────────────────── */

function TemplateA({ post }: { post: (typeof posts)[0] }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a1628",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.image}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.82) 65%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* Top red bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: "#CC0000",
        }}
      />

      {/* Content — bottom center */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 60px 60px 60px",
        }}
      >
        <span
          style={{
            padding: "10px 28px",
            background: "#CC0000",
            color: "white",
            fontSize: "18px",
            fontWeight: 800,
            letterSpacing: "3px",
            borderRadius: "50px",
            marginBottom: "24px",
          }}
        >
          {post.badge}
        </span>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 900,
            color: "white",
            lineHeight: 1.05,
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          {post.title}
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          {post.subtitle}
        </div>

        {/* Red divider */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#CC0000",
            borderRadius: "2px",
            marginBottom: "32px",
          }}
        />

        <span
          style={{
            fontSize: "24px",
            fontWeight: 800,
            color: "white",
            letterSpacing: "2px",
          }}
        >
          MASS HVAC INC
        </span>
        <span
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.45)",
            marginTop: "6px",
          }}
        >
          (508) 740-4113 · Licensed & Insured
        </span>
      </div>

      {/* Bottom red bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "6px",
          background: "#CC0000",
        }}
      />
    </div>
  );
}

function TemplateB({ post }: { post: (typeof posts)[0] }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a1628",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.image}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.3) 100%)",
        }}
      />

      {/* Left red stripe */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "8px",
          background: "#CC0000",
        }}
      />

      {/* Content — left aligned, vertically centered */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 60px 60px 50px",
          maxWidth: "75%",
        }}
      >
        <span
          style={{
            display: "flex",
            padding: "8px 20px",
            border: "2px solid #CC0000",
            color: "#CC0000",
            fontSize: "16px",
            fontWeight: 800,
            letterSpacing: "3px",
            borderRadius: "4px",
            marginBottom: "28px",
            width: "fit-content",
          }}
        >
          {post.badge}
        </span>
        <div
          style={{
            fontSize: "60px",
            fontWeight: 900,
            color: "white",
            lineHeight: 1.05,
            marginBottom: "16px",
          }}
        >
          {post.title}
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "40px",
          }}
        >
          {post.subtitle}
        </div>

        {/* Brand + phone row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "1px",
            }}
          >
            MASS HVAC INC
          </span>
          <div
            style={{
              width: "4px",
              height: "20px",
              background: "#CC0000",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            (508) 740-4113
          </span>
        </div>
      </div>

      {/* Bottom red bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "6px",
          background: "#CC0000",
        }}
      />
    </div>
  );
}

function TemplateC({ post }: { post: (typeof posts)[0] }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a1628",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.image}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(0deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.85) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* Decorative corner accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "200px",
          height: "200px",
          borderBottom: "4px solid rgba(204,0,0,0.3)",
          borderLeft: "4px solid rgba(204,0,0,0.3)",
        }}
      />

      {/* Content — center screen */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          padding: "60px",
          paddingBottom: "80px",
        }}
      >
        {/* Large title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 900,
            color: "white",
            lineHeight: 1.0,
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {post.title}
        </div>

        {/* Red accent line */}
        <div
          style={{
            width: "120px",
            height: "5px",
            background: "#CC0000",
            borderRadius: "3px",
            marginBottom: "20px",
          }}
        />

        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.65)",
            textAlign: "center",
            marginBottom: "12px",
          }}
        >
          {post.subtitle}
        </div>

        <span
          style={{
            padding: "10px 24px",
            background: "rgba(204,0,0,0.15)",
            border: "1px solid rgba(204,0,0,0.4)",
            color: "#CC0000",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "3px",
            borderRadius: "4px",
            marginBottom: "40px",
          }}
        >
          {post.badge}
        </span>

        {/* Brand footer */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "3px",
            }}
          >
            MASS HVAC INC
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "1px",
              marginTop: "6px",
            }}
          >
            (508) 740-4113 · MASSACHUSETTS
          </span>
        </div>
      </div>

      {/* Bottom red bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "6px",
          background: "#CC0000",
        }}
      />
    </div>
  );
}

/* Template rotation: A-B-C-A-B-C-A-B for harmonious 3-column Instagram grid */
const templates = [TemplateA, TemplateB, TemplateC, TemplateA, TemplateB, TemplateC, TemplateA, TemplateB];

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return new Response("Post not found", { status: 404 });
  }

  const idx = parseInt(id, 10) - 1;
  const Template = templates[idx] || TemplateA;

  return new ImageResponse(<Template post={post} />, {
    width: 1080,
    height: 1350,
  });
}
