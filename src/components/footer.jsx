import React, { Component } from "react";

import Computer from '../assets/img/computer.png'

var footerStyle={
listStyle:'none',

}
var link={
color:'rgb(41, 203, 126)',
}

class Footer extends Component {
  state = {};
  render() {
    return (
        <footer className="ftco-section bg-white" >
      <div className="container">
        <div className="row">
            <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <div className="mb-3 text-black">
                    <ul style={footerStyle}>
                        <li><a href="https://www.cocolevio.com/contact" target="_blank" style={link}><span className="text"> info@cocolevio.com</span></a></li>
                      <li><span className="text"> 1800 E. 4th Street, Unit 123</span></li>
                      <li><span className="text"> Austin, TX 78702</span></li>
                      
                      
                      
                      <li className="mt-5"><span className="text">© 2016 - present Cocolevio, LLC. All rights reserved</span></li>
                    </ul>
                  </div>
                  <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                    <li className="ftco-animate"><a href="https://twitter.com/cocolevio" target="_blank" className="bg-light"><span className="icon-twitter"></span></a></li>
                    <li className="ftco-animate"><a href="https://www.facebook.com/cocolevio123/" target="_blank" className="bg-light"><span className="fa fa-facebook"></span></a></li>
                    <li className="ftco-animate"><a href="https://www.instagram.com/cocolevio/" target="_blank" className="bg-light"><span className="icon-instagram"></span></a></li>
                  </ul>
                  <div className="vin-foot-menu" >
                    <a href="/login">Login</a>
                    <a href="/signup">Sign up</a>
                    <a href="https://www.cocolevio.com/contact" target="_blank">Contact us</a>
                    <a href="https://www.cocolevio.com/privacy" target="_blank">Privacy policy</a>
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
