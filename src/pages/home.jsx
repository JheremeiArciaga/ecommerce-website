import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero";
import FeaturedProducts from "../components/featuredProducts";
import NewArrival from "../components/newArrival";
import img1 from "../assets/images/banner/beige1.png";
import img2 from "../assets/images/banner/beige2.png";
import Testimonial from "../components/testimonial";
import Img from "../components/Imge";


const home = () => {
  return (
    <>
      <section className="banner mb-3 ">
        <div className="container-xxl">
          <div className="row ">
            
            <div className="banner-details p-md-5 d-flex flex-column   justify-content-center ">
              <div className="back-details">
              <span className="shadow-lg  p-3 d-sm-none d-md-inline d-none ">
                {" "}
                Trade in offer!!{" "}
              </span>
              <h1 className="mt-4 d-none d-sm-none d-md-flex">Best Value Deals</h1>
              <h2 className="d-sm-none d-none d-md-flex">On All Products</h2>
              <p className="p-2 mb-3 d-none d-sm-none d-md-flex">Save more with Precious Bale</p>
              <Link to={'/shop'} className="button-link mt-5 ms-sm-2">Shop Now</Link>
            </div>
          </div>
        </div>
        </div>
        
      </section>
      <Hero />

      <section className="featured-products p-1 p-lg-5 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1>Our Featured Products</h1>
              <p>All Weather Modern Design</p>
            </div>
            <FeaturedProducts />
          </div>
        </div>
      </section>
      <Link to={'/shop'}> 
      <section  className="repair  ">
      </section>
      </Link>

      <section className="new-products p-md-5 py-5 p-1">
        <div className="container-xxl">
          <div className="">
            <div className="text-center">
              <h1>New Arrivals</h1>
              <p className="mb-5">Your Best Designer Outfits</p>
            </div>
            <NewArrival />
          </div>
        </div>
      </section>

      <section className="new-products px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center text-md-center">
              <h1 className="mx-0 text-start">Precious App Benefits</h1>
          
            </div>
       
          </div>
        </div>
      </section>

      <section className="hot-deals p-3 p-md-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="card m-auto mb-3 text-md-start text-sm-center">
                <div className="row g-0">
                  <div className="col-md-4 ">
                    <Img
                      src={img1}
                      className="img-fluid rounded-start p-sm-2 p-md-2 deliver"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <div className="card-body p-lg-5 align-items-center ">
                      <h5 className="card-title px-2">Appordable Delivery</h5>
                      <hr />
                      <h2 className="card-text mb-2"> <strong>Just Wait at Home</strong> </h2>
                      <p className="card-text mb-2 mx-3">
                        <small className="text-body-secondary ">
                          The latest best collection in our closet
                          Feel Cute with our outfits Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet 
                        </small>
                      </p>
                      <Link to="blog">
                        <button className="button-deals m-2">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 d-flex col-lg-12">
              <div className="card w-100 height-100 m-auto mb-3">
                <div className="row g-0">
                  <div className="col-md-4 ">
                    <Img
                      src={img2}
                      className="img-fluid rounded-start p-sm-2 p-md-2 deliver"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-sm-center text-md-start w-10 p-lg-5">
                      <h5 className="card-title px-2">Care About You</h5>
                      <hr />
                      <h2 className="card-text mb-2"><strong>NEXT DAY HOME DELIVERY</strong></h2>
                      <p className="card-text mb-2 mx-3">
                        <small className="text-body-secondary ">
                        


Get your orders faster than before. UNIQLO now offers Next Day Home Delivery within Metro Manila!
                        </small>
                      </p>
                      <Link to="blog">
                        <button className="button-deals m-2">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 
       
       
           
              
          
          <Testimonial />
     
  


 
    </>
  );
};

export default home;
