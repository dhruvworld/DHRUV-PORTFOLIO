import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function FounderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #131c2e 0%, #1b2640 60%, #2a3050 100%)",
          color: "white",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 3, color: "#49b7ff" }}>FOUNDER</div>
        <div style={{ fontSize: 70, fontWeight: 700, marginTop: 16 }}>Dhruv Solanki</div>
        <div style={{ fontSize: 34, marginTop: 12, color: "#d6e0f5" }}>Manifesto and Operating Principles</div>
      </div>
    ),
    size,
  );
}
