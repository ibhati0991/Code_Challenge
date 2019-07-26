import React, { Component } from "react";

var footerStyle = {
  listStyle: "none"
};
var link = {
  color: "rgb(41, 203, 126)"
};

class Footer extends Component {
  state = {
    email: "info@cocolevio.com",
    address: [
      "1800 E. 4th Street, Unit 123",
      "Austin, TX 78702",
      " © 2016 - present Cocolevio, LLC. All rights reserved"
    ],
    twitter: "https://twitter.com/cocolevio",
    instagram: "https://www.instagram.com/cocolevio/",
    facebook: "https://www.facebook.com/cocolevio123/",
    footerMenu: [
      { name: "Login", url: "login" },
      { name: "Sign up", url: "signup" },
      { name: "Contact us", url: "https://www.cocolevio.com/contact" },
      { name: "Privacy policy", url: "https://www.cocolevio.com/privacy" }
    ]
  };

  render() {
    return (
      <footer className="ftco-section bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <div className="mb-3 text-black">
                  <ul style={footerStyle}>
                    <li>
                      <a href="https://www.cocolevio.com/contact" style={link}>
                        <span className="text"> {this.state.email}</span>
                      </a>
                    </li>
                    {this.state.address.map(line => (
                      <li>
                        <span className="text">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                  <li className="ftco-animate">
                    <a href={this.state.twitter} className="bg-light">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href={this.state.facebook} className="bg-light">
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href={this.state.instagram} className="bg-light">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                </ul>
                <div className="vin-foot-menu">
                  {this.state.footerMenu.map(item => (
                    <a href={item.url}>{item.name}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
