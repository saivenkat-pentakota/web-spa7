import React from "react";
import "./CustomerReviews.css";
import testimonialImg1 from '../images/testimonial-1.jpg';
import testimonialImg2 from '../images/testimonial-2.jpg';
import testimonialImg3 from '../images/testimonial-3.jpg';


function CustomerReviews() {
  return (
    <>
      <div className="container-fluid customer-reviews">
        <div className="container text-white py-5">
          <div className="mx-auto text-center" style={{ maxWidth: "600px" }}>
            <h1 className="text-white mb-3">
              Our Customer Said{" "}
              <span className="fw-light text-dark">About Our Natural Shampoo</span>
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item text-center" data-dot="1">
                  <img
                    className="img-fluid border p-2"
                    src={testimonialImg1}
                    alt="testimonialimg"
                  />
                  <h5 className="fw-light lh-base text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis aliquet, erat non malesuada consequat, nibh erat tempus
                    risus, vitae porttitor purus nisl vitae purus. Praesent
                    tristique odio ut rutrum pellentesque. Fusce eget molestie
                    est, at rutrum est. Nullam scelerisque libero nunc, vitae
                    ullamcorper elit volutpat ut.
                  </h5>
                  <h5 className="mb-1">Client Name</h5>
                  <h6 className="fw-light text-white fst-italic mb-0">
                    Profession
                  </h6>
                </div>
                <div className="testimonial-item text-center" data-dot="2">
                  <img
                    className="img-fluid border p-2"
                    src={testimonialImg2}
                    alt="testimonialimg"
                  />
                  <h5 className="fw-light lh-base text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis aliquet, erat non malesuada consequat, nibh erat tempus
                    risus, vitae porttitor purus nisl vitae purus. Praesent
                    tristique odio ut rutrum pellentesque. Fusce eget molestie
                    est, at rutrum est. Nullam scelerisque libero nunc, vitae
                    ullamcorper elit volutpat ut.
                  </h5>
                  <h5 className="mb-1">Client Name</h5>
                  <h6 className="fw-light text-white fst-italic mb-0">
                    Profession
                  </h6>
                </div>
                <div className="testimonial-item text-center" data-dot="3">
                  <img
                    className="img-fluid border p-2"
                    src={testimonialImg3}
                    alt="testimonialimg"
                  />
                  <h5 className="fw-light lh-base text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis aliquet, erat non malesuada consequat, nibh erat tempus
                    risus, vitae porttitor purus nisl vitae purus. Praesent
                    tristique odio ut rutrum pellentesque. Fusce eget molestie
                    est, at rutrum est. Nullam scelerisque libero nunc, vitae
                    ullamcorper elit volutpat ut.
                  </h5>
                  <h5 className="mb-1">Client Name</h5>
                  <h6 className="fw-light text-white fst-italic mb-0">
                    Profession
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerReviews;
