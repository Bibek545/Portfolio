import React from 'react'

const Contact = () => {
  return (
    <div>
           <section className="contact py-5 px-3" id="contact">
        <div className="container">
          <div className="heading text-center mb-5">
            <small>Get In Touch</small>
            <h3>
              <strong>Any Questions? Feel Free to Contact</strong>
            </h3>
          </div>

          <div className="row justify-content-center align-items-start">
            {/* Left Column - Contact Info */}
            <div className="col-md-5 mb-4">
              <p>
                <strong>Location:</strong> Lidcombe, 2141, Australia
              </p>
              <p>
                <strong>Phone:</strong> +61 123456789
              </p>
              <p>
                <strong>Email:</strong> fullstackBibek@gmail.com
              </p>
            </div>

            {/* Right Column - Contact Form */}
            <div className="col-md-7">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile No."
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
