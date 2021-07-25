import React from "react";
import "./styles.css";
import SideBar from "././../../components/SideBar";
import DynamicTable from "././../../components/DynamicTable";
import { Row, Col, Container } from "react-bootstrap";

function Simulacao(props) {
    return (
        /* <DynamicTable /> */
        <Col sm="3" className="m-0 p-3">
            <SideBar title=""></SideBar>
        </Col>
    );
}

export default Simulacao;
