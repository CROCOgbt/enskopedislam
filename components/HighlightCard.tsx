"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

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
  const [imageError, setImageError] = useState(false)

  return (
    <div
      className={cn(
        "bg-white rounded shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden group cursor-pointer",
        className
      )}
    >
      {/* Image Container - Top */}
      <div className="relative w-full h-40 bg-slate-200 overflow-hidden">
        <Image
          src={imageError ? "/gupron.png" : image}
          alt={title}
          fill
          className="object-cover  transition-transform"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={() => setImageError(true)}
        />
      </div>

      {/* Title Container - Bottom */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 transition-colors justify-center text-center">
          {title}
        </h3>
      </div>
    </div>
  )
}
