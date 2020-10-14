import React from "react";

export default ({ offerLinks }) => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Exclusive Offers</h2>
            <h3 className="section-subheading text-muted">
              Get upto 35% discount on pre-order! Hurry !
            </h3>
          </div>
        </div>
        <div className="row text-center">
          {offerLinks &&
            offerLinks.map(({ offerHeading, caption, offerImg }, index) => (
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className={offerImg}></i>
                </span>
                <h4 className="service-heading">{offerHeading}</h4>
                <p className="text-muted">{caption}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
