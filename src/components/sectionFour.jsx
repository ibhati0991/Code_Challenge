import React, { Component } from "react";

import Computer from "../assets/img/computer.png";

class SectionFour extends Component {
  state = {
    title: "Tailor your models to fit your needs.",
    subtitle: "",
    items: [
      "Learn how to build and train models",
      "Start understanding your data on a new level",
      "Get fast and precise predictions"
    ],
    button: { title: "START USING FOR FREE", url: "sign-up" }
  };
  render() {
    return (
      <section className="ftco-section ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-items-center">
              <div className="tab-content " id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-nextgen"
                  role="tabpanel"
                  aria-labelledby="v-pills-nextgen-tab"
                >
                  <div className="d-md-flex">
                    <div className="one-half ml-md-5 text-left vin-width-40">
                      <h1 className="mb-4">{this.state.title}</h1>
                      <ul className="pricing-text">
                        {this.state.items.map((item,index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <a
                        href={this.state.button.url}
                        className="vin-btn-block btn btn-success otherbutton px-5 py-3 mb-4 mt-4"
                      >
                        {this.state.button.title}
                      </a>
                    </div>

                    <div className="one-forth ml-5 align-self-center">
                      <img src={Computer} className="img-fluid" alt="" />
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
