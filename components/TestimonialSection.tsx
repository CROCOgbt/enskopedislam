import Link from "next/link"

const articles = [
  {
    id: 1,
    title: "Kapan bulan puasa 2027",
    href: "/artikel/puasa-2027",
  },
  {
    id: 2,
    title: "Panduan Sholat Tarawih Lengkap",
    href: "/artikel/tarawih",
  },
  {
    id: 3,
    title: "Sejarah Nabi Muhammad SAW",
    href: "/artikel/sejarah-nabi",
  },
  {
    id: 4,
    title: "Doa-doa Harian untuk Muslim",
    href: "/artikel/doa-harian",
  },
]

export default function TestimonialSection() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Artikel Terbaru</h2>
        <p className="text-slate-600 text-lg">
          Baca artikel-artikel terbaru tentang Islam, sejarah, dan pengetahuan agama.
        </p>
      </div>

      <div className="space-y-4">
        {articles.map((article) => (
          <ArticleLink key={article.id} {...article} />
        ))}
      </div>
    </section>
  )
}

interface ArticleLinkProps {
  id: number
  title: string
  href: string
}

function ArticleLink({ id, title, href }: ArticleLinkProps) {
  return (
    <Link
      href={href}
      className="block text-lg font-bold text-slate-900 hover:text-primary transition-colors duration-200 hover:underline"
    >
      {title}
    </Link>
  )
}
