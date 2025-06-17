import React from 'react'

const Intro = () => {
  return (
    <div>
            <section id="into">
              <div className="introduction flex-row align-items-center ">
                <h6>Introduction</h6>
                <h1>About Me</h1>
                <p className="pe-5">
                  I am Bibek Hamal, a passionate and detail-oriented Full Stack
                  Developer specializing in the MERN stack (MongoDB, Express.js,
                  React, and Node.js). Recently graduated with a degree in Information
                  Technology,
                  <br />I have a solid foundation in software development and a strong
                  enthusiasm for building scalable, user-friendly applications. During
                  my academic journey, I honed my skills through hands-on projects,
                  coursework, and self-directed learning. I am currently expanding my
                  expertise by learning Java, further diversifying my technical skill
                  set. My projects reflect my ability to solve real-world problems,
                  write clean and efficient code, and adapt to new technologies
                  quickly. As a fresh graduate, I bring a fresh perspective, a hunger
                  for learning, and a commitment to continuous improvement. I am eager
                  to contribute to innovative projects, collaborate with experienced
                  professionals, and grow as a developer in a dynamic and challenging
                  environment.
                </p>
                <button
                  type="button"
                  className="btn btn-warning mt-3 py-3 px-5 rounded-pill"
                >
                  <a className="nav-link" href="#contact">
                    Contact Me
                  </a>
                </button>
                <button
                  type="button"
                  className="btn btn-warning mt-3 py-3 px-5 rounded-pill"
                >
                  Download CV
                </button>
              </div>
            </section>
    </div>
  )
}

export default Intro
