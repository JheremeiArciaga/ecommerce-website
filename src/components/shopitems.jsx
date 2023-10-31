import React from 'react'
import Prod from './prod'
import { Recommended, PRODUCTS, PRODUCTS1, BestSeller } from './products'
const shopitems = () => {
  return <>
  <h3 className='ps-2 ps-sm-5 ps-md-4 ps-lg-5 fw-bold'>Recommended</h3>
  <div className="row row-cols-2 m-auto row-cols-sm-2 p-0 p-sm-1 row-cols-md-3 row-cols-lg-4 g-4 mb-5 ">
     {[...Recommended].map((product) => (
          <Prod key={product.id} data={product}/>
))}
  </div>
  <h3 className='ps-2 ps-sm-5 ps-md-4 ps-lg-5 fw-bold'>Best Seller</h3>
  <div className="row row-cols-2 m-auto row-cols-sm-2 p-0 p-sm-1 row-cols-md-3 row-cols-lg-4 g-4 mb-5 ">
     {[...BestSeller].map((product) => (
          <Prod key={product.id} data={product}/>
))}
  </div>
  <h3 className='ps-2 ps-sm-5 ps-md-4 ps-lg-5 fw-bold'>All Product</h3>
  <div className="row row-cols-2 m-auto row-cols-sm-2 p-0 p-sm-1 row-cols-md-3 row-cols-lg-4 g-4 ">
     {[...PRODUCTS, ...PRODUCTS1].map((product) => (
          <Prod key={product.id} data={product}/>
))}
  </div>
  </>
}

export default shopitems