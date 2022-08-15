import React from "react";
import ModalImage from "../extra/src";

export default function Portfolio() {
  return (
    <section id="portfolio_section" className="portfolio">
      <div className="pro-h-out">
        <div className="por-heading">
          <h3 className="bgheading"  >
            Works
          </h3>
          <h3 className="ab-heading2 por-heading1">
            Some Of <br />
            <strong>Our Portfolio</strong>
          </h3>
        </div>
      </div>

      <div className="por-grid">
        <div className="por-img-box">
          <ModalImage small="/agency-website/img/work/1.jpg" medium="/agency-website/img/work/1.jpg" alt="Our Work" className="por-img" />
          <div className="por-info">
            <h4>work no 1</h4>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="por-img-box">
          <ModalImage small="/agency-website/img/work/2.jpg" medium="/agency-website/img/work/2.jpg" alt="Our Work" className="por-img" />
          <div className="por-info">
            <h4>work no 1</h4>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="por-img-box">
          <ModalImage small="/agency-website/img/work/3.jpg" medium="/agency-website/img/work/3.jpg" alt="Our Work" className="por-img" />
          <div className="por-info">
            <h4>work no 1</h4>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="por-img-box">
          <ModalImage small="/agency-website/img/work/4.jpg" medium="/agency-website/img/work/4.jpg" alt="Our Work" className="por-img" />
          <div className="por-info">
            <h4>work no 1</h4>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="por-img-box">
          <ModalImage small="/agency-website/img/work/5.jpg" medium="/agency-website/img/work/5.jpg" alt="Our Work" className="por-img" />
          <div className="por-info">
            <h4>work no 1</h4>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="por-img-box">
          <ModalImage small="/agency-website/img/work/6.jpg" medium="/agency-website/img/work/6.jpg" alt="Our Work" className="por-img" />
          <div className="por-info">
            <h4>work no 1</h4>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="por-img-box">
          <ModalImage small="/agency-website/img/work/7.jpg" medium="/agency-website/img/work/7.jpg" alt="Our Work" className="por-img" />
          <div className="por-info">
            <h4>work no 1</h4>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="por-img-box">
          <ModalImage small="/agency-website/img/work/8.jpg" medium="/agency-website/img/work/8.jpg" alt="Our Work" className="por-img" />
          <div className="por-info">
            <h4>work no 1</h4>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
