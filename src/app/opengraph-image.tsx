import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} – ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #115E59 0%, #0F766E 55%, #134E4A 140%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#F59E0B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0F172A",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#FCD34D",
            }}
          >
            Socialpædagogisk organisation
          </div>
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, maxWidth: 920 }}>
            Tryg, faglig støtte til børn, unge og familier
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.8)" }}>
            Indsatser efter Barnets Lov · Respekt · Tillid · Empati · Anerkendelse
          </div>
        </div>

        <div style={{ display: "flex", gap: 32, fontSize: 24, color: "#FCD34D" }}>
          <span>{site.phone}</span>
          <span>{site.email}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
