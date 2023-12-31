import { imageUrl } from "../../../environment";
function ProductLists({ products }) {
  return (
    <div className="container mb-5">
      <div className="product-grid">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 g-3 g-sm-4">
          {products && products.length != 0 ? (
            products.map((product) => (
              <div key={product.id} className="col">
                <div className="card product-card">
                  <div className="position-relative overflow-hidden text-center">
                    <div className="add-cart position-absolute top-0 end-0 mt-3 me-2">
                      <a title="Add to card" href="#" className="no-underline">
                        <i className="fa-solid fa-plus" />
                      </a>
                    </div>

                    <a href={`product-detail/${product.slug}`}>
                      <img
                        src={imageUrl + product.feature_image}
                        className="justify-image"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body px-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="">
                        <p className="mb-1 product-short-name">
                          {product.category.name}
                        </p>
                        <h6 className="mb-0 fw-bold product-short-title">
                          {product.name}
                        </h6>
                      </div>
                      <div className="icon-wishlist">
                        <a
                          title="Add to wishlist"
                          href="#"
                          className="no-underline text-dark"
                        >
                          <i className="fa-regular fa-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="cursor-pointer rating mt-2">
                      <i className="fa-regular fa-star text-warning" />
                      <i className="fa-regular fa-star text-warning" />
                      <i className="fa-regular fa-star text-warning" />
                      <i className="fa-regular fa-star text-warning" />
                      <i className="fa-regular fa-star text-warning" />
                    </div>
                    <div className="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                      {product.discount_price != 0 ? (
                        <>
                          <div className="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                            {product.price} MMK
                          </div>
                          <div className="h6 fw-bold">
                            {product.discount_price} MMK
                          </div>
                        </>
                      ) : (
                        <div className="h6 fw-bold">{product.price} MMK</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <span className="text-danger">No Content!</span>
            </div>
          )}
          {/* end col  */}
        </div>
      </div>
    </div>
  );
}

export default ProductLists;
