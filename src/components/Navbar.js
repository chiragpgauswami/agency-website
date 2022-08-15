import React from "react";

export default function Navbar() {
  function stickyNav() {
    var header = document.getElementById("navbar");
    header.classList.toggle("sticky-nav", window.scrollY > 0);
  }
  window.addEventListener("scroll", stickyNav);


  function navAc() {
    var btns = document.getElementsByClassName("nav-li");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("nav-active");
        current[0].className = current[0].className.replace(" nav-active", "");
        this.className += " nav-active";
      });
    }
  }


  return (
    <header id="navbar">
      <a href="#hero_section" className="logo">
        Logo
      </a>
      <input type="checkbox" id="active" className="navin" />
      <label htmlFor="active" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <div className="wrapper">
        <ul className="nav-ul">
          <li className="nav-li nav-active" onClick={navAc()}>
            <a href="#hero_section">Home</a>
          </li>
          <li className="nav-li" onClick={navAc()}>
            <a href="#about_section">About</a>
          </li>
          <li className="nav-li" onClick={navAc()}>
            <a href="#portfolio_section">Portfolio</a>
          </li>
          <li className="nav-li" onClick={navAc()}>
            <a href="#contact_section">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
