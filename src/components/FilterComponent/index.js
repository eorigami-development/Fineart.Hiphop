import React, { useState } from 'react';
import { Col, Dropdown, Button, ButtonGroup, Form } from "react-bootstrap";
import { ReactComponent as UpArrowIcon } from "./../../assets/upArrow.svg"
import "./styles.css"

const FilterComponent = () => {
    return (
        <div>
            <p className="filterByText">Filter by</p>
            <Col>
                <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle id="artistDropdown" className="artistDropdown">Artist/Maker<UpArrowIcon className="upArrow" /></Dropdown.Toggle>
                    <Dropdown.Menu className="artistMenu">
                            <Form.Check type="checkbox" label="Beastie Boys" />
                            <Form.Check type="checkbox" label="Buddy Esquire" />
                            <Form.Check type="checkbox" label="Chi Modu" />
                            <Form.Check type="checkbox" label="Daniel Arsham" />
                            <Form.Check type="checkbox" label="Dave Muller" />
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </div>
    )
}

export default FilterComponent
