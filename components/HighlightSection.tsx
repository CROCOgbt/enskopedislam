import HighlightCard from "@/components/HighlightCard"

const highlights = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop",
    title: "Tafsir Al-Qur'an Lengkap",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507842251343-583f7270bfba?w=500&h=400&fit=crop",
    title: "Hadis-Hadis Pilihan",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1528127269915-8f8f2f67bf4a?w=500&h=400&fit=crop",
    title: "Biografi Para Sahabat",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516111422f61d65b62c1155c6c6d8ec3c9d2b9c?w=500&h=400&fit=crop",
    title: "Panduan Shalat Sempurna",
  },
]

export default function HighlightSection() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Koleksi Pilihan</h2>
        <p className="text-slate-600 text-lg">
          Jelajahi konten-konten istimewa yang telah dikurasi khusus untuk memperdalam pemahaman Islam Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((highlight) => (
          <HighlightCard
            key={highlight.id}
            image={highlight.image}
            title={highlight.title}
          />
        ))}
      </div>
    </section>
  )
}
