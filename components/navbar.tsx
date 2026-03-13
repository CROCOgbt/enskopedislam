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

const components: { title: string; href: string }[] = [
  {
    title: "Sejarah Islam",
    href: "/sejarah",
  },
  {
    title: "Tokoh Muslim",
    href: "/tokoh",
  },
  {
    title: "Ensiklopedia",
    href: "/ensiklopedia",
  },
  {
    title: "Artikel",
    href: "/artikel",
  },
]

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const searchRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Munculkan navbar jika scroll ke atas
      // Sembunyikan navbar jika scroll ke bawah dan sudah melewati 100px
      if (prevScrollPos > currentScrollPos) {
        setIsVisible(true);
      } else if (currentScrollPos > 100) {
        setIsVisible(false);
        setIsSearchExpanded(false); // Collapse search on scroll
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [prevScrollPos]);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full border-b bg-background transition-all duration-300 ease-in-out",
      isVisible ? "translate-y-0" : "-translate-y-full"
    )}>
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
                  <ul className="flex w-48 flex-col gap-1 p-2">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        className="hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      />
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

        <div className="flex items-center justify-end gap-4">
          <div 
            ref={searchRef}
            className={cn(
              "relative flex items-center transition-all duration-300 ease-in-out",
              isSearchExpanded ? "w-64 md:w-80" : "w-9"
            )}
          >
            <button
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              className={cn(
                "absolute left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-muted",
                isSearchExpanded ? "text-muted-foreground" : "text-foreground border"
              )}
            >
              <Search className="h-4 w-4" />
            </button>
            <Input
              type="search"
              placeholder="Cari..."
              className={cn(
                "h-9 w-full rounded-full bg-muted/50 transition-all duration-300 focus:bg-background focus:ring-primary",
                isSearchExpanded ? "pl-10 pr-4 opacity-100 visible" : "pl-0 pr-0 opacity-0 invisible"
              )}
              autoFocus={isSearchExpanded}
            />
          </div>
          
          <nav className="flex items-center gap-2">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          ref={ref as any}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
