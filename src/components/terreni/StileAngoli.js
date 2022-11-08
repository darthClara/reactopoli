import React from "react";
import "./StileAngoli.scss"
import UtenteAutomatico from "../utente/UtenteAutomatico"

export default function StileAngoli(props) {

    return (
        <div className={`stileAngoliWrapper ` + (`stileAngoliWrapper${props.tema}`)}>
            {props.posizione == "yes" && <UtenteAutomatico nome={props.nome} immagine={props.immagine} id={props.id}/>}
            {props.testo && <h2>{props.testo}</h2>}
        </div>
    )
}