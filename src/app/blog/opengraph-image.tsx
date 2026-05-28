import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function BlogOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #182238 0%, #21324f 62%, #34496a 100%)",
          color: "white",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 3, color: "#49b7ff" }}>AI JOURNAL</div>
        <div style={{ fontSize: 70, fontWeight: 700, marginTop: 16 }}>Dhruv World Writing</div>
        <div style={{ fontSize: 34, marginTop: 12, color: "#d6e0f5" }}>Founder Notes, Systems, and Execution</div>
      </div>
    ),
    size,
  );
}
