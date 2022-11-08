import React from "react";
import "./StileAngoli.scss"
import UtenteAutomatico from "../utente/UtenteAutomatico"

export default function StileAngoli(props) {
    
    return (
        <div className={`stileAngoliWrapper ` + (`stileAngoliWrapper${props.tema}`)}>
            <UtenteAutomatico nome={props.nome} immagine={props.pedina} id={props.id} posizione={1}/>
            {props.testo && <h2>{props.testo}</h2>}
        </div>
    )
}