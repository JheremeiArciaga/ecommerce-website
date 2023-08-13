import React from "react";
import { PRODUCTS } from "./products";


/**
 * Renders a list of featured products.
 * @returns {JSX.Element} The JSX code to render the featured products.
 */
const featuredProducts = () => {
  return (
    <>
      <div className="row mt-4 row-cols-2 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3  m-auto">
        {PRODUCTS.slice(2, 6).map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100 m-auto p-2 p-md-3">
              <img
                src={product.image}
                alt=""
                className="card-img-top img-fluid m-auto mb-3 mb-sm-4"
              />
              <div className="card-details">
                <div className="tittle mb-3">
                  <span>{product.brand}</span>
                  <h5 className="elips mt-1 mt-sm-2">{product.name}</h5>
                </div>
                <div className="card-footer text-center mb-2">
                  <p className="mb-3 d-none d-md-block">{product.status}</p>
                  <p>
                    <strike className="text-danger">{product.rate}</strike>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default featuredProducts;
