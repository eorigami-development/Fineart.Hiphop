import React from "react";
import { Form, Row, Col, Container } from "react-bootstrap";

const AccountSecurity = (props) => {
  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="fourth">Fourth</label>
        <input
          className="form-control"
          id="fourth"
          name="fourth"
          type="text"
          placeholder="Fourth"
          onChange={props.handleChange}
        />
      </div>
    </React.Fragment>
  );
};

export default AccountSecurity;
