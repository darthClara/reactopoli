import React from "react";
import "./StileAngoli.scss"

export default function StileAngoli(props) {
    return (
        <div className={`stileAngoliWrapper ` + (`stileAngoliWrapper${props.tema}`)}>
            {props.testo && <h2>{props.testo}</h2>}
            {props.immagine && <img src={props.immagine}/>}
        </div>
    )
}