import Footer from "@/components/layout/footer";
import LanguageSwitcher from "@/components/language-switcher";
import { BookOpen } from "lucide-react";
import Navbar from "@/components/layout/navbar";

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
      <Navbar lang={lang} />
      {children}
      <Footer />
    </main>
  );
}
