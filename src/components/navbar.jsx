import React, { Component } from "react";

import Logo from "../assets/img/logo.png";


class Navbar extends Component {
  state = {
    navItems: ["Home", "Login", "Sign up", "Blog", "Contact us"]
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ftco_navbar  sticky-top" style={{background:"#fff"}}>
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={Logo}
              style={{
                filter: "invert(1)"
              }}
              width="90"
              height="60"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              {this.state.navItems.map((item, index) => (
                <li className="nav-item " key={index}>
                  <a href={item} className="nav-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
