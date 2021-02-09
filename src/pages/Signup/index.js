import React, { Component } from "react";
import "./styles.css";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Row, Col, Container } from "react-bootstrap";
import AccountDetails from "./../../components/AccountDetails"
import PersonalDetails from "./../../components/PersonalDetails";
import IdentityVerification from "./../../components/IdentityVerification";
import AccountSecurity from "./../../components/AccountSecurity";

const activeProgressMeter = {
  1: "progressbarMeter0",
  2: "progressbarMeter25",
  3: "progressbarMeter50",
  4: "progressbarMeter75"
};

const initialValues = {
  currentStep: 1,
  accountChecked: false,
  formValues: {}
};
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      formValues: {
        ...this.state.formValues,
        [e.target.name]: e.target.value
      }
    });
  };

  handleCheck = () => {
    console.log(this.state.checked);
    alert(this.state.checked);
    this.setState({ accountChecked: !this.state.accountChecked });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("All Values:", this.state.formValues);
    this.setState({
      ...initialValues
    });
  };

  next = () => {
    let currentStep = this.state.currentStep;
    if (currentStep !== 4) {
      currentStep = currentStep + 1;
      this.setState({
        currentStep: currentStep
      });
    }
  };

  prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button className="btn btn-secondary" type="button" onClick={this.prev}>
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 4) {
      return (
        <button className="nextButton" type="button" onClick={this.next}>
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    console.log("check values:", this.state);
    const navItems = [
      { id: 1, name: "Account details" },
      { id: 2, name: "Personal details" },
      { id: 3, name: "Identity Verification" },
      { id: 4, name: "Account Security" }
    ];
    return (
      <div id="breadcrumb--progressbar" className="breadcrumbProgressbar">
        {/* <!-- WF-34 (KYC-ID-Scan) Step 1 Breadcrumb Start --> */}
        <div id="mainContentHeader">
          <div className="progressbarHeader">
            <div className="breadcrumb">
              <ul className="breadcrumbNav">
                {navItems.map((item) => (
                  <li
                    className={
                      this.state.currentStep === item.id
                        ? "breadcrumbNavitem"
                        : "linkLight"
                    }
                  >
                    <span className="linkBorder">{item.name}</span>
                    {/* {item.id !== 4 && <FontAwesomeIcon icon="faArrowRight" />} */}
                  </li>
                ))}
                <li className="progressbar">
                  <span className="progressbarPercentage">0% to Complete</span>
                  <div className="progressbarMeter">
                    <span
                      className={`progressbarMeterItem ${
                        activeProgressMeter[this.state.currentStep]
                      }`}
                    ></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="formContainer">
          <AccountDetails
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            formValues={this.state.formValues}
            // email={this.state.email}
          />
          <PersonalDetails
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            // username={this.state.username}
          />
          <IdentityVerification
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            // password={this.state.password}
          />
          <AccountSecurity
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            // password={this.state.password}
          />
          {this.state.currentStep === 4 && (
            <button
              onClick={this.handleSubmit}
              className="btn btn-success btn-block"
            >
              Sign up
            </button>
          )}
          {this.previousButton()}
          <div className="nextContainer">{this.nextButton()}</div>
        </div>
      </div>
    );
  }
}

export default Signup;
