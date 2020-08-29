import React from "react";
import CardList from "../../../components/CardList/";
import { Row, Col, Container } from "react-bootstrap";

import "./styles.css";

function VisualizacaoMapas() {
    return (
        <Container
            id="visualizacaoMapas"
            fluid
            className="m-0 p-0 h-100 d-flex flex-column"
        >
            <Row className="m-0 p-0" id="visualizacaoRow">
                <Col sm="9" className="m-0 p-3">
                </Col>

                <Col sm="3" className="m-0 p-3">
                    <CardList
                        title="shapes"
                        items={Array(50).fill("sakdnsaldnaslkd")}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default VisualizacaoMapas;