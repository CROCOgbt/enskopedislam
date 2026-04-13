"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, Search, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import { Input } from "@/components/ui/Input";
import { ModeToggle } from "@/components/ModeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";

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
];

export default function Navbar() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false); // untuk desktop
  const [showMobileSearch, setShowMobileSearch] = React.useState(false); // untuk mobile
  const searchRef = React.useRef<HTMLDivElement>(null);
  const mobileSearchRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        setIsVisible(true);
      } else if (currentScrollPos > 100) {
        setIsVisible(false);
        setIsSearchExpanded(false);
        setShowMobileSearch(false); // sembunyikan search saat scroll
      }
      setPrevScrollPos(currentScrollPos);
    };

    const handleClickOutside = (event: MouseEvent) => {
      // untuk desktop search
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchExpanded(false);
      }
      // untuk mobile search
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target as Node)
      ) {
        setShowMobileSearch(false);
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
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b bg-background transition-all duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Desktop: Logo + Menu */}
        <div className="hidden items-center gap-6 lg:flex lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <span className="text-lg font-bold">E</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">
              Ensiklopedia Islam
            </span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "hover:text-primary transition-colors",
                  )}
                >
                  <Link href="/">Beranda</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-primary transition-colors">
                  Eksplorasi
                </NavigationMenuTrigger>
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
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "hover:text-primary transition-colors",
                  )}
                >
                  <Link href="/tentang">Tentang Kami</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile: Hamburger, Title, Search Icon */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="flex h-9 w-9 items-center justify-center  text-foreground transition-colors hover:bg-muted"
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              {/* Sidebar dengan nuansa islami */}
              <div className="relative h-full bg-background">
                {/* Motif dekoratif islami (pattern halus) */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0 L40 40 M40 0 L0 40' stroke='%23000000' stroke-width='1' opacity='0.2' /%3E%3C/svg%3E")`,
                  }}
                />
                <div className="relative z-10 flex flex-col h-full p-4">
                  {/* Header Sidebar */}
                  <div className="mb-6 flex items-center gap-2 border-b pb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <span className="text-lg font-bold">E</span>
                    </div>
                    <span className="font-semibold text-primary">
                      Ensiklopedia Islam
                    </span>
                  </div>

                  {/* Menu Navigasi */}
                  <nav className="flex-1 space-y-1">
                    <Link
                      href="/"
                      className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      Beranda
                    </Link>
                    <div className="space-y-1">
                      <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Eksplorasi
                      </p>
                      {components.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/tentang"
                      className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      Tentang Kami
                    </Link>
                  </nav>

                  {/* Dark Mode Toggle di Sidebar */}
                  <div className="mt-auto border-t pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Tema</span>
                      <ModeToggle />
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Judul di tengah (mobile) */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-primary"
          >
            Ensiklopedia Islam
          </Link>

          {/* Ikon pencarian di kanan (mobile) - toggle search bar di bawah */}
          <button
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="flex h-9 w-9 items-center justify-center bold text-foreground transition-colors hover:bg-muted"
            aria-label="Cari"
          >
            <Search className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Search Bar (muncul di bawah navbar) */}
        {showMobileSearch && (
          <div
            ref={mobileSearchRef}
            className="absolute top-full left-0 w-full px-4 pt-2 pb-4 bg-transparent lg:hidden"
          >
            <div className="relative mx-auto max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

              <Input
                type="text"
                placeholder="Cari artikel..."
                className="w-full bg-background  border pl-10 pr-10 h-11 rounded-sm  focus:border-primary focus:ring-1 focus:ring-primary"
              />

              <button
                onClick={() => setShowMobileSearch(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Tutup pencarian"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Desktop: Search + ModeToggle */}
        <div className="hidden items-center justify-end gap-4 lg:flex">
          <div
            ref={searchRef}
            className={cn(
              "relative flex items-center transition-all duration-300 ease-in-out",
              isSearchExpanded ? "w-64 md:w-80" : "w-9",
            )}
          >
            <button
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              className={cn(
                "absolute left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-muted",
                isSearchExpanded
                  ? "text-muted-foreground"
                  : "text-foreground border",
              )}
            >
              <Search className="h-4 w-4" />
            </button>
            <Input
              type="search"
              placeholder="Cari..."
              className={cn(
                "h-9 w-full rounded-full bg-muted/50 transition-all duration-300 focus:bg-background focus:ring-primary",
                isSearchExpanded
                  ? "pl-10 pr-4 opacity-100 visible"
                  : "pl-0 pr-0 opacity-0 invisible",
              )}
              autoFocus={isSearchExpanded}
            />
          </div>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
