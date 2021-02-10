import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "./../../assets/Logo.svg"
import {ReactComponent as SearchIcon} from "./../../assets/Search.svg"
import {ReactComponent as UserIcon} from "./../../assets/User.svg"
import { Row, Col, Button } from "react-bootstrap";
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
        {/* <div className="lowerHeader"> */}
            <Row className="lowerHeader">
                <Col sm="4">
                    <img src={Logo} className="appLogo" alt="Logo" sm="4" />
                </Col>
                <Col sm="4">
                    <ul className="lowerHeaderLinks">
                        <li>AUCTIONS</li>
                        <li>SELL</li>
                        <li>ABOUT</li>
                    </ul>
                </Col>
                <Col sm="4" className="headerIcons">
                    <SearchIcon className="searchIcon"/>
                    <UserIcon />
                </Col>
            </Row>
        {/* </div> */}
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
