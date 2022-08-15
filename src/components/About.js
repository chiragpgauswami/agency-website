import React from "react";

export default function About() {
  return (
    <section id="about_section" className="about">
      <div className="ab-out">
        <div className="ab-bg1 ab-bg1-m flex-container"></div>
        <div className="ab-content1 flex-container">
          <div className="ab-h-out1">
            <h3 className="bgheading">Skills</h3>
            <h3 className="ab-heading1">
              What We Do <br />
              <strong>Digital Services</strong>
            </h3>
          </div>
          <p className="ab-p1">
            The term Digital Services refers to the electronic delivery
            information including data and content across multiple platforms and
            devices like web or mobile. Information is presented in a way that
            is easy to used i to and understand and typically involves
            transaction services such as an submitting forms for processing and
            receiving benefits.
          </p>
        </div>
        <div className="ab-bg1 flex-container"></div>
      </div>
      <div className="ab-out">
        <div className="ab-bg2 flex-container"></div>
        <div className="ab-content2 flex-container">
          <div className="ab-h-out2">
            <h3 className="bgheading">Partners</h3>
            <h3 className="ab-heading2">
              About Us <br />
              <strong>Partners for Growth</strong>
            </h3>
          </div>
          <p className="ab-p2">
            The process of improving some measure of an enterprise’s success.
            Business growth can be achieved either by boosting the top line or
            revenue of the business with greater product sales or service
            income, or by increasing the bottom line or profitability of the
            operation by minimizing costs
          </p>
        </div>
      </div>
      <div className="counter">
        <div className="row">
          <div className="column">
            <div className="card">
              <p><i className="fa fa-user"></i></p>
              <div className="card-con">
                <h3>11+</h3>
                <p>Partners</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <p><i className="fa fa-check"></i></p>
              <div className="card-con">
                <h3>55+</h3>
                <p>Projects</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <p><i className="fa fa-smile"></i></p>
              <div className="card-con">
                <h3>100+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <p><i className="fa fa-coffee"></i></p>
              <div className="card-con">
                <h3>100+</h3>
                <p>Meetings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
