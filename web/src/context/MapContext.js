import React, { createContext, useContext, useState } from 'react';

const  MapContext = createContext();

export default function MapProvider({children}){
    const [layers, setLayers] = useState([]);

    return (
        <MapContext.Provider
            value = {{
                layers,
                setLayers
            }}
        >
            {children}
        </MapContext.Provider>
    )
}

export function useLayers(){
    const context = useContext(MapContext);
    if (!context) throw new Error("useLayers precisa ser usado dentro de MapProvider");
    const { layers, setLayers } = context;
    return { layers, setLayers};
}