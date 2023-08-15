import React from 'react'
import Shopitems from '../components/shopitems'
import Background from "../assets/images/banner/women-banner.jpg";
import Img from '../components/img';

const women = () => {
  return <>
  <section className="shop-banner-men ">
        <div className="container-xxl">
          <div className="row justify-content-center align-items-center">
          <article className='article p-0'>
      <Img className='imagess' src={Background} alt="background" />
      <div className="headerest-women p-2 p-sm-5">
      <h2 className="pb-4 lh-base ">A versatile outer layer made with <br /> stretchy fabric for <span className='comport rounded fw-medium px-2 text-white'>Comport</span> </h2>
       <h5 className="pe-2">Comfort Jacket</h5>
       <h2 className="text-danger">P 2990</h2>
       <p className="pe-2 text-white">App Exclusive Limited Offer from August 4 to 10, 2023</p>
       </div>
       

    </article>
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

export default women