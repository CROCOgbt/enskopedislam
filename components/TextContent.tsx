import { cn } from "@/lib/utils"

interface TextContentProps {
  content: string
  author?: string
  className?: string
}

export default function TextContent({
  content,
  author,
  className,
}: TextContentProps) {
  return (
    <div
      className={cn(
        "text-center py-8 px-6",
        className
      )}
    >
      <p className="text-lg leading-relaxed text-slate-700 mb-4 italic">
        "{content}"
      </p>
      {author && (
        <p className="text-slate-600 font-semibold">
          — {author}
        </p>
      )}
    </div>
  )
}
