import React from "react";

import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import google from "../assets/images/pay/play.jpg";
import app from "../assets/images/pay/app.jpg";
import pay from "../assets/images/pay/pay.png";

const footer = () => {
  return (
    <>
      <section className="news-letter p-3 p-md-5">
        <div className="container-xxl">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="d-flex flex-column align-items-center">
                <h2 className="mb-3 m-0 text-white">
                  Join our newsletter & 20% off
                </h2>
                <h5 className="">
                  to get updates On All{" "}
                  <Link className="bg-dark text-white ms-2 p-2">
                    Special Offers
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col-md-5 details d-flex flex-column  justify-content-center">
              <div className="input-group">
                <input
                  type="text"
                  id="news-input"
                  className="form-control text-start"
                  placeholder="Enter Email"
                  aria-label="@example.com"
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text " id="basic-addon3">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer p-4">
        <div className="container-xxl">
          <div className="row justify-content-center justify-content-md-start">
            <div className="col-md-6 "></div>

            <hr className="mb-3 m-2" />
            <div className="col-md-4 col-lg-4 mb-4 mb-md-0">
              <h3 className="mb-4 mt-2">Contact us</h3>
              <div className="footer-details">
                <p className="mb-3">
                  <b>Address:</b> Balanbalunan brgy dyan sa tabi cavite
                </p>
                <p className="mb-3">
                  <b>Phone:</b>{" "}
                  <a href="tel:+1234567890" role="link" aria-label="Contact Number: ((+63) 093434523)">Call us at(+63) 093434523</a>
                </p>
                <p className="mb-5">
                  <b>Hours Open:</b> From 10 a.m To 6 p.m
                </p>
                <p className="mb-3">
                  <b>Follow Us</b>
                </p>

                <div className="col-4  social-icons gap-3 mb-3 d-flex justify-content-around">
                  <Link>
                    <BsTwitter className="fs-4 colorized" />
                  </Link>

                  <Link>
                    <BsInstagram className="fs-4 colorized" />
                  </Link>
                  <Link>
                    <BsFacebook className="fs-4 colorized" />
                  </Link>
                  <Link>
                    <BsLinkedin className="fs-4 colorized" />
                  </Link>
                  <Link>
                    <BsPinterest className="fs-4 colorized" />
                  </Link>
                  <Link>
                    <BsYoutube className="fs-4 colorized" />
                  </Link>
                  <Link>
                    <BsTiktok className="fs-4 colorized" />
                  </Link>
                </div>
              </div>
            </div>
            <div className=" col-md-2 col-lg-2 mb-3 mb-md-0">
              <h3 className="mb-4 mt-2"> About</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3">About Us</Link>
                <Link className="mb-3">Delivery</Link>
                <Link className="mb-3">Privacy Policy</Link>
                <Link className="mb-3">Tax Policy</Link>
                <Link className="mb-3">Fee Policy</Link>
                <Link className="mb-3">Terms & Conditions</Link>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
              <h3 className="mb-4 mt-2">Account</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3">Profile</Link>
                <Link className="mb-3">View Cart</Link>
                <Link className="mb-3">My Orders</Link>
                <Link className="mb-3">My Wishlist</Link>
                <Link className="mb-3">Help</Link>
                <Link className="mb-3">Coupons</Link>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <h3 className="mb-3 mt-2">Install App</h3>
              <div className="footer-details">
                <p>Available On Google Play Services & App Store</p>
                <div className="pay d-flex ">
                  <div>
                    <Link>
                      <img
                        src={google}
                        alt="payment"
                        className="img-fluid px-1 p-xl-1 my-3"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link>
                      <img
                        src={app}
                        alt="eto"
                        className="img-fluid  px-1 p-xl-1 my-3"
                      />
                    </Link>
                  </div>
                </div>
                <p>We Acccept</p>
                <Link className="pay1">
                  <img src={pay} alt="payment"  />
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-3 col-md-5  mb-4 text-sm-center">
              <p>&copy; Developed by Jheremei Arciaga 2023</p>
            </div>
            <div className="col-12 col-lg-3 col-md-6 col-sm-12 d-flex justify-content-around">
              <Link className="text-black">Privacy Policy</Link>
              <Link className="text-black">Terms of Use</Link>
              <Link className="text-black">Contact Me</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
