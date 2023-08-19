import React, { useContext } from "react";
import { ShopContext } from "./shopcontext";
import Img from "./Imge";

const cartitems = (props) => {
  const { id, name, image, price, brand } = props.data;
  const {
    viewProductDetails,
    addToCart,
    cartItems,
    removeToCart,
    updateCartItemCount,
  } = useContext(ShopContext);
  return (
    <>
      <tbody key={id}>
        <tr>
        
            <div className="p-3 px-1 ">
              <Img src={image} alt="" className="img-fluid " />
            </div>
          <td className="">
            <p>
              Brand: <span className="price">{brand}</span>{" "}
            </p>
            <p>
              Name: <h5 className="price">{name}</h5>
            </p>
            <p>
              Price: <span className="price">{price}</span>
            </p>
            <p>
              Stock: <span className="text-danger">340</span>
            </p>
          </td>
          <td>
          <button
              className="add-btns border-0 mx-1 mx-sm-2 p-0"
              onClick={() => {
                removeToCart(id);
              }}
            >
              {" "}
              -
            </button>
           
            <input
            className="quan"
              type="text"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
              
            />
 <button
              className="add-btns border-0 mx-1 mx-sm-2 p-0"
              onClick={() => {
                addToCart(id);
              }}
            >
              {" "}
              +
            </button>
           
          </td>

          <td className=" d-none d-sm-flex">
            <div className="input-group p-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Coupon code"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button className="input-group-text" id="basic-addon2">
                Search
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default cartitems;
