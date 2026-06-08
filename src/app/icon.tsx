import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 8,
          color: "#faf9f7",
          fontSize: 16,
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
