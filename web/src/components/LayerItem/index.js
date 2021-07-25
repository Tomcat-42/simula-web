import React, {useState} from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { faSlidersH, faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './styles.css';

export default function LayerItem(props){
    const {
        title,
        type 
    } = props;
    const [opened, setOpened] = useState(false);

    return(
        <>
            <div className="item-layer">
                <div className="item-title">
                    {title || "Falha ao Carregar"}
                </div>
                <button onClick={()=>setOpened(!opened)} className="item-options-button">
                    <FontAwesomeIcon icon={faSlidersH} />
                </button>
            </div>
            <Collapse in={opened}>
                <div className="box-options-layer-wrapper">
                    <div className="box-options-layer">
                        <div className="container-controller-ciclo">
                            <div className="title-ciclos">
                                Ciclos
                            </div>
                            <div className="wrapper-menu-ciclo">
                                <div className="contador-ciclo-layer">
                                    0
                                </div>
                                <button className="item-options-button">
                                    <FontAwesomeIcon icon={faCaretLeft} />
                                </button>
                                <button className="item-options-button">
                                    <FontAwesomeIcon icon={faCaretRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Collapse>
        </>
    );
}