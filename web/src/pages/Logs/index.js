import React from "react";
import TextArea from "../../components/TextArea/";
import { Row, Col, Container } from "react-bootstrap";

import "./styles.css";

function Logs() {
    return (
        <Container
            id="logs"
            fluid
            className="m-0 p-0 h-100 d-flex flex-column"
        >
            <Row className="m-0 p-0 flex-grow-1" id="logsRow">
                <Col sm="12" className="m-0 p-3">
                    <TextArea/>
                </Col>
            </Row>
        </Container>
    );
}

export default Logs;
