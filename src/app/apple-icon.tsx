import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d4f5c",
          borderRadius: 36,
          color: "#faf9f7",
          fontSize: 72,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.02em",
        }}
      >
        CF
      </div>
    ),
    { ...size }
  );
}
