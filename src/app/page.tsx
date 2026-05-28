import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import Philosophy from "@/components/sections/Philosophy";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Philosophy />
      <SelectedWork />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
