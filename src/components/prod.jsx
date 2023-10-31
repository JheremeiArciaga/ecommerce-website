import React from "react";
import { ShopContext } from "./shopcontext";
import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Img from "./Imge";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const prod = (props) => {
  const { id, name, image, price, brand,sold } = props.data;
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  const notify = () =>
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 1000,
      draggable: true,
    });

  return (
    <>
      
      <div key={id} className="col mb-0 mb-sm-3 p-1 p-sm-3 mt-0">
        <div className="card h-100 m-auto ">
          <div className="p-1 p-sm-2">
            <Link
              to={"/details"}
              className="view-button "
              onClick={() => viewProductDetails(id)}
            >
              <img src={image} alt="" className="img-fluid card-img-top" />
            </Link>
            <div className="mt-sm-2 p-2 pt-3 p-sm-2 pb-sm-0 pb-0 elips fw-bold">
              {name}
            </div>
          </div>
          <div className="p-2 p-sm-1 pt-0  ">
            <div className="d-flex ps-1 ps-sm-2">
          <div className="flex-nowrap">
            <ReactStars 
              count={5}
             edit={false}
              value={3.5}
              size={17}
              activeColor="#FFB421"
              isHalf={true}
              
            />

            </div>
            <p className="sold fs-6 ps-1 m-0 ">
              <span className="elips text-secondary ">{sold}</span>
              </p>
              </div>
            <p className="price my-2 ps-1 ps-sm-2 mt-0">
              <span className="text-danger  fs-6">&#8369;</span> {price}{" "}
              <span className="text-secondary prices">
                {" "}
                &nbsp;<strike>{price * Math.round(1.5)}</strike>
              </span>
            </p>
            <div className="d-flex align-items-center justify-content-around mb-2 ">
              <div className="col-6 d-flex align-items-center justify-content-around d-none d-sm-flex ">
                <Link
                  to={"/details"}
                  className="view-button "
                  onClick={() => viewProductDetails(id)}
                >
                  {" "}
                  View Details
                </Link>
              </div>
              <div className="col-12 col-sm-6 d-flex align-items-center justify-content-around">
                <>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      addToCart(id);
                      notify();
                    }}
                  >
                    <button type="submit" className="add-btn">
                      Add To Cart {cartItemCount > 0}
                      {""}
                      {/* && `(${cartItemCount})` */}
                    </button>
                  </form>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default prod;
