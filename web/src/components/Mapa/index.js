import React, { useState, useEffect } from "react";

// Leaflet components
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "./styles.css";

L.Icon.Default.imagePath = "images/";

const Mapa = () => {
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

                <Marker position={[-24.9555, -53.4552]}>
                    <Popup>
                        <div className="point-tooltip">
                            <strong>Teste</strong>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Mapa;
