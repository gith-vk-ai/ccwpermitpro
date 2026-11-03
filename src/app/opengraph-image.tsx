import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "CCWPermitPro — Thinking about getting your concealed carry permit?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f7f6f2",
          color: "#14202e",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 40, fontWeight: 800 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "#14202e", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 26, height: 30, borderRadius: "4px 4px 13px 13px", background: "#a33a22" }} />
          </div>
          <span>
            CCWPermit<span style={{ color: "#a33a22" }}>Pro</span>
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1 }}>
            Thinking about getting your concealed carry permit?
          </div>
          <div style={{ fontSize: 30, color: "#5b6573" }}>Free 60-second quiz • No signup required • 18+ only</div>
        </div>
      </div>
    ),
    size,
  );
}
