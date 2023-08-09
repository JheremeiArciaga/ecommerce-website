import React from 'react'
import Prod from './prod'
import { PRODUCTS, PRODUCTS1 } from './products'
const shopitems = () => {
  return <>
  <div className="row row-cols-1 m-auto row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ">
     {[...PRODUCTS, ...PRODUCTS1].map((product) => (
          <Prod key={product.id} data={product}/>
))}
  </div>
  
  
  </>
}

export default shopitems