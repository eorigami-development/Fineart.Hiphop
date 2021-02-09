import React from 'react'
import { Card, Button } from "react-bootstrap";
import BigDaddy from "./../../../assets/BigDaddy.jpg"
import "./styles.css"

const AuctionCard = () => {
    return (
        <Card>
            <Card.Img variant="top" src={BigDaddy} />
            <Card.Body>
                <Card.Text>
                    22nd Jan | 4:00 pm IST | Online Auction
                </Card.Text>
                <Card.Title>The Collection of Big Daddy Kane</Card.Title>
                <Button className="browseAuctionBtn">Browse Auction</Button>
            </Card.Body>
        </Card>
    )
}

export default AuctionCard
