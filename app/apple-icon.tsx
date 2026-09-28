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
          background: "linear-gradient(160deg, #1A1D24 0%, #0D0F14 100%)",
        }}
      >
        <svg width="104" height="104" viewBox="0 0 32 32" fill="none">
          <path d="M8 6h15l-3 5H8Z" fill="#5B6BFF" />
          <path d="M8 13.5h13l-3 5H8Z" fill="#FFFFFF" />
          <path d="M8 21h11l-3 5H8Z" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    size,
  );
}
