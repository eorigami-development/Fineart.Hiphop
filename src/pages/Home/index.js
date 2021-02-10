import React from 'react';
import CarouselComponent from "./../../components/CarouselComponent";
import AuctionLots from "./../../components/AuctionLots";
import CategoryCarousel from "./../../components/CategoryCarousel";

const Home = () => {
    return (
        <div className="homePage">
            <CarouselComponent />
            <AuctionLots />
            <CategoryCarousel />
        </div>
    )
}

export default Home
