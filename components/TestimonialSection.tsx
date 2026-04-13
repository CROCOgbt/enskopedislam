import TextContent from "@/components/TextContent"

const testimonials = [
  {
    id: 1,
    content: "Ilmu adalah warisan para nabi. Barangsiapa menuntut ilmu, maka dia menuntut suatu kemurahan dari Allah.",
    author: "Imam At-Tirmidzi",
  },
  {
    id: 2,
    content: "Sebaik-baik kalian adalah yang belajar Al-Qur'an dan mengajarkannya.",
    author: "Hadis Sahih Bukhari",
  },
  {
    id: 3,
    content: "Janganlah menutup mata hati kalian dari keindahan alam, karena setiap ciptaan Allah adalah tanda-tanda kebesaran-Nya.",
    author: "Filosofi Islam",
  },
]

export default function TestimonialSection() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-flex">Kata-Kata Inspiratif</h2>
        <p className="text-slate-600 text-lg text-flex">
          Renungan dan motivasi dari para ulama serta hadis mulia untuk memperkuat iman Anda.
        </p>
      </div>

      <div className="space-y-8">
        {testimonials.map((testimonial) => (
          <TimelineContent key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  )
}

interface TimelineContentProps {
  id: number
  content: string
  author: string
}

function TimelineContent({ id, content, author }: TimelineContentProps) {
  return (
    <div className="relative pl-8 border-l-2 border-primary">
      {/* Timeline dot */}
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-2.5 top-2"></div>
      
      <TextContent
        content={content}
        author={author}
        className="text-left py-0"
      />
    </div>
  )
}
