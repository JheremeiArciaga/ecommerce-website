import React, { useContext } from "react";
import { ShopContext } from "./shopcontext";
import { MdDeleteOutline } from "react-icons/md";
import Img from "./Imge";
import { Link } from "react-router-dom";

const cartitems = (props) => {
  const { id, name, image, price, brand } = props.data;
  const { addToCart, cartItems, removeToCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <>
      <tbody key={id}>
        <tr className="border-bottom">
          <Link
            to={"/details"}
            className="view-button "
            onClick={() => viewProductDetails(id)}
          >
            <Img
              src={image}
              alt=""
              className="img-fluid p-3 px-1 card-img-top"
            />
          </Link>
          <td className="px-2 ">
            <p>
              <span className="prices">{brand}</span>{" "}
            </p>
            <p>
              <h5 className="price mb-0 text-black fw-bold ms-0 my-2">
                {name}
              </h5>
            </p>
            <p>
              <span className="price ms-0">
                <span className="text-danger fs-5 ">&#8369;</span> {price}
              </span>
            </p>
            <p>
              Stock: <span className="text-secondary">340</span>
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
              className="add-btns border-0 mx-1 mx-sm-2 p-0 overflow-hidden"
              onClick={() => {
                addToCart(id);
              }}
            >
              {" "}
              +
            </button>
          </td>
          <td className="d-none d-sm-flex">
            <button
              className="  btn bg-danger text-white btn-outline-danger  border-0"
              onClick={() => removeToCart(id)}
            >
              <MdDeleteOutline />
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default cartitems;
