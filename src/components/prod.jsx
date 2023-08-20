import React from "react";
import { ShopContext } from "./shopcontext";
import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Img from "./Imge";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const prod = (props) => {
  const { id, name, image, price, brand } = props.data;
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  const notify = () =>toast.success(`Added ${name} to cart`,{position:toast.POSITION.BOTTOM_CENTER,autoClose:1000});
 

  return (
    <>
      <div key={id} className="col mb-3">
        <div className="card h-100 m-auto">
          <div className="p-2">
            <Link
              to={"/details"}
              className="view-button "
              onClick={() => viewProductDetails(id)}
            >
              <img src={image} alt="" className="img-fluid card-img-top" />
            </Link>
          </div>
          <div className="card-details p-3">
            <ReactStars
              count={5}
              edit={false}
              value={4}
              size={24}
              activeColor="#cca27e"
            />
            <p className="price my-2">
              <span className="text-black fs-5">&#8369;</span> {price}{" "}
              <span className="text-danger">
                {" "}
                &nbsp;<strike>{price * 2}</strike>
              </span>
            </p>
            <div className="d-flex align-items-center justify-content-around mb-2">
              <div className="col-6 d-flex align-items-center justify-content-around">
                <Link
                  to={"/details"}
                  className="view-button"
                  onClick={() => viewProductDetails(id)}
                >
                  {" "}
                  View Details
                </Link>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-around">
                <>
                  <button className="add-btn" onClick={() => {addToCart(id); notify()}}>
                    Add To Cart {cartItemCount > 0 }{""}
                    {/* && `(${cartItemCount})` */}
                  </button>
                  <ToastContainer transition={Bounce} ></ToastContainer>
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
