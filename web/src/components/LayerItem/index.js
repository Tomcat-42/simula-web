import React, {useState} from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { faSlidersH} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './styles.css';

export default function LayerItem(){
    const [opened, setOpened] = useState(false);

    return(
        <>
            <div className="item-layer">
                <div className="item-title">
                    Titulo da layer
                </div>
                <button onClick={()=>setOpened(!opened)} className="item-options-button">
                    <FontAwesomeIcon icon={faSlidersH} />
                </button>
            </div>
            <Collapse in={opened}>
                <div>
                    teste
                </div>
            </Collapse>
        </>
    );
}