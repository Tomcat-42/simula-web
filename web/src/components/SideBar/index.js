import React, { useState } from "react";

import { Card, ListGroup, Button } from "react-bootstrap";
import FileUpload from "./../FileUpload";

import "./styles.css";

function SideBar(props) {
    const { title } = props;
    return (
        <Card style={{ height: "730px" }} id="sideBar">
            <Card.Header as="h3" className="title">
                {title || "Simulação"}
            </Card.Header>
            <Card.Body id="cardBody">
                <FileUpload />
            </Card.Body>
        </Card>
    );
}

export default SideBar;
