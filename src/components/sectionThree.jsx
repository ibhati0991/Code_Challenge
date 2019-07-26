import React, { Component } from "react";

import ImageOne from '../assets/img/screenimage1.png'

var sectionThreeStyle={
    backgroundColor:'#29CB7E',
}

class SectionThree extends Component {
  state = {};
  render() {
    return (
        <section className="ftco-section text-white" style={sectionThreeStyle}>
    	<div className="container">
    		
    		<div className="row">
          
          <div className="col-md-12 align-items-center ">
            
            <div className="tab-content " id="v-pills-tabContent">

              <div className="tab-pane fade show active" id="v-pills-nextgen" >
              	<div className="d-md-flex">
	              	<div className="one-forth align-self-center">
	              		<img src={ImageOne} className="img-fluid" alt=""/>
	              	</div>
	              	<div className="one-half ml-md-5 align-self-center vin-width-40" >
		                <h2 className="mb-4 text-white">Data analysis simplified.</h2>
                  <ul className="pricing-text" >
                    <li>Keep track of your work in an organized dashboard</li>
                    <li>Have full control of where your data lives</li>
                    <li>Make unlimited models and predictions</li>
                    <li>Get your team together on the same library of Machine Learning models</li>
                    <li>Get guidance to maximize model potential with the consulting package</li>
                    <li>Take advantage of image classification</li>
                   
                  </ul>  
                  </div>
	              </div>
              </div>

              
            </div>
          </div>
        </div>
    	</div>
    </section>
    );
  }
}

export default SectionThree;
