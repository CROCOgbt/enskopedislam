"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageToggle() {
  const [lang, setLang] = React.useState<"id" | "en">("id");

  React.useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "en") {
      setLang("en");
    } else {
      setLang("id");
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex h-9 w-9 items-center justify-center rounded-md border text-foreground transition-colors hover:bg-muted">
          <Languages className="h-4 w-4" />
          <span className="sr-only">Ganti Bahasa</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLang("id")} className={lang === "id" ? "bg-accent" : ""}>
          🇮🇩 Indonesia
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("en")} className={lang === "en" ? "bg-accent" : ""}>
          🇺🇸 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
