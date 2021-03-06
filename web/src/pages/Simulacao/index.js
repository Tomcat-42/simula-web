import React from "react";
import "./styles.css";
import SideBar from "././../../components/SideBar";
import { Row, Col, Container } from "react-bootstrap";

function Simulacao(props) {
    return (
        <Col sm="3" className="m-0 p-3">
            <SideBar title="Upload de Base"></SideBar>
        </Col>
    );
}

export default Simulacao;
