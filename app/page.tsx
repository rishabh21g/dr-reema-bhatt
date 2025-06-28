import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen max-w-7xl mx-auto py-5 px-8 ">
        <Header />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
