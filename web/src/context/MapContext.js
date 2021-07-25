import React, { createContext, useContext, useState, useEffect } from 'react';
import { Marker, Popup } from "react-leaflet";

import simulacoesAPI from '../services/SimulacoesAPI';
import LayerItem from '../components/LayerItem';
 
const  MapContext = createContext();

export default function MapProvider({children}){
    const [layers, setLayers]                   = useState([]);
    const [layersStackIcon, setLayersStackIcon] = useState([]);
    const [layersData, setLayersData]           = useState({});
    const [contextLoaded, setcontextLoaded]     = useState(false);
    
    function updateLayers(){

    }

    useEffect(()=>{
        if ( contextLoaded ) return;
        setcontextLoaded(true);
        console.log("tá aqui")

        console.log(layersData)

        for( let layer in layersData){
            let { ciclo } = layersData[layer];
            let { coordenadas, codigosAgentes } = layersData[layer].data;
            let points = [];
            coordenadas.map((coordenada, i)=>{
                if(codigosAgentes[ciclo]!= 0)
                    points.push(
                        <Marker key={"point" + i} position={coordenada}></Marker>
                    )
            })
            // Alterar para mudar apenas a camada referente a simulação
            setLayers(points)
        } 
    })

    function updateCicloSimulacao(simulacao, ciclo){
        let simulacaoData = layersData[simulacao];
        simulacaoData.ciclo = ciclo;

        setLayersData(prev=>({
            ...prev,
            [simulacao] : simulacaoData
        }));
    }

    function addSimulation(name){
        simulacoesAPI.index(name)
        .then(data=>{
            setLayersData(prev=>({
                ...prev,
                [name] : {type: "simulacao", ciclo: 0,  data:  data}
            }));
            setLayersStackIcon(prev=>[
                ...prev,
                <LayerItem
                    title= {name}
                />
            ])
            setcontextLoaded(false);
        })
    }

    return (
        <MapContext.Provider
            value = {{
                layers,
                setLayers,
                contextLoaded,
                setcontextLoaded,
                addSimulation,
                layersStackIcon,
                setLayersStackIcon
            }}
        >
            {children}
        </MapContext.Provider>
    )
}

export function useLayers(){
    const context = useContext(MapContext);
    if (!context) throw new Error("useLayers precisa ser usado dentro de MapProvider");
    const  { layers, setLayers } = context;
    return { layers, setLayers};
}

export function useContextLoaded(){
    const context = useContext(MapContext);
    if (!context) throw new Error("useLayers precisa ser usado dentro de MapProvider");
    const  { contextLoaded, setcontextLoaded } = context;
    return { contextLoaded, setcontextLoaded};
}

export function useAddSimulation(){
    const context = useContext(MapContext);
    if (!context) throw new Error("useLayers precisa ser usado dentro de MapProvider");
    const  { addSimulation } = context;
    return { addSimulation };
}

export function useLayersStackIcons(){
    const context = useContext(MapContext);
    if (!context) throw new Error("useLayers precisa ser usado dentro de MapProvider");
    const  { layersStackIcon, setLayersStackIcon } = context;
    return { layersStackIcon, setLayersStackIcon };
}
