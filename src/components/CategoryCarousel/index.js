import React, { useState } from 'react'
import { Carousel, Row, Col, Button } from "react-bootstrap";
import Swag from "./../../assets/Swag.jpg"
import banner from "./../../assets/banner.jpg"
import "./styles.css"

const CategoryCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="categoryCarouselStyles">
            <Carousel data-interval="false" data-pause="hover" activeIndex={index} onSelect={handleSelect}
                className="categorySlideStyles"
            >
                <Carousel.Item>
                    <Row className="categoryCarouselRow">
                        <Col sm="8">
                            <img
                                className="categoryCarouselImages"
                                src={Swag}
                                alt="First slide"
                            />
                        </Col>
                        <Col sm="4">
                            <Carousel.Caption className="categoryCarouselContent">
                                <p className="categoryContentHeading">Avant Arte: New Renaissance</p>
                                <p className="contentShortInfo">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet
                                </p>
                                 <Button className="discoverBtn">Discover</Button>
                            </Carousel.Caption>
                        </Col>
                    </Row>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <Row className="categoryCarouselRow">
                        <Col sm="8">
                            <img
                                className="categoryCarouselImages"
                                src={banner}
                                alt="Second slide"
                            />
                        </Col>
                        <Col sm="4">
                            <Carousel.Caption className="categoryCarouselContent">
                                <p className="categoryContentHeading">Yoyo Arte: New Renaissance</p>
                                <p className="contentShortInfo">
                                    mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet
                                </p>
                            </Carousel.Caption>
                        </Col>
                    </Row>
                </Carousel.Item> */}
                
            </Carousel>
        </div>
    );
}

export default CategoryCarousel
