import HeroSection from "@/components/hero-section";
import DaftarPopuler from "@/components/daftar-populer";
import DaftarTerbaru from "@/components/daftar-terbaru";



export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100">
      <HeroSection />
      <DaftarPopuler />
      <DaftarTerbaru />
    </main>
  );
}
