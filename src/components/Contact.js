import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
        toast.success("Your Message has been Sent Successfully.");
      }, (error) => {
        console.log(error.text);
        toast.error("Please Try Again After Sometime.");
      });
  };

  return (
    <section id="contact_section" className="contact">
      <div className="con-container">
        <div className="con-bg1 con-bg1-m flex-container"></div>
        <div className="con-content1 flex-container">
          <div className="con-content-inner">
            <div className="con-h-out1">
              <h3 className="bgheading">Contact</h3>
              <h3 className="ab-heading1 con-heading">
                Contact Us <br />
                <strong>Request For Quote</strong>
              </h3>
            </div>

            <form ref={form} onSubmit={sendEmail} className="conform">
              <input type="text" placeholder='Name *' name="user_name" /><br />
              <input type="email" placeholder='Email *' name="user_email" /><br />
              <textarea cols="40" rows="10" placeholder="Message" name="message" ></textarea><br />
              <button type="submit" value="Send" >Send Message</button>
            </form>
            <div className="con-content-inner">
            </div>
          </div>
        </div>
        <div className="con-bg1 flex-container"></div>
      </div>

      <div className="brand-slider">
        <div className="brand-slide-track">
          <div className="brand-slide">
            <img src="/agency-website/img/slider/1.png" alt="" />
          </div>
          <div className="brand-slide">
            <img src="/agency-website/img/slider/2.png" alt="" />
          </div>
          <div className="brand-slide">
            <img src="/agency-website/img/slider/3.png" alt="" />
          </div>
          <div className="brand-slide">
            <img src="/agency-website/img/slider/4.png" alt="" />
          </div>
          <div className="brand-slide">
            <img src="/agency-website/img/slider/5.png" alt="" />
          </div>
          <div className="brand-slide">
            <img src="/agency-website/img/slider/6.png" alt="" />
          </div>
          <div className="brand-slide">
            <img src="/agency-website/img/slider/1.png" alt="" />
          </div>
          <div className="brand-slide">
            <img src="/agency-website/img/slider/2.png" alt="" />
          </div>
          <div className="brand-slide">
            <img src="/agency-website/img/slider/3.png" alt="" />
          </div>
          <div className="brand-slide">
            <img src="/agency-website/img/slider/4.png" alt="" />
          </div>
          <div className="brand-slide">
            <img src="/agency-website/img/slider/5.png" alt="" />
          </div>
          <div className="brand-slide">
            <img src="/agency-website/img/slider/6.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
