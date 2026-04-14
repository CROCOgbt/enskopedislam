"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Calendar } from "lucide-react"
import { useState } from "react"

interface ArticleCardProps {
  image: string
  title: string
  description: string
  date: string
  className?: string
}

export default function ArticleCard({
  image,
  title,
  description,
  date,
  className,
}: ArticleCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div
      className={cn(
        "bg-white rounded shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer flex h-28",
        className
      )}
    >
      {/* Image Container - Left Side */}
      <div className="relative w-28 h-28 bg-slate-200 overflow-hidden shrink-0">
        <Image
          src={imageError ? "/gupron.png" : image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 112px"
          onError={() => setImageError(true)}
        />
      </div>

      {/* Content Container - Right Side */}
      <div className="p-3 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xs font-semibold text-slate-900 mb-1 line-clamp-2 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 text-xs leading-relaxed line-clamp-1">
            {description}
          </p>
        </div>

        {/* Date at Bottom */}
        <div className="flex items-center gap-1 text-slate-500 text-xs">
          <Calendar className="w-3 h-3" />
          <span className="text-xs">{date}</span>
        </div>
      </div>
    </div>
  )
}
