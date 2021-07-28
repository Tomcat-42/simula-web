import React, { useState } from "react";

import { Card, ListGroup, Button, Container } from "react-bootstrap";
import OpcoesCadastro from "../OpcoesCadastro";
import FileUpload from "../FileUpload";

import "./styles.css";

function SideBar(props) {
    const { title } = props;
    return (
        <Card style={{ height: "730px" }} id="sideBar">
            <Card.Header as="h3" className="title">
                {title || "Simulação"}
            </Card.Header>
            <Card.Body id="cardBody">
                <Container>
                    <OpcoesCadastro
                        opcoes={[
                            { name: "Cadastrar Base", func: undefined },
                            { name: "Cadastrar Simulação", func: undefined },
                            { name: "Buscar", func: undefined },
                        ]}
                    />

                    <FileUpload />
                </Container>
            </Card.Body>
        </Card>
    );
}

export default SideBar;
