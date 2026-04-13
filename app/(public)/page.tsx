import HeroSection from "@/components/HeroSection";
import DaftarPopuler from "@/components/DaftarPopuler";
import DaftarTerbaru from "@/components/DaftarTerbaru";



export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100">
      <HeroSection />
      <DaftarPopuler />
      <DaftarTerbaru />
    </main>
  );
}
