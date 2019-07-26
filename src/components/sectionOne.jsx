import React, { Component } from "react";

import ImageOne from "../assets/img/newlogo.png"

class SectionOne extends Component {
  state = {};
  render() {
    return (
      <div className="hero-wrap">
        <div className="overlay" />
        <div className="circle-bg" />
        <div className="circle-bg-2" />
        <div className="container-fluid">
          <div
            className="slider-text d-md-flex align-items-center"
          >
            <div className="vin-header-text one-forth pr-md-4 align-self-md-center">
              <h1 className="mb-4">
                5411 — Your Newest Machine Learning Helper
              </h1>
              <p className="mb-md-5 mb-sm-3">
                Use machine learning (ML) to gain insights for your business.
                Easy to use with no coding or tech background needed.
              </p>
              <p>
                <a
                  href="/signup"
                  className="btn btn-primary cocobutton px-4 py-3"
                >
                  SIGN UP — IT’S FREE
                </a>

                <a
                  href="https://www.cocolevio.com/products"
                  className="btn btn-outline-white  px-3 py-3 ml-3"
                >
                  VIEW DEMO
                </a>
              </p>
            </div>
            <div className="one-half align-self-md-end align-self-sm-center">
              <img src={ImageOne} className="img-fluid  img" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionOne;
