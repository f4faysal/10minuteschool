import LanguageSwitcher from "@/components/language-switcher";
import { BookOpen } from "lucide-react";

export default async function webLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "bn" }>;
}) {
  const lang = (await params).lang || "en";
  return (
    <main>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-background/80 backdrop-blur-sm dark:border-slate-800/80">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-slate-800 dark:text-slate-200">
              IELTS Course
            </span>
          </div>
          <LanguageSwitcher currentLang={lang} />
        </div>
      </header>
      {children}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-gray-900">
        <div className="container mx-auto py-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} 10 Minute School. All rights
            reserved.
          </p>
          <p className="mt-2">Designed with passion for learning.</p>
        </div>
      </footer>
    </main>
  );
}
