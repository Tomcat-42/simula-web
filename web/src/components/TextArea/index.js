import ReactDOM from "react-dom";
import React from "react";
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

class TextArea extends React.Component {
    state = { current_file: "", files: [], lines: [] };

    componentDidMount() {
        this.loadFiles();
    }

    loadFiles = async () => {
        const { files } = await logsAPI.index();
        console.log(files);
        this.setState({ files });
    };

    loadLines = async (file) => {
        const { lines } = await logsAPI.show(file);
        this.setState({ lines });
    };

    handleFileClick(event) {}

    render() {
        const { files, lines } = this.state;
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

                            <Dropdown.Menu>
                                {files.map((file, id) => (
                                    <Dropdown.Item
                                        key={id}
                                        onClick={(e) =>
                                            this.loadLines(e.target.innerText)
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
                        <CardList title="logs" items={lines} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TextArea;
