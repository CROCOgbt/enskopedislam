import ImageCard from "@/components/ImageCard"

const images = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop",
    alt: "Masjid indah dengan arsitektur tradisional",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=400&fit=crop",
    alt: "Wanita membaca Al-Qur'an dengan khusyuk",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1507842251343-583f7270bfba?w=500&h=400&fit=crop",
    alt: "Ayat Al-Qur'an dalam cahaya indah",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1528127269915-8f8f2f67bf4a?w=500&h=400&fit=crop",
    alt: "Buku hadis dan Al-Qur'an",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1516111422f61d65b62c1155c6c6d8ec3c9d2b9c?w=500&h=400&fit=crop",
    alt: "Lanskap religius yang menginspirasi",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1495195134817-aeb325b55b65?w=500&h=400&fit=crop",
    alt: "Surya terbit dengan keindahan langit",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=400&fit=crop",
    alt: "Pemandangan lanskap yang menenangkan",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=400&fit=crop",
    alt: "Cahaya matahari melalui jendela",
  },
]

export default function ImageGallerySection() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Galeri Inspirasi</h2>
        <p className="text-slate-600 text-lg">
          Koleksi gambar-gambar indah yang menginspirasi dan memperdalam pemahaman spiritual Anda.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <ImageCard
            key={img.id}
            image={img.image || "/gupron.png"}
            alt={img.alt}
          />
        ))}
      </div>
    </section>
  )
}
