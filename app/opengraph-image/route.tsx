import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";

/**
 * Imagen de Open Graph.
 * Se dibuja con formas y peso tipográfico en vez de con la tipografía de
 * marca: incrustar Poppins aquí obligaría a una descarga externa en cada
 * render. La marca se sostiene con el símbolo, la retícula y el azul.
 */
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0D0F14",
          backgroundImage:
            "linear-gradient(to right, #171A20 1px, transparent 1px), linear-gradient(to bottom, #171A20 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          position: "relative",
        }}
      >
        {/* Halo azul */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -180,
            width: 900,
            height: 760,
            background:
              "radial-gradient(circle at 50% 50%, rgba(91,107,255,0.30) 0%, rgba(91,107,255,0.07) 42%, rgba(13,15,20,0) 68%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="52" height="52" viewBox="0 0 32 32" fill="none">
            <path d="M8 6h15l-3 5H8Z" fill="#5B6BFF" />
            <path d="M8 13.5h13l-3 5H8Z" fill="#FFFFFF" />
            <path d="M8 21h11l-3 5H8Z" fill="#FFFFFF" />
          </svg>
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: 6,
              color: "#FFFFFF",
              display: "flex",
            }}
          >
            ELEVA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: -3,
              color: "#FFFFFF",
              maxWidth: 900,
              display: "flex",
            }}
          >
            Elevamos negocios con tecnología.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.45,
              color: "#A6AAB5",
              maxWidth: 820,
              display: "flex",
            }}
          >
            Diseño y desarrollo de soluciones digitales para negocios que quieren
            crecer.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            paddingTop: 28,
            borderTop: "1px solid #262A33",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#5B6BFF",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#7A7F8C",
              display: "flex",
            }}
          >
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
