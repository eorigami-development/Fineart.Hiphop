import React from 'react';
import { Card, Col, Row, Button } from "react-bootstrap";
import LotBigDaddy from "./../../../assets/LotBigDaddy.jpg";
import bidIcon from "./../../../assets/bidIcon.svg";
import "./styles.css";

const AuctionCardMatrix = () => {
    return (
        <Card sm="3">
            <Button className="lotBtn">Lot 1</Button>
            <Card.Img variant="top" src={LotBigDaddy} />
            <Card.Body>
                <Card.Title>The Collection of Big Daddy Kane</Card.Title>
                <Row className="priceBidRow">
                    <Col sm="8" className="priceEstimate">
                        <p className="estimate">Estimate</p>
                        <p className="price">USD 8000 - USD 12000</p>
                    </Col>
                    <Col sm="4" className="bitBtnContainer">
                        <Button className="bidBtn">
                            <img src={bidIcon} alt="Bid" className="bidIcon" />
                            <span className="bidBtnText">Bid</span>
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default AuctionCardMatrix
