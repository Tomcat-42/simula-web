import React from "react";
import { Col, Row, Container, ListGroup } from "react-bootstrap";

import LogoWide from "../../images/logo-wide.png";
import Logo from "../../images/logo.png";

import "./styles.css";

/* Se você estiver refatorando esse código coloque seu nome aqui */
const contribs = [
    "Rogério Luis Rizzi",
    "Claudia Brandelero Rizzi",
    "Wesley Luciano Kaizer",
    "Matheus Nunes Ismael",
    "Pablo Alessandro Santos Hugen",
];

const logo = (
    <picture>
        <source media="(max-width: 575px)" srcSet={Logo} />
        <source media="(min-width: 576px)" srcSet={LogoWide} />
        <img src={LogoWide} alt="logo do simula" />
    </picture>
);

const contribsList = (
    <ListGroup variant="flush" id="contrib-list">
        {contribs.map((contrib, i) => (
            <ListGroup.Item className="contrib-list-item" key={i}>
                {contrib}
            </ListGroup.Item>
        ))}
    </ListGroup>
);

function Sobre() {
    return (
        <Container className="sobre">
            <Row>
                <Col xs={6} md={4}>
                    {logo}
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Equipe de desenvolvimento:</h2>
                    {contribsList}
                </Col>
            </Row>
        </Container>
    );
}

export default Sobre;
