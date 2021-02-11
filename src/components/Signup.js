import React from "react";
import {
  Form,
  Row,
  Col,
  Container,
  Dropdown,
  Button,
  ButtonGroup
} from "react-bootstrap";

const AccountDetails = (props) => {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <Container>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Title
        </Form.Label>
        <Col sm="3">
          <Dropdown as={ButtonGroup} className="dropDown">
            <Button className="dropDownButton">Select title</Button>
            <Dropdown.Toggle split />
            <Dropdown.Menu>
              <Dropdown.Item eventKey="1" active>
                Mr
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">Mr</Dropdown.Item>
              <Dropdown.Item eventKey="2">Mrs</Dropdown.Item>
              <Dropdown.Item eventKey="2">Miss</Dropdown.Item>
              <Dropdown.Item eventKey="2">Sir</Dropdown.Item>
              <Dropdown.Item eventKey="2">Lady</Dropdown.Item>
              <Dropdown.Item eventKey="3">Mx</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Form.Label column sm="3">
          Email
        </Form.Label>
        <Col sm="3">
          <Form.Control
            type="text"
            name="email"
            onChange={props.handleChange}
            value={props.formValues.email}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Given / FirstName
        </Form.Label>
        <Col sm="3">
          <Form.Control
            type="text"
            name="firstName"
            onChange={props.handleChange}
            value={props.formValues.firstName}
          />
        </Col>
        <Form.Label column sm="3">
          Password
        </Form.Label>
        <Col sm="3">
          <Form.Control
            type="password"
            name="inputPassword"
            onChange={props.handleChange}
            value={props.formValues.inputPassword}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Family / LastName
        </Form.Label>
        <Col sm="3">
          <Form.Control
            type="text"
            name="lastName"
            onChange={props.handleChange}
            value={props.formValueslasttName}
          />
        </Col>
        <Form.Label column sm="3">
          Confirm Password
        </Form.Label>
        <Col sm="3">
          <Form.Control
            type="password"
            name="confirmPassword"
            onChange={props.handleChange}
            value={props.formValues.confirmPassword}
          />
        </Col>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          name="accountCheckBox"
          onChange={props.handleCheck}
          defaultChecked={false}
          label="Check this box if you have a FineArt's account number."
        />
 
            <Form.Group as={Col}>
              <Form.Label column htmlFor="accountNumber">
                Confirm Password
              </Form.Label>
              <Col>
                <Form.Control
                  type="number"
                  name="accountNumber"
                  value={props.formValues.accountNumber}
                />
              </Col>
            </Form.Group>

      </Form.Group>
    </Container>
  );
};

export default AccountDetails;
