import React from 'react';
import FooterLogo from "./../../assets/FooterLogo.svg"
import facebook from "./../../assets/facebook.svg"
import twitter from "./../../assets/twitter.svg"
import youtube from "./../../assets/youtube.svg"
import instagram from "./../../assets/instagram.svg"
import Line from "./../../assets/Line.svg"
import { Row, Col, Button } from "react-bootstrap";
import "./styles.css";

const Footer = () => {
    return (
        <div className="footerContainer">
            <Row className="topFooter">
                <Col sm="3">
                    <img src={FooterLogo} className="appLogo" alt="Logo" sm="4" />
                </Col>
                <Col sm="8">
                    <ul className="topFooterLinks">
                        <li>ABOUT</li>
                        <li style={{ marginRight: 86 }}>HOW TO SELL</li>
                        <li style={{ marginRight: 30 }}>Blog</li>
                        <li style={{ marginRight: 30 }}>Terms & Privacy</li>
                        <li>Help</li>
                    </ul>
                </Col>
            </Row>
            <Row className="socialIcons">
                <Col sm="4" className="socialIconsColumn">
                    <img src={youtube} alt="youtube" />
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                    <img src={facebook} alt="facebook" />
                </Col>
            </Row>
            <Row className="breakLine">
                <img src={Line} alt="Line" />
            </Row>
            <Row className="footerBottom">
                <span className="footerBottomLinks copyRight">© 2021 Fineart.hiphop</span>
                <ul className="footerBottomLinks">
                    <li>Privacy policy</li>
                    <li>Terms and Condition</li>
                    <li>Sitemap</li>
                </ul>
            </Row>
        </div>
    )
}

export default Footer
