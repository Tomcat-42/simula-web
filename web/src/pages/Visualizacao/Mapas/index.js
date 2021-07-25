import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Card } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Mapa from "../../../components/Mapa/";
import CardList from "../../../components/CardList/";
import LayerItem from "../../../components/LayerItem";
import MapContext from '../../../context/MapContext'; 
import api from '../../../services/api';
import ModalMenuOpcoes from "../../../components/ModalMenuOpcoes";
import ModalSelectSimulacao from "../../../components/ModalSelectSimulacao";
import CardListLayers from "../../../components/CardListLayers";

import {
    faLayerGroup
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const VisualizacaoMapas = (props) => {
    const {
        simulacao
    } = props;
    
    const [ mainMenuOpen, setMainMenuOpen]   = useState(false);
    const [ selectSimulacaoOpen, setSelectSimulacaoOpen]   = useState(false);

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

    function carregarSimulacao(){
        setMainMenuOpen(false);
        setSelectSimulacaoOpen(true);
    }

    const functionsMenu = {
        carregarSimulacao : carregarSimulacao
    };

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
                            <button 
                                className="options-button"
                                onClick={()=>setMainMenuOpen(true)}
                            >
                                <span>Opções</span>
                                <FontAwesomeIcon icon={faTools} />
                            </button>
                        </Card>
                        <CardListLayers />
                    </Col>
                </Row>
            </Container>

            {/* Modais  */}
            <ModalMenuOpcoes
                show = {mainMenuOpen}
                onHide={()=> setMainMenuOpen(false)}
                functionsMenu = {functionsMenu}
            />
            <ModalSelectSimulacao
                show = {selectSimulacaoOpen}
                onHide={()=> setSelectSimulacaoOpen(false)}
            />
        </MapContext>
    );
}
export default VisualizacaoMapas;

