"use client";
import { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ color: string }>;
}

const outfitImages: Record<string, string[]> = {
  black: [
    "/images/outfits/black/outfit1.jpg", 
    "/images/outfits/black/outfit2.jpg", 
    "/images/outfits/black/outfit3.jpg"],
  white: [
    "/images/outfits/white/outfit1.jpg", 
    "/images/outfits/white/outfit2.jpg"],
};

export default function ColorDetail({ params }: PageProps) {
  const { color } = use(params);
  const colorKey = color.toLowerCase();

  const images = outfitImages[colorKey];
  if (!images) return notFound();

  return (
    <div style={{ backgroundColor: "var(--sand)", color: "var(--espresso)", minHeight: "80vh", padding: "2rem" }}>
      <h1 className="font-grandstander mb-4">Outfits for {color} - Winter 2025</h1>
      <p className="font-averia mb-4">
        Explore curated winter outfits featuring the color <strong>{color}</strong>.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
        {images.map((img, idx) => (
          <div key={idx} style={{ borderRadius: "1rem", overflow: "hidden", position: "relative", height: "750px" }}>
            <Image src={img} alt={`${color} outfit ${idx + 1}`} fill style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>

      <a
        href="/poll"
        style={{
          display: "inline-block",
          marginTop: "2rem",
          padding: "0.5rem 2rem",
          backgroundColor: "var(--espresso)",
          color: "var(--sand)",
          border: "1px solid var(--espresso)",
          borderRadius: "0.5rem",
          fontFamily: "var(--font-averia)",
          textDecoration: "none",
        }}
      >
        Back to Poll
      </a>
    </div>
  );
}
