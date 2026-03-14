"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, Search, History, Users, BookOpen, FileText, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const components: { title: string; href: string; description: string; icon: any }[] = [
  {
    title: "Sejarah Islam",
    href: "/sejarah",
    description: "Perjalanan peradaban Islam dari masa ke masa.",
    icon: History,
  },
  {
    title: "Tokoh Muslim",
    href: "/tokoh",
    description: "Pemikiran dan kontribusi tokoh besar Muslim.",
    icon: Users,
  },
  {
    title: "Ensiklopedia",
    href: "/ensiklopedia",
    description: "Kumpulan pengetahuan Islam yang komprehensif.",
    icon: BookOpen,
  },
  {
    title: "Artikel",
    href: "/artikel",
    description: "Baca artikel terbaru seputar dunia Islam.",
    icon: FileText,
  },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [showMobileSearch, setShowMobileSearch] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        setIsVisible(true);
      } else if (currentScrollPos > 100) {
        setIsVisible(false);
        setShowMobileSearch(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        {/* Desktop: Logo */}
        <div className="hidden items-center lg:flex">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="Ensiklopedia Islam Logo"
              width={32}
              height={32}
              className="rounded-lg shadow-sm"
            />
            <span className="text-xl font-bold tracking-tight text-primary">
              Ensiklopedia Islam
            </span>
          </Link>
        </div>

        {/* Desktop: Search Bar Center */}
        <div className="hidden flex-1 items-center justify-center px-8 lg:flex">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Cari artikel, tokoh, atau sejarah..."
              className="h-10 w-full rounded-full border bg-muted/50 pl-10 pr-4 text-sm transition-all focus:bg-background focus:ring-1 focus:ring-emerald-500/20"
            />
          </div>
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
                    <Image
                      src="/logo.jpg"
                      alt="Ensiklopedia Islam Logo"
                      width={32}
                      height={32}
                      className="rounded-lg shadow-sm"
                    />
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
                          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                        >
                          <item.icon className="h-4 w-4 text-emerald-600" />
                          {item.title}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/tentang"
                      className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      Tentang
                    </Link>
                    <Link
                      href="#kontak"
                      className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      Kontak
                    </Link>
                  </nav>

                  {/* Dark Mode & Language Toggle di Sidebar */}
                  <div className="mt-auto border-t pt-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Bahasa</span>
                      <LanguageToggle />
                    </div>
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
          {!showMobileSearch && (
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold tracking-tight text-primary"
            >
              <Image
                src="/logo.jpg"
                alt="Ensiklopedia Islam Logo"
                width={24}
                height={24}
                className="rounded-md"
              />
              Ensiklopedia Islam
            </Link>
          )}

          {/* Inline Search (mobile) */}
          {showMobileSearch && (
            <div className="flex-1 px-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  autoFocus
                  type="text"
                  placeholder="Cari..."
                  className="h-9 w-full rounded-full border bg-muted/50 pl-9 pr-8 text-sm focus:bg-background"
                  onBlur={() => setShowMobileSearch(false)}
                />
                <button
                  onClick={() => setShowMobileSearch(false)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Ikon pencarian di kanan (mobile) */}
          {!showMobileSearch && (
            <button
              onClick={() => setShowMobileSearch(true)}
              className="flex h-9 w-9 items-center justify-center bold text-foreground transition-colors hover:bg-muted"
              aria-label="Cari"
            >
              <Search className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Desktop: Navigation Menu */}
        <div className="hidden items-center justify-end lg:flex">
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
                  <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                      >
                        {component.description}
                      </ListItem>
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
                  <Link href="/tentang">Tentang</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "hover:text-primary transition-colors",
                  )}
                >
                  <Link href="#kontak">Kontak</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="ml-4 flex items-center gap-2 border-l pl-4">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon?: any }
>(({ className, title, children, icon: Icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || "#"}
          className={cn(
            "block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-emerald-50 hover:text-emerald-700 focus:bg-emerald-50 focus:text-emerald-700",
            className,
          )}
          {...props}
        >
          <div className="flex items-start gap-3">
            {Icon && (
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-emerald-100/50 text-emerald-600">
                <Icon className="h-5 w-5" />
              </div>
            )}
            <div className="space-y-1">
              <div className="text-sm font-bold leading-none">{title}</div>
              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
