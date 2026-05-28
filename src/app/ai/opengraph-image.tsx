import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function AiOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #151f33 0%, #1d2c45 62%, #2f3f5f 100%)",
          color: "white",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 3, color: "#49b7ff" }}>AI LAB</div>
        <div style={{ fontSize: 70, fontWeight: 700, marginTop: 16 }}>Dhruv World AI Systems</div>
        <div style={{ fontSize: 34, marginTop: 12, color: "#d6e0f5" }}>Practical AI Execution for Builders</div>
      </div>
    ),
    size,
  );
}
