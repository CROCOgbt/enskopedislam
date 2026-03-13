import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  BookOpen,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  eksplorasi: [
    { title: "Sejarah Islam", href: "/sejarah" },
    { title: "Tokoh Muslim", href: "/tokoh" },
    { title: "Ensiklopedia", href: "/ensiklopedia" },
  ],
  informasi: [
    { title: "Tentang Kami", href: "/tentang" },
    { title: "Pusat Bantuan", href: "/help" },
    { title: "Kebijakan Privasi", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t bg-muted/20 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-12">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6 flex flex-col items-center text-center">
            <Link href="/" className="flex items-center space-x-2 justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <BookOpen className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-primary">
                Enskoped Islam
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-7 text-muted-foreground">
              Platform pengetahuan Islam digital yang komprehensif untuk generasi masa kini.
            </p>
            <div className="flex space-x-5 justify-center">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-1 text-center">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Eksplorasi</h3>
              <ul className="mt-6 space-y-4">
                {footerLinks.eksplorasi.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary block">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Informasi</h3>
              <ul className="mt-6 space-y-4">
                {footerLinks.informasi.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary block">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6 flex flex-col items-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm text-muted-foreground justify-center">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@enskopedislam.com</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground justify-center">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground justify-center">
                <Phone className="h-4 w-4 text-primary" />
                <span>+62 812-3456-7890</span>
              </li>
            </ul>
          </div>

        </div>

        <Separator className="mt-16 mb-8 opacity-50" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Enskoped Islam. Semua hak cipta dilindungi.
          </p>
          <div className="flex space-x-6 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            <Link href="/terms" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Kebijakan Privasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
