import React, { useEffect, useState } from "react";
import CardList from "../../../components/CardList/";
import Mapa from "../../../components/Mapa/";
import { Row, Col, Container } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Card } from "react-bootstrap";

import MapContext from '../../../context/MapContext'; 
import api from '../../../services/api';

import "./styles.css";

const VisualizacaoMapas = (props) => {
    const {
        simulacao
    } = props;

    const [ pontos, setPoints]   = useState(null);
    const [ nCiclos, setNCiclos] = useState(0);
    const [ cicloAt, setCicloAt] = useState(0);


    useEffect(()=>{
        if (pontos) return;

        // apiSimulacoes.get("simulacoes", {headers:{"Content-Type" : "application/json"}})
        // .then(data=>{
        //     console.log("==============")
        //     console.log(data)
        // })

        // const { ciclos, points, codigos } = simulacao;
        // setNCiclos(ciclos);
        // let newPontos = [];
        // let i = 0;
        // for (let ponto of points){
        //     if(codigos[i] === 0) continue;
        //     newPontos.push(
        //         <Marker position={[parseInt(ponto[0]), parseInt(ponto[1])]}>
        //             <Popup>
        //                 <div className="point-tooltip">
        //                     <strong>Teste</strong>
        //                 </div>
        //             </Popup>
        //         </Marker>
        //     )
        //     i++;
        // }
        // setPoints(newPontos);
    });

    return (
        <MapContext>
            <Container
                id="visualizacaoMapas"
                fluid
                className="m-0 p-0 h-100 d-flex flex-column"
            >
                <Row className="m-0 p-0" id="visualizacaoRow">
                    <Col sm="9" className="m-0 p-0 subItemVisualizacao">
                        <Mapa
                            title="Mapa"
                            pontos={pontos}
                        />
                    </Col>
                    <Col sm="3" className="m-0 p-1 subItemVisualizacao">
                        <Card id="toolsCard">
                            teste
                        </Card>
                        <div id="cardListLayers">
                            <CardList
                                title="shapes"
                                className="layerItem"
                                items={Array(30).fill("")}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </MapContext>
    );
}

export default VisualizacaoMapas;
