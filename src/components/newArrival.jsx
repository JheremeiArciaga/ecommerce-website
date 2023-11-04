import React from "react";
import { PRODUCTS1 } from "./products";
import Img from "./Imge";
import { Link } from "react-router-dom";

const newArrival = () => {
  return (
    <>
      <div className="row mt-4 row-cols-2 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3  m-auto">
        {PRODUCTS1.slice(2, 6).map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100 m-auto p-2 p-md-3">
              <Img
                src={product.image}
                alt="Clothe"
                className="card-img-top img-fluid m-auto mb-3 mb-sm-4"
              />
              <div className="card-details">
                <div className="title mb-3">
                  <span>{product.brand}</span>
                  <p className="elips mt-1 mt-sm-2">{product.name}</p>
                </div>
                <div className="card-footer text-center mb-2">
                  <p className="d-none d-md-block">{product.status}</p>
                  <p>
                    <strike className="text-danger">{product.rate}</strike>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container-xxl d-flex justify-content-center">
        <div className="row  mt-4 mb-5">
          <Link to={"/shop"} className="button-links">
            All Products
          </Link>
        </div>
      </div>
    </>
  );
};
export default newArrival;
