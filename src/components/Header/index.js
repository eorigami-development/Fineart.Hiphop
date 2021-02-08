import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "./../../assets/Logo.png"
import {Container, Row, Col, Button} from "react-bootstrap";
// import { Button } from 'react-bootstrap';
import "./styles.css"

const Header = ( { loggedIn } ) => (
    // <Container>
    <div className="header" col-md-3>
        <Row className="upperHeader" sm="6">
            <ul column md="6">
                <li>how to sell</li>
                <li>contact</li>
            </ul>
        </Row>
        <div className="lowerHeader">
        <img src={Logo} className="App-logo" alt="Logo" />
            lower 
        </div>
        <Button variant="primary">Test</Button>
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
