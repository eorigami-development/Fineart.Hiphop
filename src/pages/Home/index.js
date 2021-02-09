import React from 'react';
import CarouselComponent from "./../../components/CarouselComponent";
import AuctionLots from "./../../components/AuctionLots";

const Home = () => {
    return (
        <div className="homePage">
            <CarouselComponent />
            <AuctionLots />
        </div>
    )
}

export default Home
