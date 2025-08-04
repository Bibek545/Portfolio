import React from 'react'

const Footer = () => {
  return (
    <div>
            <section>
        <div className="arrow-up">
          <button
            type="button"
            className="btn btn-floating btn-lg rounded-pill  me-auto "
            id="btn-back-to-top"
          >
            <a className="nav-link" href="#home">
              <i className="fa-solid fa-arrow-up fa-lg"></i>
            </a>
          </button>
        </div>

        <footer id="footer">
          <div className="fonts pt-3">
            <a href="https://www.linkedin.com/in/bibek-hamal-b231291a4/">
              <i className="icon fa-brands fa-linkedin fa-lg "></i>
            </a>
            <a href="https://github.com/Bibek545">
              <i className="icon fa-brands fa-github"></i>
            </a>

          </div>
          <hr />
          <div className="footer text-center pt-2">
            <h5>| copyright@bibekhamal2025 | Bibek Hamal | </h5>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default Footer
