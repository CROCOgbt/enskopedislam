"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Sejarah Islam",
    href: "/sejarah",
    description: "Pelajari perjalanan sejarah Islam dari masa ke masa.",
  },
  {
    title: "Tokoh Muslim",
    href: "/tokoh",
    description: "Mengenal ilmuwan dan tokoh berpengaruh dalam dunia Islam.",
  },
  {
    title: "Ensiklopedia",
    href: "/ensiklopedia",
    description: "Kumpulan istilah dan pengetahuan Islam yang lengkap.",
  },
  {
    title: "Artikel",
    href: "/artikel",
    description: "Baca artikel menarik seputar gaya hidup dan nilai-nilai Islam.",
  },
]

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <span className="text-lg font-bold">E</span>
            </div>
            <span className="hidden text-xl font-bold tracking-tight text-primary sm:inline-block">
              Enskoped Islam
            </span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "hover:text-primary transition-colors")}>
                  <Link href="/">
                    Beranda
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-primary transition-colors">Eksplorasi</NavigationMenuTrigger>
                <NavigationMenuContent className="mt-4">
                  <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        className="hover:bg-primary/10"
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "hover:text-primary transition-colors")}>
                  <Link href="/tentang">
                    Tentang Kami
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4 lg:gap-6">
          <div className="relative hidden w-full max-w-sm lg:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Cari pengetahuan Islam..."
              className="w-full rounded-full bg-muted/50 pl-9 focus:bg-background"
            />
          </div>
          
          <nav className="flex items-center gap-2">
            <Link
              href="/kontak"
              className="hidden px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary md:block"
            >
              Kontak
            </Link>
            <button className="inline-flex h-9 items-center justify-center rounded-full bg-secondary px-6 text-sm font-medium text-secondary-foreground shadow-sm transition-all hover:bg-secondary/90 hover:scale-105 active:scale-95">
              Masuk
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          ref={ref as any}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
