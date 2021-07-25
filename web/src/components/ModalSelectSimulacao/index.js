import { Modal, FormCheck } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import simulacoesAPI  from '../../services/SimulacoesAPI';
import { useContextLoaded, useAddSimulation } from '../../context/MapContext';

import './styles.css';

export default function ModalSelectSimulacao(props){
    const {
        show,
        onHide
    } = props;

    // Contexto do mapa
    const { addSimulation }   = useAddSimulation();
    const { setcontextLoaded }                  = useContextLoaded()

    const [ nomeSimulacoes, setNomeSimulacoes ] = useState([]);
    const [ loaded, setLoaded ]                 = useState(false);
    const [ simulacaoSel, setSimulacaoSel ]     = useState('');

    useEffect(() => {
        if(loaded) return;
        simulacoesAPI.all()
        .then(data=>{
            setNomeSimulacoes(data);
            setLoaded(true);
            console.log(data);
        })
    })

    function updateSimulacao(){
        //setcontextLoaded(false);
        addSimulation(simulacaoSel);
    }

    return(
        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show = {show}
            onHide = {onHide}
        >
            <div className="modal-simulacoes-body">
                <div className="select-simulacoes">
                    {
                        nomeSimulacoes.map((nome, i)=>
                            <div 
                                className={
                                    "item-select-simulacoes " + (nome==simulacaoSel?"selected-item-simulacao":"")
                                }
                                onClick={()=>setSimulacaoSel(nome)}
                            >
                                <span>
                                    {nome}
                                </span>
                            </div>
                        )
                    }
                </div>
                <div className="wrapper-button-select">
                    <button 
                        className="buttons-select-simulacao"
                        onClick={updateSimulacao}
                    >
                        <span>Carregar</span>
                    </button>
                </div>
            </div>
        </Modal>
    )
}