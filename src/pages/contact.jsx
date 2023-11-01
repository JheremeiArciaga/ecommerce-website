import React from "react";

const contact = () => {
  return (
    <>
      <section className="contact-wrapper p-5 mb-5">
        <div className="container-xxl">
          <div className="row"></div>
        </div>
      </section>

      <div className="contact-wrapper-details p-3 p-md-5 p-lg-5">
        <div className="container-xxl">
          <div className="row text-center align-items-center">
            <div className="col-lg-6 col-md-12 p-3">
              <div className="map card m-auto embed-responsive embed-responsive-16by9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73653.94189754016!2d120.99024997031871!3d14.020470665400454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd7388d0c3640d%3A0xc50ce4d4abd98d25!2sTaal%20Volcano!5e0!3m2!1sen!2sph!4v1691220997938!5m2!1sen!2sph"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card p-3">
                <h2 className="footer-title mb-3">
                  <b>Contact Us</b>
                </h2>
                <p className="mb-2">
                  <b>Address:</b> Brgy Tubig Tubig Baha Sampaguita{" "}
                </p>
                <p className="mb-2">
                  <b>Phone:</b>{" "}
                  <a className="footer-tel" href="tel:+1234567890">
                    Call us at (+63) 0923423423
                  </a>
                </p>
                <p className="mb-4">
                  <b>Hours:</b> From 8 a.m To 6 p.m
                </p>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  quos iusto rerum architecto a eaque consequuntur impedit!
                  Harum earum iste, suscipit soluta, culpa necessitatibus quia
                  sit nulla doloremque officia cum. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Velit hic veniam unde numquam in
                  ullam laudantium odit explicabo itaque! Voluptate similique,
                  accusantium consequatur provident soluta quaerat maxime
                  adipisci vero sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="form p-3 p-sm-5 p-lg-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center">
              <div className="card col-12 col-lg-6 p-3 p-lg-5">
                <div className="text-center mb-3">
                  <h2>Send Us A Message</h2>
                </div>
                <div className="col-12 d-flex mb-3">
                  <div className="col-6 p-2">
                    <input
                      type="text"
                      className="form-control text-start p-2"
                      placeholder="First Name"
                      aria-label="Enter First Name"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <div className="col-6 p-2">
                    <input
                      type="text"
                      className="form-control text-start p-2"
                      placeholder="Last Name"
                      aria-label="Enter Second Name"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </div>
                <div className="p-2 mb-3">
                  <input
                    type="email"
                    className="form-control text-start p-2"
                    placeholder="Enter a valid address"
                    aria-label="First Name"
                    aria-describedby="basic-addon2"
                  />
                </div>

                <div className=" p-2 mb-4">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    rows={4}
                  ></textarea>
                </div>
                <button type="submit" className=" button-deals p-3">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
