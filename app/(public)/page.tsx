import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/daftar-populer";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
