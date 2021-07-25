import React from 'react'

import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardList from "../CardList";

import { useLayersStackIcons }from '../../context/MapContext';

import './styles.css';

export default function CardListLayers() {

    // Contexto do mapa
    const { layersStackIcon, setLayersStackIcon } = useLayersStackIcons();

    return (
        <div id="cardListLayers">
            <CardList
                title={ 
                    <>
                        Layers 
                        <FontAwesomeIcon 
                            style={{marginLeft:"10px"}} 
                            icon={faLayerGroup}
                        />
                    </> 
                }
                className="layerItem"
                items={layersStackIcon.map(item=>item)}
            />
        </div>
    )
}
