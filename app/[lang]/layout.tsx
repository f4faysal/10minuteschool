import Footer from "@/components/layout/footer";
import LanguageSwitcher from "@/components/language-switcher";
import Navbar from "@/components/layout/navbar";
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
    <>
      <Navbar lang={lang} />
      {children}
      <Footer />
    </>
  );
}
