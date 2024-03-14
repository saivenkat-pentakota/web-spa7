import React from "react";
import "./AboutProduct.css";
import shampooImg1 from '../images/shampoo-1.png';

function AboutProduct() {
  return (
    <>
      <div className="about-product container-fluid py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 ">
              <div className="feature-item position-relative text-center p-3">
                <div className="border py-5 px-3">
                  <i className="fa fa-leaf fa-3x text-dark mb-4"></i>
                  <h5 className="text-white mb-0">100% Natural</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="feature-item position-relative text-center p-3">
                <div className="border py-5 px-3">
                  <i className="fa fa-tree fa-3x text-dark mb-4"></i>
                  <h5 className="text-white mb-0">Anti Hair Fall</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="feature-item position-relative text-center p-3">
                <div className="border py-5 px-3">
                  <i className="fa fa-times fa-3x text-dark mb-4"></i>
                  <h5 className="text-white mb-0">Hypoallergenic</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6">
              <img
                class="img-fluid"
                src={shampooImg1}
                alt="shampooImg1"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="text-primary mb-4">
                Healthy Hair
                <span class="fw-light text-dark">
                  Is A Symbol Of Our Beauty
                </span>
              </h1>
              <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                aliquet, erat non malesuada consequat, nibh erat tempus risus,
                vitae porttitor purus nisl vitae purus. Praesent tristique odio
                ut rutrum pellentesque. Fusce eget molestie est, at rutrum est.
              </p>
              <p class="mb-4">
                Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
                sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                tempor.
              </p>
              <a class="btn btn-primary py-2 px-4" href="#shopnow">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutProduct;
