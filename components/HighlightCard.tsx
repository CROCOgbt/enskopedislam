import Image from "next/image"
import { cn } from "@/lib/utils"

interface HighlightCardProps {
  image: string
  title: string
  className?: string
}

export default function HighlightCard({
  image,
  title,
  className,
}: HighlightCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer",
        className
      )}
    >
      {/* Image Container - Top */}
      <div className="relative w-full h-40 bg-slate-200 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Title Container - Bottom */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </div>
  )
}
