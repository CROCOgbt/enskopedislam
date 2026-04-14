import ArticleCard from "@/components/ArticleCard"

const articles = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507842251343-583f7270bfba?w=500&h=400&fit=crop",
    title: "Sejarah Perkembangan Islam di Nusantara",
    description:
      "Pelajari tentang perjalanan panjang Islam masuk ke Indonesia dan bagaimana agama ini berkembang menjadi bagian integral dari budaya Indonesia.",
    date: "15 Januari 2024",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1528127269915-8f8f2f67bf4a?w=500&h=400&fit=crop",
    title: "Tokoh-Tokoh Berpengaruh dalam Sejarah Islam",
    description:
      "Mengenal para tokoh-tokoh kunci yang memberikan kontribusi besar dalam perkembangan pemahaman dan penyebaran Islam di seluruh dunia.",
    date: "22 Februari 2024",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1516111422f61d65b62c1155c6c6d8ec3c9d2b9c?w=500&h=400&fit=crop",
    title: "Ajaran Pokok Islam yang Perlu Dipahami",
    description:
      "Memahami lima pilar Islam dan berbagai ajaran fundamental yang menjadi dasar kehidupan beragama bagi umat Muslim di seluruh dunia.",
    date: "10 Maret 2024",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=400&fit=crop",
    title: "Keindahan Al-Qur'an dan Hadis",
    description:
      "Menggali kedalaman makna ayat-ayat Al-Qur'an dan hadis-hadis mulia yang memberikan panduan hidup bagi setiap Muslim.",
    date: "5 April 2024",
  },
]

export default function ArtikelSection() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Artikel & Pembelajaran</h2>
        <p className="text-slate-600 text-lg">
          Jelajahi koleksi artikel mendalam tentang Islam, sejarah, tokoh-tokoh berpengaruh, dan ajaran-ajaran penting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            image={article.image || "/gupron.png"}
            title={article.title}
            description={article.description}
            date={article.date}
          />
        ))}
      </div>
    </section>
  )
}
