import React from "react";

import { Card, ListGroup } from "react-bootstrap";

import "./styles.css";

function CardList(props) {
    const { title, items } = props;
    return (
        <Card id="cardList">
            <Card.Header as="h3" className="title">
                {title || "Lista"}
            </Card.Header>
            <Card.Body id="cardBody">
                <ListGroup variant="flush" id="list">
                    {items.map((item, i) => (
                        <ListGroup.Item key={i}>{item}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default CardList;
