import './App.css'
// import { icons } from './assets/icons';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar';
import Home from './Home';
import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';


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
