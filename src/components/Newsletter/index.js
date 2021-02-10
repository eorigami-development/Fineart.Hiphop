import React from 'react';
import { Row, Col, Form, InputGroup } from "react-bootstrap"
import "./styles.css"

const Newsletter = () => {
    return (
        <div className="newsletterContainer">
            <Row className="newletterContainerRow">
                <Col sm={{ span: 7, }}>
                    <p className="newsletterHeading">Join our Newsletter</p>
                    <p className="newsletterContent">Stay in the know and get notified of upcoming drops, exclusive group buys, and more!</p>
                </Col>
                <Col sm="4">
                    <InputGroup className="emailBlock">
                        <Form.Control
                            type="email"
                            placeholder="Type Your Email address"
                            className="emailFieldStyles"
                        />
                        <InputGroup.Append>
                            <InputGroup.Text>Join</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </div>
    )
}

export default Newsletter
