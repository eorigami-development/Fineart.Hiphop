import React from 'react';
import AuctionCard from './AuctionCard.js';
import { CardDeck } from 'react-bootstrap';
import "./styles.css";

const AuctionLots = () => {
    return (
        <div className="auctionLots">
            <p className="auctionLotsHeading">Upcoming Auctions</p>
            <CardDeck>
                <AuctionCard />
                <AuctionCard />
                <AuctionCard />
            </CardDeck>
        </div>
    )
}

export default AuctionLots
