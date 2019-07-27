import React, { Component } from "react";


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
      <footer className="ftco-section bg-white" style={{borderTop:"2px solid #5f5f5f",padding:"40px 0 40px 0"}}>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <div className="mb-3 text-black">
                  <ul style={{listStyle:"none",paddingLeft:"0"}}>
                    <li>
                      <a href="https://www.cocolevio.com/contact" style={{color:"#29cb7e"}}>
                        <span className="text"> {this.state.email}</span>
                      </a>
                    </li>
                    {this.state.address.map((line,index) => (
                      <li key={index}>
                        <span className="text">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft" >
                  <li >
                    <a href={this.state.twitter} className="bg-light" style={{color:"#29cb7e"}}>
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li >
                    <a href={this.state.facebook} className="bg-light" style={{color:"#29cb7e"}}>
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li >
                    <a href={this.state.instagram} className="bg-light" style={{color:"#29cb7e"}}>
                      <span className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
                <div className="vin-foot-menu">
                  {this.state.footerMenu.map((item,index) => (
                    <a key={index} href={item.url}>{item.name}</a>
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
