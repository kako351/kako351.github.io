import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Career from "@/components/Career";
import Products from "@/components/Products";
import GitHub from "@/components/GitHub";
import Blog from "@/components/Blog";
import Talks from "@/components/Talks";
import TechBooks from "@/components/TechBooks";
import Business from "@/components/Business";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Career />
        <Products />
        <GitHub />
        <Blog />
        <Talks />
        <TechBooks />
        <Business />
      </main>
      <Footer />
    </>
  );
}
