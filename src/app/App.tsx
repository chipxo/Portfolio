import { ThemeProvider } from "../features/theme/theme-provider";
import Header from "../components/header/Header";
import About from "@/components/about/About";
import ParticlesBg from "@/components/particleBg/ParticlesBg";
import Home from "@/components/home/Home";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ThemeToggle from "@/features/theme/ThemeToggle";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
      <ParticlesBg />
    </ThemeProvider>
  );
};

export default App;
