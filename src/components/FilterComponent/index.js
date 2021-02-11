import React, { useState } from 'react';
import { Col, Dropdown, Button, ButtonGroup, Form } from "react-bootstrap";
import { ReactComponent as UpArrowIcon } from "./../../assets/upArrow.svg"
import "./styles.css"

const FilterComponent = () => {
    const [open, setOpen] = useState(false)

    // const handleToggle = () => {
    //     setActive(!isActive);
    // };
    return (
        <div>
            <p className="filterByText">Filter by</p>
            <Col>
                <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle id="artistDropdown" className="artistDropdown">Artist/Maker<UpArrowIcon className="upArrow" /></Dropdown.Toggle>
                    <Dropdown.Menu className="artistMenu">
                        {/* <Dropdown eventKey="1"> */}
                            <Form.Check type="checkbox" label="Beastie Boys" />
                            <Form.Check type="checkbox" label="Buddy Esquire" />
                            <Form.Check type="checkbox" label="Chi Modu" />
                            <Form.Check type="checkbox" label="Daniel Arsham" />
                            <Form.Check type="checkbox" label="Dave Muller" />
                            
                        {/* </Dropdown> */}
                        {/* <Dropdown eventKey="2">Another action</Dropdown>
                        <Dropdown eventKey="3" active>
                            Active Item
                        </Dropdown>
                        <Dropdown.Divider />
                        <Dropdown eventKey="4">Separated link</Dropdown > */}
                    </Dropdown.Menu>
                </Dropdown>
                {/* <button
                    aria-expanded={open === true ? "true" : "false"}
                    className={open === true ? "active" : ""}
                    onClick={() => setOpen(!open)}>
                    Toggle
                 </button>
                <ul id="test" className={open ? "show" : ""}>
                    <li>
                        <a href="/some-link">Some Link</a>
                    </li>
                 </ul> */}
            </Col>
        </div>
    )
}

export default FilterComponent
