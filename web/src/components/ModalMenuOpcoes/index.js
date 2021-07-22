import MenuOption from "../MenuOption";
import './styles.css';

import React, { useEffect, useState } from "react";
import { Modal } from 'react-bootstrap';
import {
    faVirus,
    faDrawPolygon,
    faImages
} from "@fortawesome/free-solid-svg-icons";

export default function ModalMenuOpcoes(props){
    const {
        show,
        onHide,
        functionsMenu
    } = props;
    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id="mainMenuModal"
        >
            <div id="mainMenuWrapper">
                <div id="mainMenuBody">
                    <MenuOption
                        name="Carregar Simulação"
                        icon={faVirus} 
                        callFunction={()=>functionsMenu.carregarSimulacao()}
                    />
                    <MenuOption
                        name="Carregar Shape"
                        icon={faDrawPolygon} 
                        callFunction={()=>console.log("teste")}
                    />
                    <MenuOption
                        name="Gerar Imagens"
                        icon={faImages} 
                        callFunction={()=>console.log("teste")}
                    />
                </div>
            </div>
        </Modal>
    )
}