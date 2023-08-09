import React from 'react'
import Shopitems from '../components/shopitems'

const shop = () => {
  return <>
  <section className="shop-banner p-2">
        <div className="container-xxl">
          <div className="row justify-content-center align-items-center">
      
            <div className="repair-details text-center py-5">
              <span className="text-white ">
                Repair Services
                <h2 className="text-white">
                  On{" "}
                  <span className="text-success">
                    <b>50%</b>
                  </span>{" "}
                  Off on All Products 
                </h2>
              </span>
              
            </div>
           
          </div>
        </div>
      </section>

      <section className="shop-products p-5 m-auto">
<div className="container-xxl">
  <div className="row">
    <Shopitems />
  </div>

</div>
      </section>

      <section className="pagination p-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
            <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
            </div>
          </div>
        </div>
      </section>
  </>
}

export default shop