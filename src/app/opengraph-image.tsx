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
          background: "linear-gradient(135deg, #f5f3ef 0%, #f8f7f4 55%, #efe9df 100%)",
          color: "#132232",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 24, color: "#8f6a34", letterSpacing: 4 }}>DHRUV WORLD</div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 18 }}>Dhruv Solanki</div>
        <div style={{ fontSize: 34, marginTop: 10, color: "#5f5f5f" }}>Dhruv Solankii</div>
        <div style={{ fontSize: 28, marginTop: 26, color: "#4f4f4f" }}>
          AI • Business • Technology • Digital Identity
        </div>
      </div>
    ),
    size,
  );
}
