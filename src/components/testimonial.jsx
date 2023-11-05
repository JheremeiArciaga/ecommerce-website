import React from "react";
import blog1 from "../assets/images/blog/blog-1.webp";
import blog2 from "../assets/images/blog/blog5.webp";
import blog3 from "../assets/images/blog/blog-3.webp";
import blog4 from "../assets/images/blog/blog-4.webp";
import { Link } from "react-router-dom";
import Img from "./Imge";

const testimonial = () => {
  return (
    <>
      <section className="blogs p-2 p-md-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="mb-1">What our customers say...</h1>
              <p className="mb-5">
                Our customers never miss a bit on providing feedback
              </p>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <Img
                  src={blog1}
                  className="card-img-topping img-fluid w-100 "
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    The search features on this website are amazing! I was able
                    to narrow down my choices quickly and easily.
                  </p>
                  <Link to="about">
                    <button
                      className="mt-4"
                      aria-label="learn more about how our search features work"
                    >
                      learn more
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <Img
                  src={blog2}
                  className="card-img-top img-fluid w-100"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    The customer support on this website is top-notch! They were
                    able to answer all of my questions.
                  </p>
                  <Link to="about">
                    <button className="mt-4">more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <Img
                  src={blog3}
                  className="card-img-top img-fluid w-100"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    I love shopping on this website! The prices are great, the
                    selection is wide, and the shipping is fast." - Sarah Green
                  </p>
                  <Link to="about">
                    <button className="mt-4">more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <Img
                  src={blog4}
                  className="card-img-top img-fluid w-100"
                  alt="blog"
                />
                <div className="card-body">
                  <p className="card-text">
                    This website is my go-to for all of my online shopping
                    needs. I always have a positive experience.
                  </p>
                  <Link to="about">
                    <button className="mt-4">more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default testimonial;
