import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/5 via-background to-background py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-6 max-w-3xl text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
              Ensiklopedia Pengetahuan <span className="text-primary">Islam</span> Terpercaya
            </h1>
            <p className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Jelajahi sejarah, tokoh, dan artikel menarik seputar dunia Islam dalam satu platform yang akurat dan mudah diakses.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full bg-primary px-8 text-base hover:bg-primary/90">
                Mulai Eksplorasi
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base transition-colors hover:text-primary">
                Tentang Kami
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
