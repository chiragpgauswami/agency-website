import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ModalImage from "../extra/src";
import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Footer() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
        toast.success("Congratulations You Have Successfully Registered.");
      }, (error) => {
        console.log(error.text);
        toast.error("Please Try Again After Sometime.", 0);
      });
  };


  return (
    <section className="footer">

      <div className="ft-main">
        <div className="ft-main-item">
          <a href="/" className="footer-logo">
            Logo
          </a>
          <ul>
            <p>Anno WP themes provides a fully flexible WordPress theme, Allow customize every page</p><br />
            <p>+44-698754-6926</p>
            <p>Potsdamer Platz, 9797</p>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Stay Updated</h2>
          <p className='form-line'>Subscribe to our newsletter to get our latest news.</p>
          <form ref={form} onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Enter email address" />
            <button type="submit"><i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Resources</h2>
          <ul>
            <li><a href="#hero_section">Home</a></li>
            <li><a href="#about_section">About</a></li>
            <li><a href="#portfolio_section">Portfolio</a></li>
            <li><a href="#contact_section">Contact</a></li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Contact</h2>
          <ul>
            <div className="footer-grid">
              <div className="footer-img-box">
                <ModalImage small="/agency-website/img/footer/1.jpg" medium="/agency-website/img/footer/1-big.jpg" alt="Our Gallery" className="footer-img" />
              </div>
              <div className="footer-img-box">
                <ModalImage small="/agency-website/img/footer/2.jpg" medium="/agency-website/img/footer/2-big.jpg" alt="Our Gallery" className="footer-img" />
              </div>
              <div className="footer-img-box">
                <ModalImage small="/agency-website/img/footer/3.jpg" medium="/agency-website/img/footer/3-big.jpg" alt="Our Gallery" className="footer-img" />
              </div>
              <div className="footer-img-box">
                <ModalImage small="/agency-website/img/footer/4.jpg" medium="/agency-website/img/footer/4-big.jpg" alt="Our Gallery" className="footer-img" />
              </div>
              <div className="footer-img-box">
                <ModalImage small="/agency-website/img/footer/5.jpg" medium="/agency-website/img/footer/5-big.jpg" alt="Our Gallery" className="footer-img" />
              </div>
              <div className="footer-img-box">
                <ModalImage small="/agency-website/img/footer/6.jpg" medium="/agency-website/img/footer/6-big.jpg" alt="Our Gallery" className="footer-img" />
              </div>
            </div>
          </ul>
        </div>
      </div>



      <div className="ft-social">
        <ul className="ft-social-list">
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-github"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="#"><i className="fab fa-youtube"></i></a></li>
        </ul>
      </div>


      <div className="ft-legal">
        <ul className="ft-legal-list">
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li>&copy; 2022 Copyright Chirag.</li>
        </ul>
      </div>
    </section>
  )
}


