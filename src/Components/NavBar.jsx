import React from 'react'

const NavBar = () => {
  return (
    <div>
          <div className="wrapper">
              <section id="nav" className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary p-10">
                  <div className="container-fluid p-3 bg-white">
                    <a className="navbar-brand ms-5" href="#">
                      <h1>Bibek Hamal</h1>
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                        <li className="nav-item me">
                          <a className="nav-link active" aria-current="page" href="#">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#projects">
                            Projects
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#skills">
                            Skills
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#contact">
                            Contacts
                          </a>
                        </li>
                        {/* <li className="nav-item">
                          <a className="nav-link" href="#socials">
                            Socials
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </nav>
              </section>
            </div>
    </div>
  )
}

export default NavBar
