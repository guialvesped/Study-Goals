import React from "react";
import style from "./relogio.module.scss"
interface Props {
    tempo: number
}
export default function Relogio({tempo = 0}: Props){
    const minutos = Math.floor(tempo / 60);
    const segundo = tempo % 60;
    const [minutoDezena , minutoUnidade] = String(minutos).padStart(2,'0');
    const [segundoDezena , segundoUnidade] = String(segundo).padStart(2, '0');
    return (
        <React.Fragment>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </React.Fragment>
    )
}