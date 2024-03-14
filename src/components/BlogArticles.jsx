import React from "react";
import "./BlogArticles.css";
import blogImg1 from "../images/blog-1.jpg";
import blogImg2 from "../images/blog-2.jpg";
import blogImg3 from "../images/blog-3.jpg";

function BlogArticles() {
  return (
    <>
      <div className="blog-articles container-fluid ">
        <div className="container">
          <div className="mx-auto text-center" style={{ maxWidth: "600px" }}>
            <h1 className="text-primary mb-3">
              <span className="fw-light text-dark">From Our</span> Blog Articles
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="blog-item border h-100 p-4">
                <img className="img-fluid mb-4" src={blogImg1} alt="blogimg" />
                <a href className="h5 lh-base d-inline-block">
                  Foods that are good for your hair growing
                </a>
                <div className="d-flex text-black-50 mb-2">
                  <div className="pe-3">
                    <small className="fa fa-eye me-1"></small>
                    <small>9999 Views</small>
                  </div>
                  <div className="pe-3">
                    <small className="fa fa-comments me-1"></small>
                    <small>9999 Comments</small>
                  </div>
                </div>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aliquet, erat non malesuada consequat.
                </p>
                <a href className="btn btn-outline-primary px-3">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog-item border h-100 p-4">
                <img className="img-fluid mb-4" src={blogImg2} alt="blogimg" />
                <a href className="h5 lh-base d-inline-block">
                  How to take care of hair naturally growing.
                </a>
                <div className="d-flex text-black-50 mb-2">
                  <div className="pe-3">
                    <small className="fa fa-eye me-1"></small>
                    <small>9999 Views</small>
                  </div>
                  <div className="pe-3">
                    <small className="fa fa-comments me-1"></small>
                    <small>9999 Comments</small>
                  </div>
                </div>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aliquet, erat non malesuada consequat.
                </p>
                <a href className="btn btn-outline-primary px-3">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog-item border h-100 p-4">
                <img className="img-fluid mb-4" src={blogImg3} alt="blogimg" />
                <a href className="h5 lh-base d-inline-block">
                  How to use our natural & organic shampoo
                </a>
                <div className="d-flex text-black-50 mb-2">
                  <div className="pe-3">
                    <small className="fa fa-eye me-1"></small>
                    <small>9999 Views</small>
                  </div>
                  <div className="pe-3">
                    <small className="fa fa-comments me-1"></small>
                    <small>9999 Comments</small>
                  </div>
                </div>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aliquet, erat non malesuada consequat.
                </p>
                <a href className="btn btn-outline-primary px-3">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogArticles;
