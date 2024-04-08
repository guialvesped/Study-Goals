import React, { useEffect, useState } from "react";
import Botao from "../Botao";
import Relogio from "./Relogio/relogio";
import style from "./cronometro.module.scss"
import { tempoParaSegundo } from "../../common/time";
import { ITarefa } from "../../types/tarefa";


interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props){
    const [tempo, setTempo] = useState<number>(tempoParaSegundo(String(selecionado?.tempo)));
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundo(selecionado.tempo));
        }
    },[selecionado])
    function regressiva(contador : number = 0){
        setTimeout(() => {
            if (contador > 0){
                setTempo(contador - 1)
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000)
    }   
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro.</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo = {tempo}/>
            </div>
            <Botao texto="Começar" onClick={() => regressiva(tempo)}></Botao>
        </div>
    )
}