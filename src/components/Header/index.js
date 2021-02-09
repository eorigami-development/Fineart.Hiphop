import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "./../../assets/Logo.png"
import { Container, Row, Col, Button } from "react-bootstrap";
// import { Button } from 'react-bootstrap';
import "./styles.css"

const Header = ({ loggedIn }) => (
    // <Container>
    <div className="header">
        <Row className="upperHeader">
            <Col sm={{ span: 4, offset: 4 }}>
                <ul className="upperHeaderLinks">
                    <li>How To Sell</li>
                    <li>Contact</li>
                </ul>
            </Col>
        </Row>
        <div className="lowerHeader">
            <Row>
            <img src={Logo} className="App-logo" alt="Logo" sm="4"/>
            <Col sm="4">
                <ul className="lowerHeaderLinks">
                    <li>AUCTIONS</li>
                    <li>SELL</li>
                    <li>ABOUT</li>
                </ul>
            </Col>
            </Row>
        </div>
    </div>

    // </Container> 
    // <div>
    //     <Link to="/" className="link">Home</Link>
    //     <Link to="/about" className="link">About</Link>
    //     <Link to="/contact" className="link">Contact</Link>
    //     { loggedIn && <Link to="/secret" className="link">Secret</Link> }
    // </div>
);

// const mapStateToProps = ( state ) => ( {
//     loggedIn: state.loggedIn,
// } );

export default Header;
