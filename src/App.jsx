import './App.css'

import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AnimationSection from './Components/AnimationSection';


function App() {


  return (
    <>
       <NavBar />
      <hr />

      {/* <!-- This is home section  --> */}
       <AnimationSection> 
       <Home />
       </AnimationSection>
      {/* <!-- This is my introduction section --> */}

      <AnimationSection>
       <Intro />
       </AnimationSection>
      {/* <!-- This is my project section --> */}
      <AnimationSection>
      <Projects/>
      </AnimationSection>

      {/* <!-- This is my skill section --> */}
       <AnimationSection> 
       <Skills />
       </AnimationSection>

      <section></section>
      {/* <!-- contact section starts --> */}
      <AnimationSection>
       <Contact />
      </AnimationSection>
      
      {/* <!-- contact section ends here --> */}

      {/* <!-- now we will make back to top button when user click on it it will be redirected to top page  --> */}
       <Footer/>
    </>
  );
};

export default App;
