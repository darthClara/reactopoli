import React from "react";
import "./StileAngoli.scss"
import UtenteAutomatico from "../utente/UtenteAutomatico"

export default function StileAngoli(props) {
    return (
        <div className={`stileAngoliWrapper ` + (`stileAngoliWrapper${props.tema}`)}>
            <UtenteAutomatico/>
            {props.testo && <h2>{props.testo}</h2>}
        </div>
    )
}