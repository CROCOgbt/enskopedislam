import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="px-6 pt-20 pb-32 text-center">
      <h1 className="text-5xl font-bold text-slate-900 mb-6">
        Selamat datang di Ensikopedia Islam
      </h1>
      <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
        Temukan pengetahuan mendalam tentang Islam, mulai dari sejarah, ajaran, hingga budaya. Jelajahi artikel, video, dan sumber daya terpercaya untuk memperluas wawasan Anda tentang agama yang indah ini.
      </p>
      <div className="flex gap-4 justify-center">
        <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <a href="#populer">Daftar Populer </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-700">
            <a href="#terbaru">Daftar Terbaru</a>
        </Button>
      </div>
    </div>
  );
}
