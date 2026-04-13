import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageCardProps {
  image: string
  alt: string
  className?: string
}

export default function ImageCard({
  image,
  alt,
  className,
}: ImageCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative w-full h-48 bg-slate-200 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
    </div>
  )
}
