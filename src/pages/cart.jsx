import React, { useContext, useState } from "react";
import { PRODUCTS, PRODUCTS1 } from "../components/products";
import Cartitems from "../components/cartitems";
import { ShopContext } from "../components/shopcontext";
import { Link } from "react-router-dom";
Link;
import { BsCartX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const cart = () => {
  const { getTotalCartAmount, ClearCart, cartItems, getTotalCartProducts } =
    useContext(ShopContext);

  const TotalAmount = getTotalCartAmount();
  const totalProducts = getTotalCartProducts();

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

  return (
    <>
      {TotalAmount > 0 ? (
        <section className="cart-item p-3 p-sm-4 pe-2">
          <div className="d-flex justify-content-center pb-5">
            <span>
              Cart &gt;{" "}
              <span className="text-body-secondary">
                Place Order&gt; Pay&gt; Order Complete
              </span>
            </span>
          </div>
          <div className="container-xxl px-1 px-md-5 pb-5">
            <div className="row">
              <table>
                <thead className="my-2 px-0 ">
                  <th className="col-3 col-sm-0 "></th>
                  <th className="col-4 ">Item</th>
                  <th className="col-3">Quantity</th>
                  <th className="col-3 d-none d-sm-block text-center">
                  
                  </th>
                </thead>

                {/* {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                if (cartItems[product.id] !== 0) {
                  return <Cartitems key={product.id} data={product} />;
                }
              })} */}
                {[...PRODUCTS, ...PRODUCTS1]
                  .filter((product) => cartItems[product.id] !== 0)
                  .map((product) => {
                    return <Cartitems key={product.id} data={product} />;
                  })}
              </table>
            </div>
          </div>
          <hr />

          <div className="row cart-items">
            <div className="col-12 col-md-12 d-flex m-auto justify-content-between mt-2  ">
              <button className="py-0" onClick={() => navigate("/shop")}>
                {isMobile ? "Continue" : "Continue Shopping"}
              </button>
              <div className="mb-3 bg-dark p-2 me-md-3 mt-2">
                <Link className="text-white palitan" onClick={() => ClearCart(id)}>
                  Clear cart
                </Link>
              </div>
            </div>

            <div className=" cart-total col-12 col-md-12 total  pe-4 mx-auto my-4 d-flex justify-content-md-end justify-content-center text-center text-md-end">
              <div className="border rounded col-8 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-4 ">
                <div className="text-center">
                  <h3>Order Summary</h3>
                  <p className="my-2">
                    Total Products:{" "}
                    <span className="price">{totalProducts}</span>
                    {""}
                  </p>
                  <p className="price mb-0">${TotalAmount}</p>
                  <hr />

                  <button onClick={() => navigate("/checkout")}>
                    {isMobile ? "Check Out" : "Proceed to Checkout"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-5 px-4 cart-end">
          <div className="container-xxl pb-4">
            <div className="row">
              <div className="d-flex justify-content-center my-3 ">
                <BsCartX className=" fs-1 " />
              </div>
              <div className="text-center">
                <h4 className="text-uppercase fw-bold  my-3 mb-4">
                  {" "}
                  Your Cart is Empty
                </h4>
                <Link
                  to={"/shop"}
                  type="button"
                  className="btn btn-dark btn-lg "
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default cart;
