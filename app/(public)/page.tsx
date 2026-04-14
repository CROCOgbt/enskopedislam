import HeroSection from "@/components/hero-section";
import ArtikelSection from "@/components/ArtikelSection";
import HighlightSection from "@/components/HighlightSection";
import ImageGallerySection from "@/components/ImageGallerySection";
import TestimonialSection from "@/components/TestimonialSection";
import DaftarPopuler from "@/components/DaftarHadis";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100">
      <HeroSection />
      <DaftarPopuler />
      <ArtikelSection />
      <HighlightSection />
      <ImageGallerySection />
      <TestimonialSection />
    </main>
  );
}
