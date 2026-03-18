
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <main className="overflow-x-clip bg-slate-900 antialiased">
      <Toaster />
      <Header />
      <Hero />
      <About />
   
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
