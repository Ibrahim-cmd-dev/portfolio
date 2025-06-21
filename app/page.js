import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";


export default function Home() {
  return (
   <div>
        <Hero />
        <AboutMe />
        <Projects />
        <ContactSection />
   </div>
  );
}
