import React, { useContext,useState } from "react";
import { PRODUCTS, PRODUCTS1 } from "../components/products";
import Cartitems from "../components/cartitems";
import { ShopContext } from "../components/shopcontext";
import { Link } from "react-router-dom";
Link;
import {BsCartX} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";


const cart = () => {
  const {
    getTotalCartAmount,
    ClearCart,
    cartItems,getTotalCartProducts
  } = useContext(ShopContext);

  const TotalAmount = getTotalCartAmount();
  const totalProducts = getTotalCartProducts()

  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 576) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.addEventListener("resize", handleResize);


  return  <>
    {TotalAmount > 0 ? ( <section className="cart-item p-3 p-sm-4 pe-0">
      <div className="d-flex justify-content-center pb-5">
        <span>Cart &gt; <span className="text-body-secondary">Place Order&gt; Pay&gt; Order Complete</span></span> 
      </div>
        <div className="container-xxl px-1 px-md-5">
          <div className="row">
            <table>
              <thead className="my-2 px-0">
                
                <th className="col-3 col-sm-0"></th>
                <th className="col-3">Item</th>
                <th className="col-3">Quantity</th>
                <th className="col-3 d-none d-sm-block text-center">Coupons</th>
              </thead>

              {/* {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                if (cartItems[product.id] !== 0) {
                  return <Cartitems key={product.id} data={product} />;
                }
              })} */}
              {[...PRODUCTS, ...PRODUCTS1].filter((product) => cartItems[product.id] !== 0).map((product) => {
  return <Cartitems key={product.id} data={product} />;
})}

              <div className="mb-3 text-center p-3">
                <Link onClick={() => ClearCart(id)}>Clear cart</Link>
              </div>
            </table>
          </div>
        </div>
        <hr />

<div className="row">
      <div className="col-12 col-md-6 d-flex m-auto justify-content-between mt-4 ">
        <button onClick={() => navigate("/shop")}>
          {isMobile ? "Continue" : "Continue Shopping"}
        </button>
      </div>
    

        <div className=" cart-total col-12 col-md-6 total m-auto d-flex flex-column pe-4 ">
         
          <div className="col-12 text-end">
          <h3>Order Total</h3>
        <p className="my-2">Total Products:{" "}<span className="price">{totalProducts}</span>{""}</p>
          <p className="price mb-4">${TotalAmount}</p>

          <button
              onClick={() => navigate("/checkout")}
              
            >
              {isMobile ? "Check Out" : "Proceed to Checkout"}
            </button>
        </div>
        </div>
        </div>
      </section>
     ) : (
      <section className="py-5 px-4 cart-end">
        <div className="container-xxl pb-4">
          <div className="row">
            <div className="d-flex justify-content-center my-3 " >
            <BsCartX className=" fs-1 " />
            </div>
            <div className="text-center">
              <h4 className="text-uppercase fw-bold  my-3 mb-4"> Your Cart is Empty</h4>
            <Link to={'/shop'} type="button" className="btn btn-dark btn-lg ">Shop Now</Link>
            </div>
          </div>
        </div>
        </section> 
   )}
    </>

}

export default cart;
