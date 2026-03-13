import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enskoped Islam",
  description: "Enskoped Islam website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
