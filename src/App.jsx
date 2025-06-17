import './App.css'
import { icons } from './Components/icons';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {


  return (
    <>
       <NavBar />
      <hr />

      {/* <!-- This is home section  --> */}

       <Home />
      {/* <!-- This is my introduction section --> */}


       <Intro />
      {/* <!-- This is my project section --> */}
      <Projects/>

      {/* <!-- This is my skill section --> */}
       <Skills />

      <section></section>
      {/* <!-- contact section starts --> */}
      <Contact />
      {/* <!-- contact section ends here --> */}

      {/* <!-- now we will make back to top button when user click on it it will be redirected to top page  --> */}
       <Footer/>
    </>
  );
};

export default App;
