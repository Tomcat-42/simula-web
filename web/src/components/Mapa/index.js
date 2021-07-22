import React, { useState, useEffect } from "react";

// Leaflet components
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { useLayers } from '../../context/MapContext';

import "./styles.css";

L.Icon.Default.imagePath = "images/";


const Mapa = (props) => {
    const {
        points
    } = props;

    // Contexto do mapa
    const { layers, setLayers } = useLayers();


    useEffect(()=>{
        console.log("======================= Teste")
        console.log(layers)
    })

    return (
        <div id="wrapper-mapa">
            <MapContainer
                center={[-24.9555, -53.4552]}
                zoom={13}
                scrollWheelZoom={true}
                style={{width:"100%", heigth:"100%"}}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {layers || <></>}
                <Marker key={"point"} position={[-24.98238765634435, -53.49794927250904]}></Marker>
                
                {/* {
                    layers.map(layer=>
                        layer    
                    )
                } */}
            </MapContainer>
        </div>
    );
};

export default Mapa;
