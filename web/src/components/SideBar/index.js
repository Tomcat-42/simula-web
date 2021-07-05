import React, { useState } from "react";

import { Card, ListGroup, Button } from "react-bootstrap";

import "./styles.css";

function CardList(props) {
    const { title } = props;
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        const formData = new FormData();

        formData.append("file", selectedFile);
        formData.append("nome_exibicao", "Teste Nome");

        fetch("http://localhost:60957/base", {
            method: "POST",
            body: formData,
            mode: "no-cors",
        })
            // .then((response) => response.json())
            .then((result) => {
                console.log("Success:", result);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <Card style={{ height: "45rem" }} id="sideBar">
            <Card.Header as="h3" className="title">
                {title || "Lista"}
            </Card.Header>
            <Card.Body id="cardBody">
                {/* <ListGroup variant="flush" id="list"> */}
                    <div clasName="container">
                        <div className="button-wrap">
                            <label class="button" for="upload">
                                Selecionar Arquivo
                            </label>
                            <input
                                id="upload"
                                type="file"
                                name="Selecionar base"
                                onChange={changeHandler}
                            />
                            {/* <FormGroup> */}
                            {/*     <FormControl */}
                            {/*         id="fileUpload" */}
                            {/*         type="file" */}
                            {/*         accept=".pdf" */}
                            {/*         onChange={changeHandler} */}
                            {/*         style={{ display: "none" }} */}
                            {/*     /> */}
                            {/* </FormGroup> */}
                            {isFilePicked ? (
                                <div>
                                    <p>Arquivo: {selectedFile.name}</p>
                                    {/* <p>Tipo: {selectedFile.type}</p> */}
                                    {/* <p>Tamanho: {selectedFile.size}</p> */}
                                    {/* <p> */}
                                    {/*     Última modificação:{" "} */}
                                    {/*     {selectedFile.lastModifiedDate.toLocaleDateString()} */}
                                    {/* </p> */}
                                </div>
                            ) : (
                                <p>Selecione um arquivo</p>
                            )}
                        </div>
                        <div>
                            <Button
                                id="button-submit"
                                variant="success"
                                onClick={handleSubmission}
                            >
                                Enviar
                            </Button>
                        </div>
                    </div>
                {/* </ListGroup> */}
            </Card.Body>
        </Card>
    );
}

export default CardList;
