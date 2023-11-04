# try
<div className="row mt-4 row-cols-2 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3  m-auto">
        {PRODUCTS1.slice(1, 5).map((product) => (
          <Fragment key={product.id}>
            <div className="col">
              <div className="card h-100 m-auto p-2 p-md-3">
                <Img
                  src={product.image}
                  alt=""
                  className="card-img-top img-fluid mb-3 "
                />
                <div className="card-details">
                  <div className="tittle mb-3">
                    <span>{product.brand}</span>
                    <h5 className="elips mt-1 mt-sm-2">{product.name}</h5>
                  </div>
                  <div className="card-footer text-center mb-2">
                    <p className="mb-2">{product.status}</p>
                    <p>
                      <strike className="text-danger ">{product.rate}</strike>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>