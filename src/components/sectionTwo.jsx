import React, { Component } from "react";

import Arrow from '../assets/img/greenArrow.png';

var sectonTwoImg={
  backgroundImage:'url(' + Arrow + ')',
}

class SectionTwo extends Component {
  state = {};
  render() {
    return (
      <section className="ftco-section vin-ftco" style={sectonTwoImg} >
    	<div className="container">
    		
    		<div className="row " >
    			
          <div className="col-md-2 "></div>
          <div className="col-md-5 ">
    				
              
              <div className="media-body">
                <h3 className="heading" >Start using our alpha release for free to see how Machine Learning can improve your day to day operations</h3>
                <p>Take advantage of the cutting edge technology that Machine Learning has to offer.</p>
                <ul className="pricing-text" >
                  <li>Get highly accurate algorithms that give predictions for problems you’re interested in solving</li>
                  <li>Train models with your data to tailor fit algorithms to your needs</li>
                  <li>Receive insight into what your data says about your operations</li>
                 
                </ul>
                <a href="/signup" className="vin-btn btn btn-outline-success  px-3 py-3 mb-4">START USING FOR FREE</a>
              </div>
           
           </div>


          <div className="col-md-5  ">
            <div className="block-7 justify-content-between vin-content-block" >
	            <div className="" >
	            
	            <span className="price" > <span className="number">Talk to a Machine Learning Professional</span></span>
	            <span className="excerpt d-block mt-2">With one-on-one consulting, our Machine Learning experts will provide guidance on how our technology can most benefit your business.</span>
	            
	            
	           
	            
	            <ul className="pricing-text">
	              
	              <li ><strong id="package-price" > </strong> / hour</li>
	              
              </ul>
              <a id="consulting-link"  className="btn btn-success otherbutton px-3 py-3 mb-4 mt-2">REQUEST AN EXPERT</a>
	            </div>
	          </div>   
          </div>
          
    		</div>
    	</div>
    </section>
    );
  }
}

export default SectionTwo;
