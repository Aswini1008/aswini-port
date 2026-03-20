import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full overflow-x-hidden bg-slate-900 antialiased">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default Index;
