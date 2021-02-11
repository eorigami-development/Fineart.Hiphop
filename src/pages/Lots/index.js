import React from 'react';
import FilterComponent from "./../../components/FilterComponent";
import AuctionCardMatrix from "./../../components/AuctionLots/AuctionCardMatrix";
import { Tabs, Tab, Row, Col, CardDeck } from 'react-bootstrap';
import "./styles.css"

const Lots = () => {
    return (
        <div className="lotsContainer">
            <Row className="tabsRow">
                <Col sm="7" className="tabsColumn">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="lots" title="Browse Lots (108)">
                            {/* <Sonnet /> */}
                        </Tab>
                        <Tab eventKey="overview" title="Overview">
                            {/* <Sonnet /> */}
                        </Tab>
                        <Tab eventKey="auctionDetails" title="Auction Details">
                            {/* <Sonnet /> */}
                        </Tab>
                        <Tab eventKey="coditionSale" title="Conditions of Sale">
                            {/* <Sonnet /> */}
                        </Tab>
                    </Tabs>
                </Col>
                <Col>
                    <span className="sortBy">Sort by</span>
                </Col>
            </Row>
            <Row className="lotsRow">
                <Col sm="3" className="filterByColumn">
                    <FilterComponent />
                </Col>
                <Col sm="9" className="cardMatrix">
                    <CardDeck>
                        <AuctionCardMatrix />
                        <AuctionCardMatrix />
                        <AuctionCardMatrix />
                    </CardDeck>
                </Col>
            </Row>
        </div>
    )
}

export default Lots
