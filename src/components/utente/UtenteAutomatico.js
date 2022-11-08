import React, { useState } from "react"
import "./Utente.scss"
import { DatiPedine } from "../pedine/DatiPedine"

export default function UtenteAutomatico(props) {

  let numero = props.id ? props.id : 0

  let immagine = (
    <img
      className={`immaginePedina immaginePedina${props.immagine}`}
      src={DatiPedine[numero].immagine}
    />
  )
  
  return (
    <div className={`utenteWrapper ` + `utenteWrapper${props.nome}`}>
      {immagine}
    </div>
  )
}
