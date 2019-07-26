import React, { Component } from "react";

import Logo from '../assets/img/logo.png'

var navStyle={
  filter:'invert(1)',
}

class Navbar extends Component {
  state = {};
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ftco_navbar bg-light  sticky-top" >
        <div className="container">
          <a className="navbar-brand" href="/"><img src={Logo} style={navStyle} width="90" height="60" alt=""/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>
    
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto" >
              <li className="nav-item "><a href="/" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
              <li className="nav-item"><a href="/signup" className="nav-link">Sign up</a></li>
              <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
              <li className="nav-item"><a href="https://www.cocolevio.com/contact" className="nav-link">Contact us</a></li>
             
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
