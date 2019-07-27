import React, { Component } from "react";

import Arrow from "../assets/img/greenArrow.png";


class SectionTwo extends Component {
  state = {
    columnOne: {
      title:
        "Start using our alpha release for free to see how Machine Learning can improve your day to day operations",
      subTitle:
        "Take advantage of the cutting edge technology that Machine Learning has to offer.",
      items: [
        "Get highly accurate algorithms that give predictions for problems you’re interested in solving",
        "Train models with your data to tailor fit algorithms to your needs",
        "Receive insight into what your data says about your operations"
      ],
      button: { title: "START USING FOR FREE", url: "sign-up" }
    },
    columnTwo: {
      title: "Talk to a Machine Learning Professional",
      subTitle:
        "With one-on-one consulting, our Machine Learning experts will provide guidance on how our technology can most benefit your business.",
      button: { title: "REQUEST AN EXPERT", url: "" }
    }
  };

  render() {
    return (
      <section
        className="ftco-section vin-ftco"
        style={{
          backgroundImage: "url(" + Arrow + ")"
        }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-md-2 " />
            <div className="col-md-5 ">
              <div className="media-body">
                <h3
                  className="heading"
                  style={{ fontWeight: "500", fontSize: "18px" }}
                >
                  {this.state.columnOne.title}
                </h3>
                <p>{this.state.columnOne.subTitle} </p>
                <ul className="pricing-text" style={{ paddingLeft: "15px" }}>
                  {this.state.columnOne.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <a
                  href={this.state.columnOne.button.url}
                  className="vin-btn btn btn-outline-success  px-3 py-3 mb-4"
                >
                  {this.state.columnOne.button.title}
                </a>
              </div>
            </div>

            <div className="col-md-5  ">
              <div className="block-7 justify-content-between vin-content-block">
                <div
                  style={{
                    display: " table-cell",
                    verticalAlign: "middle",
                    textAlign: "center"
                  }}
                >
                  <span className="price"  >
                    <span className="number" style={{
                        color: "black",
                        fontSize: "23px",
                      }}>{this.state.columnTwo.title}</span>
                  </span>
                  <span
                    className="excerpt d-block mt-2"
                    style={{
                      textAlign: "left",
                      color: "#81919a"
                    }}
                  >
                    {this.state.columnTwo.subTitle}
                  </span>

                  <ul className="pricing-text">
                    <li
                     
                    >
                      <strong
                        id="package-price"
                        style={{
                          color: "#29CB7E",
                          fontWeight: "bold"
                        }}
                      >
                        {" "}
                      </strong>{" "}
                      / hour
                    </li>
                  </ul>
                  <a
                    id="consulting-link"
                    href={this.state.columnTwo.button.url}
                    className="btn btn-success otherbutton px-3 py-3 mb-4 mt-2"
                    style={{
                      padding: "0.35rem 1.5rem 1.5rem 0",
                      marginBottom: "0"
                    }}
                  >
                    {this.state.columnTwo.button.title}
                  </a>
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
