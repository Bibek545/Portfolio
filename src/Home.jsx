import React from 'react'
import { icons } from './assets/icons'

const Home = () => {
  return (
    <div>
          <section
        id="home"
        className="d-flex justify-content-center align-items-center pt-5 pb-5 bg-white"
      >
        <div className="home-section flex-column align-items-center ms-5">
          <div className="home-container d-flex justify-content-center pl">
            <div className="text-center py-5 bg-white">
              <img src={icons.bibek} className="custom-img" alt="bibek" />
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
    </div>
  )
}

export default Home
