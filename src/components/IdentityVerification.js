import React from "react";
import { Form, Row, Col, Container } from "react-bootstrap";

const IdentityVerification = (props) => {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="Some"
          type="text"
          placeholder="Enter password"
          onChange={props.handleChange}
        />
      </div>
    </React.Fragment>
  );
};

export default IdentityVerification;
