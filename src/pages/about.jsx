import React from "react";
import a6 from "../assets/images/about/a6.webp";
import { Link } from "react-router-dom";
import vid from "../assets/images/about/1.mp4";
import img1 from "../assets/images/blog/blog-1.webp";
import img2 from "../assets/images/blog/blog5.webp";
import img3 from "../assets/images/blog/blog-3.webp";
import img4 from "../assets/images/blog/blog-4.webp";
import orders from "../assets/images/icons/icons1.png";
import orders1 from "../assets/images/icons/icons2.png";
import orders2 from "../assets/images/icons/icons3.png";
import orders3 from "../assets/images/icons/icons4.png";
import orders4 from "../assets/images/icons/icons5.png";
import orders5 from "../assets/images/icons/icons6.png";
import orders6 from "../assets/images/icons/icons7.png";
import orders7 from "../assets/images/icons/icons8.jpg";
import orders8 from "../assets/images/icons/icons9.png";
import orders9 from "../assets/images/icons/icons10.png";
import Marquee from "react-fast-marquee";
import Img from "../components/Imge";

const about = () => {
  return (
    <>
      <section className="about-wrapper  mb-3">
        <div className="container-xxl">
          <div className="row"></div>
        </div>
      </section>

      <section className="know-us p-5 mb-3">
        <div className="row">
          <div className="col-md-6">
            <Img src={a6} alt="" className="img-fluid p-2" />
          </div>
          <div className="col-md-6 d-flex flex-column  align-items-center justify-content-center ">
            <div className="mb-3">
              <h1>Who are We?</h1>
            </div>
            <div className="mb-3 card-text">
              <p className="text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum, voluptatibus maxime? Eaque qui veniam earum aliquam
                accusamus blanditiis harum explicabo ipsum. Cupiditate
                laudantium repudiandae vero facere est iusto ipsum magni. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Culpa ea
                earum, ut tempore sint, minima repellat magnam
              </p>
            </div>
            <div className="mt-5">
              <Link className="fs-3" to={"/contact"}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="download p-3">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="mb-4">
                <h2 className="text-center">
                  Download our{" "}
                  <Link className="fs-2">
                    <b>App</b>
                  </Link>
                </h2>
              </div>
              <div className=" mb-3">
                <video loop autoPlay muted src={vid}></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs p-3 p-sm-5">
        <div className="container-xxl">
          <div className="text-center mb-4 col-12">
            <h1>What our Customers Say</h1>
            <p className="mb-4"> Get To know what our trusted customers say</p>

            <div className="row row-cols-1 row-cols-2 row-cols-md-3">
              <div className=" p-1 p-sm-2">
                <div className="card blog-details-page mb-3 ">
                  <div className="">
                    <div className="">
                      <Img
                        src={img1}
                        alt=""
                        className="img-fluid card-img-topping w-100"
                      />
                    </div>
                    <div className="card-body  p-2 p-sm-4">
                      <span className="card-text">
                        <b className="font-title">Precious Sakalam </b>
                        <p className="my-3">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Rerum vel reprehenderit doloribus quas! Quidem
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" p-1 p-sm-2">
                <div className="card blog-details-page mb-3 ">
                  <div className="">
                    <div className="">
                      <Img
                        src={img2}
                        alt=""
                        className="img-fluid card-img-topping w-100"
                      />
                    </div>
                    <div className="card-body  p-2 p-sm-4">
                      <span className="card-text">
                        <b className="font-title">Precious Sakalam </b>
                        <p className="my-3">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Rerum vel reprehenderit doloribus quas! Quidem
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" p-1 p-sm-2">
                <div className="card blog-details-page mb-3 ">
                  <div className="">
                    <div className="">
                      <Img
                        src={img3}
                        alt=""
                        className="img-fluid card-img-topping w-100"
                      />
                    </div>
                    <div className="card-body  p-2 p-sm-4">
                      <span className="card-text">
                        <b className="font-title">Precious Sakalam </b>
                        <p className="my-3">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Rerum vel reprehenderit doloribus quas! Quidem
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-1 p-sm-2">
                <div className="card blog-details-page mb-3 ">
                  <div className="">
                    <div className="">
                      <Img
                        src={img4}
                        alt=""
                        className="img-fluid card-img-topping w-100"
                      />
                    </div>
                    <div className="card-body  p-2 p-sm-4">
                      <span className="card-text">
                        <b className="font-title">Precious Sakalam </b>
                        <p className="my-3">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Rerum vel reprehenderit doloribus quas! Quidem
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-1 p-sm-2">
                <div className="card blog-details-page mb-3 ">
                  <div className="">
                    <div className="">
                      <Img
                        src={img1}
                        alt=""
                        className="img-fluid card-img-topping w-100"
                      />
                    </div>
                    <div className="card-body  p-2 p-sm-4">
                      <span className="card-text">
                        <b className="font-title">Precious Sakalam </b>
                        <p className="my-3">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Rerum vel reprehenderit doloribus quas! Quidem
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-1 p-sm-2">
                <div className="card blog-details-page mb-3 ">
                  <div className="">
                    <div className="">
                      <Img
                        src={img2}
                        alt=""
                        className="img-fluid card-img-topping w-100"
                      />
                    </div>
                    <div className="card-body  p-2 p-sm-4">
                      <span className="card-text">
                        <b className="font-title">Precious Sakalam </b>
                        <p className="my-3">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Rerum vel reprehenderit doloribus quas! Quidem
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 p-3">
              <Marquee className="p-2 slide">
                <div className="card mx-3">
                  <img src={orders} alt="" className="img-fluid orders" />
                  <p className="card-text"></p>
                </div>
                <div className="card mx-3">
                  <img src={orders1} alt="" className="img-fluid" />
                  <p className="card-text"></p>
                </div>
                <div className="card mx-3">
                  <img src={orders2} alt="" className="img-fluid" />
                  <p className="card-text"></p>
                </div>
                <div className="card mx-3">
                  <img src={orders3} alt="" className="img-fluid" />
                  <p className="card-text"></p>
                </div>
                <div className="card mx-3">
                  <img src={orders4} alt="" className="img-fluid" />
                  <p className="card-text"></p>
                </div>
                <div className="card mx-3">
                  <img src={orders5} alt="" className="img-fluid" />
                  <p className="card-text"></p>
                </div>
                <div className="card mx-3">
                  <img src={orders6} alt="" className="img-fluid" />
                  <p className="card-text"></p>
                </div>
                <div className="card mx-3">
                  <img src={orders7} alt="" className="img-fluid" />
                  <p className="card-text"></p>
                </div>
                <div className="card mx-3">
                  <img src={orders8} alt="" className="img-fluid" />
                  <p className="card-text"></p>
                </div>
                <div className="card mx-3">
                  <img src={orders9} alt="" className="img-fluid" />
                  <p className="card-text"></p>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
