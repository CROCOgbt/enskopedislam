"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"
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
  const [imageError, setImageError] = useState(false)

  return (
    <div
      className={cn(
        "bg-white rounded shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer",
        className
      )}
    >
      <div className="relative w-full h-48 bg-slate-200 overflow-hidden">
        <Image
          src={imageError ? "/gupron.png" : image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-101 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={() => setImageError(true)}
        />
      </div>
    </div>
  )
}
