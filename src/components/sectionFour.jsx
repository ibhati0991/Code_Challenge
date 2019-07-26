import React, { Component } from "react";

import Computer from '../assets/img/computer.png'


class SectionFour extends Component {
  state = {};
  render() {
    return (
        <section className="ftco-section ">
    	<div className="container">
    		
    		<div className="row">
          
          <div className="col-md-12 align-items-center">
            
            <div className="tab-content " id="v-pills-tabContent">

              <div className="tab-pane fade show active" id="v-pills-nextgen" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
              	<div className="d-md-flex">
	              	
	              	<div className="one-half ml-md-5 text-left vin-width-40">
		                <h1 className="mb-4" >Tailor your models to fit your needs.</h1>
		              	<ul className="pricing-text">

                      <li>Learn how to build and train models</li>
                      <li>Start understanding your data on a new level </li>
                      <li>Get fast and precise predictions</li>
                      
                     
                    </ul> 
                    <a href="/signup" className="vin-btn-block btn btn-success otherbutton px-5 py-3 mb-4 mt-4">START USING FOR FREE</a>
                  </div>

                  <div className="one-forth ml-5 align-self-center">
	              		<img src={Computer} className="img-fluid" alt=""/>
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

export default SectionFour;
