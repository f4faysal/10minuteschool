"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface LanguageSwitcherProps {
  currentLang: "en" | "bn";
}

export default function LanguageSwitcher({
  currentLang,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (lang: "en" | "bn") => {
    const newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={currentLang === "en" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => handleLanguageChange("en")}
      >
        English
      </Button>
      <Button
        variant={currentLang === "bn" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => handleLanguageChange("bn")}
      >
        বাংলা
      </Button>
    </div>
  );
}
