import React, { useState } from "react"
import { useSpring, animated } from "react-spring" 
import "./Utente.scss"
import { DatiPedine } from "../pedine/DatiPedine"
import { useDrag } from "react-use-gesture"

export default function Utente(props) {
  const posizioneUtente = useSpring({ x: 0, y: 0});
  const bindPosizioneUtente = useDrag((params) => {
    posizioneUtente.x.set(params.offset[0]);
    posizioneUtente.y.set(params.offset[1])
  });

  let numero = props.id ? props.id : 0
  let immagine = (
    <img
      className={`immaginePedina immaginePedina${props.immagine}`}
      src={DatiPedine[numero].immagine}
    />
  )

  return (
    <animated.div {...bindPosizioneUtente()} className={`utenteWrapper ` + `utenteWrapper${props.nome}`}
    style={{
        x: posizioneUtente.x,
        y: posizioneUtente.y
    }}>
      {immagine}
    </animated.div>
  )
}
