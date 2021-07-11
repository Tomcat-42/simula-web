import ReactDOM from "react-dom";
import React, {useState, useEffect} from "react";
import logsAPI from "../../services/logsAPI";

import {
    Card,
    ListGroup,
    Row,
    Col,
    Container,
    Dropdown,
} from "react-bootstrap";
import CardList from "../../components/CardList/";

import "./styles.css";

export default function TextArea ()  {
    const [currentFile, setCurrentFile] = useState(""); 
    const [files, setFiles] = useState([]);
    const [lines, setLines] = useState ([]);

    useEffect(() => {
        if (files.length !== 0) return;
        logsAPI.index()
        .then(({files})=>{
            setFiles(files);
        })
        
    }, [files])

    const loadLines = async (file) => {
        setCurrentFile(file);
        logsAPI.show(file)
        .then(({contends})=>{
            setLines(contends);
        })
    };

    return (
        <Container
            id="logsContainer"
            fluid
            className="m-0 p-0 h-100 d-flex flex-column"
        >
            <Row className="m-0 p-0" id="selectRow">
                <Col sm="12" className="m-0 p-3">
                    <Dropdown className="m-0 p-0" drop="right">
                        <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                        >
                            Arquivo
                        </Dropdown.Toggle>

                        <Dropdown.Menu
                            style={{heigth:"auto"}}
                        >
                            {files.map((file, id) => (
                                <Dropdown.Item
                                    key={id}
                                    onClick={(e) =>
                                        loadLines(e.target.innerText)
                                    }
                                >
                                    {file}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row className="m-0 p-0" id="logsRow">
                <Col sm="12" className="m-0 p-3">
                    <CardList title={currentFile} items={lines} />
                </Col>
            </Row>
        </Container>
    );
    
}
