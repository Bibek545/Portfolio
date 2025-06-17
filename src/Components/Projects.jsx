import React from 'react'
import { icons }  from './Icons'
import Title from './Title'

const Projects = () => {
  return (
    <div>
          <section id="projects">
        <div className="container">
           <Title title="My projects"/>
  

          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
            {/* Project 1 */}
            <div className="col">
              <div className="card h-100">
                <img
                  src={icons.myDC}
                  className="card-img-top"
                  alt="React Digital Clock"
                />
                <div className="card-body">
                  <h5 className="card-title">React Digital Clock</h5>
                  <p className="card-text">
                    Simple digital clock built with React using useEffect for
                    real-time updates.
                  </p>
                  <a
                    href="https://digital-clock-react-rho.vercel.app/"
                    className="btn btn-primary"
                  >
                    View Live App
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col">
              <div className="card h-100">
                <img
                  src={icons.ntdl}
                  className="card-img-top"
                  alt="Not To Do List"
                />
                <div className="card-body">
                  <h5 className="card-title">Not To Do List</h5>
                  <p className="card-text">
                    Not to do list made using HTML, CSS, JS, React, Bootstrap.
                  </p>
                  <a
                    href="https://ntdl-k7lndwr9d-bibeks-projects-f59c395a.vercel.app/"
                    className="btn btn-primary"
                  >
                    View Live App
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col">
              <div className="card h-100">
                <img
                  src={icons.calculator}
                  className="card-img-top"
                  alt="Calculator"
                />
                <div className="card-body">
                  <h5 className="card-title">Calculator</h5>
                  <p className="card-text">
                    Simple calculator made using HTML, CSS, JS, Bootstrap,
                    React.
                  </p>
                  <a
                    href="https://react-calculator-gamma-flame.vercel.app/"
                    className="btn btn-primary"
                  >
                    View Live App
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="col">
              <div className="card h-100">
                <img
                  src={icons.colorPicker}
                  className="card-img-top"
                  alt="Color Picker"
                />
                <div className="card-body">
                  <h5 className="card-title">Color Selector</h5>
                  <p className="card-text">
                    Simple color selector page made using React.
                  </p>
                  <a
                    href="https://color-picker-react-three.vercel.app/"
                    className="btn btn-primary"
                  >
                    View Live App
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="col">
              <div className="card h-100">
                <img
                  src={icons.movieWorld}
                  className="card-img-top"
                  alt="Movie World"
                />
                <div className="card-body">
                  <h5 className="card-title">Movie World</h5>
                  <p className="card-text">
                    Simple movie browsing website built with React and OMDB API.
                  </p>
                  <a
                    href="https://movie-world-lake.vercel.app/"
                    className="btn btn-primary"
                  >
                    View Live App
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="col">
              <div className="card h-100">
                <img src={icons.quiz} className="card-img-top" alt="Quiz App" />
                <div className="card-body">
                  <h5 className="card-title">Quiz Game</h5>
                  <p className="card-text">
                    A simple quiz game made using HTML, CSS, JS.
                  </p>
                  <a
                    href="https://bibek545.github.io/quiz-app/"
                    className="btn btn-primary"
                  >
                    View Live App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
