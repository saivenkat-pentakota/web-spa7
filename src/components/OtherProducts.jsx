import React from "react";
import "./OtherProducts.css";
import productImg1 from "../images/product-1.png";
import productImg2 from "../images/product-2.png";

function OtherProducts() {
  return (
    <>
      <div className="other-products container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center" style={{ maxWidth: "600px" }}>
            <h1 className="text-primary mb-3">
              <span className="fw-light text-dark">Our Natural</span> Hair
              Products
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="product-item text-center border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src={productImg1}
                  alt=""
                  productimg
                />
                <div className="mb-2">
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small>(99)</small>
                </div>
                <a href className="h6 d-inline-block mb-2">
                  Hair Shining Shampoo
                </a>
                <h5 className="text-primary mb-3">$99.99</h5>
                <a href className="btn btn-outline-primary px-3">
                  Add To Cart
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="product-item text-center border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src={productImg2}
                  alt="productimg"
                />
                <div className="mb-2">
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small>(99)</small>
                </div>
                <a href className="h6 d-inline-block mb-2">
                  Anti-dandruff Shampoo
                </a>
                <h5 className="text-primary mb-3">$99.99</h5>
                <a href className="btn btn-outline-primary px-3">
                  Add To Cart
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="product-item text-center border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src={productImg1}
                  alt="productimg"
                />
                <div className="mb-2">
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small>(99)</small>
                </div>
                <a href className="h6 d-inline-block mb-2">
                  Anti Hair Fall Shampoo
                </a>
                <h5 className="text-primary mb-3">$99.99</h5>
                <a href className="btn btn-outline-primary px-3">
                  Add To Cart
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="product-item text-center border h-100 p-4">
                <img
                  className="img-fluid mb-4"
                  src={productImg2}
                  alt="productimg"
                />
                <div className="mb-2">
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small>
                  <small>(99)</small>
                </div>
                <a href className="h6 d-inline-block mb-2">
                  Hair Growing Shampoo
                </a>
                <h5 className="text-primary mb-3">$99.99</h5>
                <a href className="btn btn-outline-primary px-3">
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherProducts;
