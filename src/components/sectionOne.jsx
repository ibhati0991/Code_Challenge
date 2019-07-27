import React, { Component } from "react";

import ImageOne from "../assets/img/newlogo.png";

class SectionOne extends Component {
  state = {
    heading: "5411 — Your Newest Machine Learning Helper",
    subHeading:
      "Use machine learning (ML) to gain insights for your business.Easy to use with no coding or tech background needed.",
    signUpButton: { title: "SIGN UP — IT’S FREE", url: "signup" },
    demoButton: { title: "Demo", url: "https://www.cocolevio.com/products" }
  };

  render() {
    return (
      <div className="hero-wrap">
        <div className="overlay" />
        <div className="circle-bg" />
        <div className="circle-bg-2" />
        <div className="container-fluid">
          <div className="slider-text d-md-flex align-items-center">
            <div className="vin-header-text one-forth pr-md-4 align-self-md-center"  style={{marginRight: "-15px"}}>
              <h1 className="mb-4">{this.state.heading}</h1>
              <p className="mb-md-5 mb-sm-3">{this.state.subHeading}</p>
              <p>
                <a
                  href={this.state.signUpButton.url}
                  className="btn btn-primary cocobutton px-4 py-3"
                >
                  {this.state.signUpButton.title}
                </a>

                <a
                  href={this.state.demoButton.url}
                  className="btn btn-outline-white  px-3 py-3 ml-3"
                  style={{borderRadius: "5px",paddingTop: "0.7rem 0"}}
                >
                  {this.state.demoButton.title}
                </a>
              </p>
            </div>
            <div className="one-half align-self-md-end align-self-sm-center" style={{textAlign: "right"}}>
              <img
                src={ImageOne}
                className="img-fluid  img"
                style={{
                  height: "auto",
                  width: "auto",
                  maxHeight: "500px",
                  marginRight: "-25px",
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionOne;
