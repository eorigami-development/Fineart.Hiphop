import React from 'react';
import CarouselComponent from "./../../components/CarouselComponent";
import AuctionLots from "./../../components/AuctionLots";
import CategoryCarousel from "./../../components/CategoryCarousel";
import MyAccount from "../../components/MyAccount";

const Home = () => {
    return (
        <div className="ProfilePage">
            {/* <CarouselComponent /> */}
            {/* <AuctionLots /> */}
            {/* <CategoryCarousel /> */}
            <MyAccount/>
        </div>
    )
}

export default Home
