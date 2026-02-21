import { ImageResponse } from "next/og";

const posts = [
  {
    id: "1",
    title: "FREE HVAC ESTIMATE",
    subtitle: "All of Massachusetts",
    badge: "LIMITED OFFER",
    image: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853108245e718a03d08d.jpg",
  },
  {
    id: "2",
    title: "24/7 EMERGENCY REPAIR",
    subtitle: "Heating & Cooling",
    badge: "ALWAYS AVAILABLE",
    image: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853163ae753dac28d098.jpg",
  },
  {
    id: "3",
    title: "DUCTLESS MINI-SPLITS",
    subtitle: "Mass Save Rebates Available",
    badge: "UP TO $10,000 BACK",
    image: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853120c0359b195a0dd9.jpeg",
  },
  {
    id: "4",
    title: "SPRING AC TUNE-UP",
    subtitle: "Get Ready Before the Heat",
    badge: "BOOK NOW",
    image: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531df9bdffb5f5e9f09.jpeg",
  },
  {
    id: "5",
    title: "INDOOR AIR QUALITY",
    subtitle: "Breathe Cleaner, Healthier Air",
    badge: "PROTECT YOUR FAMILY",
    image: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc121bee97966.jpg",
  },
  {
    id: "6",
    title: "OIL-TO-GAS CONVERSION",
    subtitle: "Save Up to 25% on Heating",
    badge: "REBATES AVAILABLE",
    image: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531d83aecc9666cf028.jpg",
  },
  {
    id: "7",
    title: "ANNUAL MAINTENANCE",
    subtitle: "Prevent Breakdowns & Stay Safe",
    badge: "STARTING AT $89",
    image: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc1302fe9796c.jpg",
  },
  {
    id: "8",
    title: "100+ CITIES SERVED",
    subtitle: "Across All of Massachusetts",
    badge: "LOCAL & TRUSTED",
    image: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/699885315ba498e66200370c.jpg",
  },
];

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return new Response("Post not found", { status: 404 });
  }

  return new ImageResponse(
    (
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
        {/* Background image */}
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

        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.95) 100%)",
          }}
        />

        {/* Top accent bar */}
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

        {/* Content */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            padding: "0 60px 50px 60px",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                padding: "8px 20px",
                background: "#CC0000",
                color: "white",
                fontSize: "16px",
                fontWeight: 800,
                letterSpacing: "2px",
                borderRadius: "6px",
              }}
            >
              {post.badge}
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "52px",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "8px",
              letterSpacing: "-1px",
            }}
          >
            {post.title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "26px",
              color: "rgba(255,255,255,0.75)",
              marginBottom: "28px",
            }}
          >
            {post.subtitle}
          </div>

          {/* Bottom row: brand + phone */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Brand */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  color: "white",
                }}
              >
                MASS HVAC INC
              </span>
              <span
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "1px",
                }}
              >
                LICENSED & INSURED · MASSACHUSETTS
              </span>
            </div>

            {/* Phone */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 32px",
                background: "#CC0000",
                borderRadius: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "26px",
                  fontWeight: 800,
                  color: "white",
                  letterSpacing: "1px",
                }}
              >
                (508) 740-4113
              </span>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
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
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
