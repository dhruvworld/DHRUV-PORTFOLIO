import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b1b33 0%, #0f172a 60%, #1e293b 100%)",
          color: "white",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 26, color: "#c6a86a", letterSpacing: 4 }}>
          DHRUV WORLD
        </div>
        <div style={{ fontSize: 74, fontWeight: 700, marginTop: 18 }}>Dhruv Solanki</div>
        <div style={{ fontSize: 36, marginTop: 10, color: "#cbd5e1" }}>(Dhruv Solankii)</div>
        <div style={{ fontSize: 28, marginTop: 26, color: "#e2e8f0" }}>
          AI • Business • Technology • Creator
        </div>
      </div>
    ),
    size,
  );
}
