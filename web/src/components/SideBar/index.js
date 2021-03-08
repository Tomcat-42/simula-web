import React, { useState } from "react";

import { Card, ListGroup } from "react-bootstrap";

import "./styles.css";

function CardList(props) {
    const { title } = props;
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };

    const handleSubmission = () => {
        const formData = new FormData();

        formData.append("File", selectedFile);

        fetch("https://localhost:60957/base", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                console.log("Success:", result);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <Card id="sideBar">
            <Card.Header as="h3" className="title">
                {title || "Lista"}
            </Card.Header>
            <Card.Body id="cardBody">
                <ListGroup variant="flush" id="list">
                    <div>
                        <input
                            type="file"
                            name="file"
                            onChange={changeHandler}
                        />
                        {isSelected ? (
                            <div>
                                <p>Arquivo: {selectedFile.name}</p>
                                <p>Tipo: {selectedFile.type}</p>
                                <p>Tamanho: {selectedFile.size}</p>
                                <p>
                                    Última modificação:{" "}
                                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                                </p>
                            </div>
                        ) : (
                            <p>Selecione um arquivo</p>
                        )}
                        <div>
                            <button onClick={handleSubmission}>Submit</button>
                        </div>
                    </div>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default CardList;
