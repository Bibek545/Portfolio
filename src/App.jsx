import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AnimationSection from "./Components/AnimationSection";
import BackToTop from "./Components/BackToTop";

export default function App() {
  return (
    <div className="bg-white text-black">
      <NavBar />

      {/* If your NavBar is fixed, keep a spacer. Remove if not fixed. */}
      {/* <div className="h-16" /> */}

      <main className="space-y-20">
        {/* Home */}
        <AnimationSection>
          <Home />
        </AnimationSection>

        {/* Intro */}
        {/* <AnimationSection>
          <Intro />
        </AnimationSection> */}

        {/* Projects */}
        <AnimationSection>
          <Projects />
        </AnimationSection>

        {/* Skills */}
        <AnimationSection>
          <Skills />
        </AnimationSection>

        {/* Contact */}
        <AnimationSection>
          <Contact />
        </AnimationSection>
      </main>

      <Footer />
       <BackToTop threshold={300} />
    </div>
  );
}
