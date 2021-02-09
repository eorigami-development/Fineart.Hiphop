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

const PersonalDetails = (props) => {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <Container>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Full Name
        </Form.Label>
        <Col sm="3">
          <Form.Control
            disabled
            type="text"
            name="fullName"
            onChange={props.handleChange}
            // value={props.formValues.firstName}
          />
        </Col>
        <Form.Label column sm="3">
          Email
        </Form.Label>
        <Col sm="3">
          <Form.Control
            disabled
            type="text"
            name="email"
            onChange={props.handleChange}
            // value={props.formValues.email}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Date of Birth
        </Form.Label>
        <Dropdown as={ButtonGroup} className="dropDownMonth">
          <Button className="dropDownButton">Month</Button>
          <Dropdown.Toggle split />
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1" active>
              January
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} className="dropDownDay">
          <Button className="dropDownButton">Day</Button>
          <Dropdown.Toggle split />
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1" active>
              1
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} className="dropDownYear">
          <Button className="dropDownButton">Year</Button>
          <Dropdown.Toggle split />
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1" active>
              2021
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
      <hr />
      <h6 className="formHeadings">Phone Number</h6>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Country
        </Form.Label>
        <Col sm="3">
          <Dropdown as={ButtonGroup} className="dropDown">
            <Button className="dropDownButton">Select country</Button>
            <Dropdown.Toggle split />
            <Dropdown.Menu>
              <Dropdown.Item eventKey="1" active>
                India
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Primary Phone
        </Form.Label>
        <Form.Control className="mobileCountryCode" disabled value={"+91"} />
        <Form.Control
          className="mobileNumber"
          // style={{ width: "20%" }}
          type="text"
          name="primaryPhone"
          onChange={props.handleChange}
          // value={props.formValues.primaryPhone}
        />
        <Form.Label className="extensionLabel">Ext.</Form.Label>
        <Form.Control
          className="extensionInput"
          // style={{ width: "20%" }}
          type="text"
          name="extenstion"
          onChange={props.handleChange}
          // value={props.formValues.extenstion}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          name="mobilePhone"
          onChange={props.handleCheck}
          defaultChecked={props.accountChecked}
          label="This is a mobile phone."
        />
      </Form.Group>
      <hr />
      <h6 className="formHeadings">Primary Residential Address</h6>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Country
        </Form.Label>
        <Col sm="3">
          <Dropdown as={ButtonGroup} className="dropDown">
            <Button className="dropDownButton">Select country</Button>
            <Dropdown.Toggle split />
            <Dropdown.Menu>
              <Dropdown.Item eventKey="1" active>
                India
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Form.Label column sm="3">
          City
        </Form.Label>
        <Col sm="3">
          <Form.Control
            type="text"
            name="city"
            onChange={props.handleChange}
            // value={props.formValues.city}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Building Name & Street
        </Form.Label>
        <Col sm="3">
          <Form.Control
            type="text"
            name="building"
            onChange={props.handleChange}
            // value={props.formValues.building}
          />
        </Col>
        <Form.Label column sm="3">
          State
        </Form.Label>
        <Col sm="3">
          <Dropdown as={ButtonGroup} className="dropDown">
            <Button className="dropDownButton">Select state</Button>
            <Dropdown.Toggle split />
            <Dropdown.Menu>
              <Dropdown.Item eventKey="1" active>
                Telangana
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Address Line 2
        </Form.Label>
        <Col sm="3">
          <Form.Control
            type="addressLine2"
            name="building"
            onChange={props.handleChange}
            // value={props.formValues.addressLine2}
          />
        </Col>
        <Form.Label column sm="3">
          Postal Code
        </Form.Label>
        <Col sm="3">
          <Form.Control
            type="postalCode"
            name="building"
            onChange={props.handleChange}
            // value={props.formValues.postalCode}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Address Line 3
        </Form.Label>
        <Col sm="3">
          <Form.Control
            type="addressLine3"
            name="building"
            onChange={props.handleChange}
            // value={props.formValues.addressLine3}
          />
        </Col>
      </Form.Group>
    </Container>
  );
};

export default PersonalDetails;
