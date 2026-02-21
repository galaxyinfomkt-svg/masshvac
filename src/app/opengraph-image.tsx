import { ImageResponse } from "next/og";

export const alt =
  "Mass HVAC Inc — Professional Heating & Cooling in Massachusetts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(145deg, #0a1628 0%, #1B2A6B 55%, #101c3a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
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

        {/* Decorative circle - top right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "400px",
            height: "400px",
            borderRadius: "200px",
            background: "radial-gradient(circle, rgba(204,0,0,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Decorative circle - bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "150px",
            background: "radial-gradient(circle, rgba(204,0,0,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            padding: "60px 80px",
          }}
        >
          {/* Company name */}
          <div
            style={{
              fontSize: "68px",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-2px",
              marginBottom: "4px",
              textAlign: "center",
            }}
          >
            MASS HVAC INC
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "36px",
              textAlign: "center",
            }}
          >
            Professional Heating & Cooling in Massachusetts
          </div>

          {/* Red divider */}
          <div
            style={{
              width: "100px",
              height: "4px",
              background: "#CC0000",
              borderRadius: "2px",
              marginBottom: "36px",
            }}
          />

          {/* 5 Stars + text */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "36px",
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                style={{
                  fontSize: "30px",
                  color: "#CC0000",
                  marginRight: "4px",
                }}
              >
                ★
              </span>
            ))}
            <span
              style={{
                fontSize: "22px",
                color: "white",
                fontWeight: 700,
                marginLeft: "12px",
              }}
            >
              5-Star Rated on Google
            </span>
          </div>

          {/* Phone badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 48px",
              background: "#CC0000",
              borderRadius: "12px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                fontSize: "30px",
                color: "white",
                fontWeight: 800,
                letterSpacing: "1px",
              }}
            >
              (508) 740-4113
            </span>
          </div>

          {/* Bottom info line */}
          <div
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.45)",
              textAlign: "center",
            }}
          >
            Licensed & Insured · 24/7 Emergency Service · Free Estimates · Serving 100+ MA Cities
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#CC0000",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
