import Nav from "@/components/Nav";
import SocialNetworks from "@/components/SocialNetworks";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <main>
      <Nav />
      <SocialNetworks />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </main>
  );
}
