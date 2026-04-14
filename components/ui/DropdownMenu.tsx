import * as React from "react"
import {
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
} from "@/components/ui/NavigationMenu"
import { cn } from "@/lib/utils"

interface DropdownMenuProps {
  triggerLabel: string
  triggerClassName?: string
  contentClassName?: string
  children: React.ReactNode
}

export default function DropdownMenu({
  triggerLabel,
  triggerClassName,
  contentClassName,
  children,
}: DropdownMenuProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className={cn(
        "bg-transparent! hover:bg-transparent! ring-0! h-auto! px-0! py-0! text-sm! font-medium! rounded-none! transition-colors! duration-200! inline-flex! items-center gap-x-1 shadow-none! border-0! hover:text-primary!",
        triggerClassName
      )}>
        {triggerLabel}
      </NavigationMenuTrigger>
      <NavigationMenuContent className={cn(
        "mt-1! rounded-lg! bg-transparent! backdrop-blur-none! ring-0! transition-all! duration-200! ease-out!",
        contentClassName
      )}>
        {children}
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
