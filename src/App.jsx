
import './App.css'

function App() {


  return (
    <>
        <div className="wrapper">
         <section id="nav" className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary p-10">
                <div className="container-fluid p-3 bg-white">
                  <a className="navbar-brand ms-5"  href="#"><h1>Bibek Hamal</h1></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                      <li className="nav-item me">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#contact">Contacts</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#socials">Socials</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

        </section>
        </div>
        <hr />

        {/* <!-- This is home section  --> */}

         <section id="home" className="d-flex justify-content-center align-items-center pt-5 pb-5 bg-white">
      <div className="home-section flex-column align-items-center ms-5">
        <div className="home-container d-flex justify-content-center pl">
          <div className="text-center py-5 bg-white">
            <img src="./src/bibek.png" className="custom-img img-fluid" alt="bibek"/>
            <p>Hi, Welcome to My Portfolio</p>
          </div>
        </div>

        <div className="name-container d-flex flex-column align-items-center">
          <h3>I am Bibek Hamal</h3>
          <h1>Full Stack Developer</h1>
          <p>Keep scrolling to find out more about who I am and what I do.</p>
        </div>

      </div>


    </section>
    {/* <!-- This is my introduction section --> */}

    <section id="into">
      <div className="introduction flex-row align-items-center ">
        <h6>Introduction</h6>
        <h1>About Me</h1>
        <p className="pe-5">I am Bibek Hamal, a passionate and detail-oriented Full Stack Developer specializing in the MERN
          stack (MongoDB, Express.js, React, and Node.js). Recently graduated with a degree in Information
          Technology,<br />
          I have a solid foundation in software development and a strong enthusiasm for building scalable, user-friendly
          applications. During my academic journey, I honed my skills through hands-on projects, coursework, and
          self-directed learning. I am currently expanding my expertise by learning Java, further diversifying my
          technical skill set.
          My projects reflect my ability to solve real-world problems, write clean and efficient code, and adapt to new
          technologies quickly. As a fresh graduate, I bring a fresh perspective, a hunger for learning, and a
          commitment to continuous improvement. I am eager to contribute to innovative projects, collaborate with
          experienced professionals, and grow as a developer in a dynamic and challenging environment.</p>
        <button type="button" className="btn btn-warning mt-3 py-3 px-5 rounded-pill"><a className="nav-link" href="#contact">Contact Me</a></button>
        <button type="button" className="btn btn-warning mt-3 py-3 px-5 rounded-pill">Download CV</button>
      </div>

    </section>

        {/* <!-- This is my project section --> */}
         <section id="projects">
           <div className="container">
             <div className="text-center pt-3">
               <h4>Here, are my projects</h4>
             </div>
             <div className="row pt-2" >
                  <div className="skill-card col 4">
                    <div className="card" style="width: 18rem;">
                      <img src="./src/myDC.png" className="card-img-top" alt="myDC"/>
                      <div className="card-body">
                        <h5 className="card-title">React Digital Clock</h5>
                        <p className="card-text" id="card1-text">Simple digital clock built with React using useEffect for real-time updates..</p>
                        <a href="https://digital-clock-react-rho.vercel.app/" className="btn btn-primary">View Live App</a>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col 4">
                <div className="skill-card">
                  <div className="card" style="width: 18rem;">
                    <img src="./src/NTDL.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Not T0 Do List</h5>
                      <p className="card-text">Not to do list made using HTML,CSS,JS,REACT,BOOTSTRAP</p>
                      <a href="https://ntdl-k7lndwr9d-bibeks-projects-f59c395a.vercel.app/" className="btn btn-primary">View Live App</a>
                    </div>
                  </div>
                </div>
              
            </div>
            </div>

            <div className="col 4">
              <div className="skill-card">
                <div className="card" style="width: 18rem;">
                  <img src="./src/calculator.png" className="card-img-top" alt="calculator"/>
                  <div className="card-body">
                    <h5 className="card-title">Calculator</h5>
                    <p className="card-text">Simple calculator made using HTML,CSS,JS,BOOTSTRAP,REACT</p>
                    <a href="https://react-calculator-gamma-flame.vercel.app/" className="btn btn-primary">View Live App</a>
                  </div>
                </div>
              </div>
            
            </div>


            {/* <!-- second row --> */}

            <div className="row pt-5" >
            <div className="skill-card col 4">
              <div className="card" style="width: 18rem;">
                <img src="./src/color-picker.png" className="card-img-top" alt="color picker"/>
                <div className="card-body">
                  <h5 className="card-title">Color Selector</h5>
                  <p className="card-text">Simple color selector page made using REACT.</p>
                  <a href="https://color-picker-react-three.vercel.app/" className="btn btn-primary">View Live App</a>
                </div>
              </div>
            </div>

        <div className="col 4">
          <div className="skill-card">
            <div className="card" style="width: 18rem;">
              <img src="./src/movie world.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Movie World</h5>
                <p className="card-text">Simple movie browsing website</p>
                <a href="https://movie-world-lake.vercel.app/" className="btn btn-primary">View Live App</a>
              </div>
            </div>
          </div>
        
        </div>

      <div className="col 4">
        <div className="skill-card">
          <div className="card" style="width: 18rem;">
            <img src="./src/quiz.png" className="card-img-top" alt="quiz"/>
            <div className="card-body">
              <h5 className="card-title">Quiz game</h5>
              <p className="card-text">A simple quiz game made using HTML,CSS, JS.</p>
              <a href="https://bibek545.github.io/quiz-app/" className="btn btn-primary">View Live App</a>
            </div>
          </div>
        </div>
      
      </div>


            </div>


         
          </section>

         {/* <!-- This is my skill section --> */}
          <section id="skills" className="bg-white">
            <div className="" >
                <h1 className="text-center mt-5">Skills</h1>
                <p className="text-center">I have hands-on experience with these technologies and tools, and continue to explore many more. <br /> My passion for learning keeps me constantly expanding my skill set.</p>

            </div>
            <div className="img-icon gap-2 mt-5 d-flex flex-wrap justify-content-center">
                <img src="./src/HTML.png" className="img-thumbnail" alt="Html"/>
                <img src="./src/CSS3.png" className="img-thumbnail" alt="css"/>
                <img src="./src/JS.png" className="img-thumbnail" alt="js"/>
                <img src="./src/REACT.png" className="img-thumbnail" alt="react"/>
                <img src="./src/mongodb.png" className="img-thumbnail" alt="mongodb"/>
                <img src="./src/nodeJs.png" className="img-thumbnail" alt="node"/>
                <img src="./src/github.png" className="img-thumbnail" alt="github"/>
                <img src="./src/expressJs.png" className="img-thumbnail" alt="express"/>
                <img src="./src/java.png" className="img-thumbnail" alt="java"/>
                <img src="./src/vsCode.png" className="img-thumbnail" alt="vs"/>
            </div>

          </section>

          <section></section>
             {/* <!-- contact section starts --> */}
    <section className="contact py-5 p-5 m-5" id="contact">
        <div className="heading text-center">
          <small>Get in Touch</small>
          <h3>Any Questions? Feel Free to Contact</h3>
        </div>
        <div className="row justify-content-evenly mt-5">
          <div className="col-md-5 col-10 contact-details" data-aos="slide-right">
            <div className="row justify-content-evenly">
              {/* <!-- <div className="col-1"> */}
                <i className="bi bi-geo-alt-fill"></i>
              </div> 
              <div className="col-11">
                
                <p> <i className="fa-solid fa-location-dot"> </i> Lidcombe, 2141, Australia</p>
              </div>
            </div>
            <div className="row justify-content-evenly">
              {/* <!-- <div className="col-1"> */}
                <i className="bi bi-telephone-fill"></i>
              </div> 
              <div className="col-11">
                <p><i className="fa-solid fa-phone"></i> +61 123456789</p>
              </div>
            </div>
            <div className="row justify-content-evenly">
              <div>
                <i className="bi bi-send-fill"></i>
              </div> 
              <div className="col-11">
                <p><i className="fa-solid fa-envelope"></i> fullstackBibek@gmail.com</p>
              </div>
            </div>
          
          <div className="col-md-5 col-10 mt-3 mt-md-0" data-aos="slide-left">
            <div className="contact-form">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Mobile No."
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Message"
                  rows="5"
                ></textarea>
              </div>
               <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill ">
                Submit
               </button>
            </div>
          </div>
      </section>
      {/* <!-- contact section ends here --> */}
  
        {/* <!-- now we will make back to top button when user click on it it will be redirected to top page  --> */}
      <section>
              <div className="arrow-up">
        <button
        type="button"
        className="btn btn-floating btn-lg rounded-pill bg-white me-auto "
        id="btn-back-to-top"
      >
      <a className="nav-link" href="#home"><i className="fa-solid fa-arrow-up fa-lg"></i></a>
      </button>
      </div>

      <footer id="footer">
          <div className="fonts pt-3">       
           <a href="https://github.com/Bibek545"><i className="fa-brands fa-linkedin fa-lg"></i></a>
           <a href="https://www.linkedin.com/in/bibek-hamal-b231291a4/"><i className="fa-brands fa-github"></i></a>
           <i className="fa-brands fa-facebook"></i>
           <i className="fa-brands fa-whatsapp"></i>
           <i className="fa-brands fa-instagram"></i>
          
          </div>
        <hr />
         <div className="footer text-center pt-2">
           <h5>| copyright@bibekhamal2025 | Bibek Hamal | </h5>
           
         </div>
      </footer>
    </section>

  </>
  )
};

export default App;
