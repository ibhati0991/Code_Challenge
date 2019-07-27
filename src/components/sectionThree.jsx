import React, { Component } from "react";

import ImageOne from "../assets/img/screenimage1.png";

class SectionThree extends Component {
  state = {
    title: "Data analysis simplified.",
    subtitle: "",
    items: [
      "Keep track of your work in an organized dashboard",
      "Have full control of where your data lives",
      "Make unlimited models and predictions",
      "Get your team together on the same library of Machine Learning models",
      "Get guidance to maximize model potential with the consulting package",
      "Take advantage of image classification"
    ]
  };
  render() {
    return (
      <section
        className="ftco-section text-white"
        style={{ backgroundColor: "#29CB7E" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-items-center ">
              <div className="tab-content " id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-nextgen">
                  <div className="d-md-flex">
                    <div className="one-forth align-self-center">
                      <img src={ImageOne} className="img-fluid" alt="" />
                    </div>
                    <div className="one-half ml-md-5 align-self-center vin-width-40">
                      <h2
                        className="mb-4 text-white"
                        style={{
                          fontWeight: "bold",
                          fontSize: "2.3rem"
                        }}
                      >
                        {this.state.title}
                      </h2>
                      <ul
                        className="pricing-text"
                        style={{ paddingLeft: "15px" }}
                      >
                        {this.state.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
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
