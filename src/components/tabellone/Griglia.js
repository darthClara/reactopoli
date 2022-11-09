import React from "react"
import "./Griglia.scss"
import { DatiAngoli } from "../terreni/DatiAngoli"
import { DatiRettangoli } from "../terreni/DatiRettangoli"
import StileRettangoli from "../terreni/StileRettangoli"
import StileAngoli from "../terreni/StileAngoli"

export default function Griglia(props) {

 

    function generatoreCaselle() {
    let datiRettangoli = DatiRettangoli.map((terreno) => {
      return terreno.rettangoli
    })

    const rettangoliMontati = datiRettangoli.map((terreno) => (
      <div
        className={
          `rettangolo${terreno.numero} ` + `terreno${terreno.numero} `+
          (props.statoTema ? `rettangoloClassico` : "rettangoloFuturistico")
        }
      >
        <StileRettangoli posizione={props.posizione == terreno.numero ? "yes" : "no" } nome={props.nome} immagine={props.immagine} id={props.id} statoTema={props.statoTema} luce={props.statoTema} colore={terreno.colore} tipo={terreno.tipo} />
      </div>
    ))

    let datiAngoli = DatiAngoli.map((terreno) => {
      return terreno.angoli
    })

    const angoliMontati = datiAngoli.map((terreno) => (
      <div
        className={
          `angolo${terreno.numero} ` + `terreno${terreno.numero} ` +
          (props.statoTema ? "angoloClassico " : "angoloFuturistico ") 
          + (`angolo${terreno.numero}${props.statoTema}`) 
        }
      >
        <StileAngoli posizione={props.posizione == terreno.numero ? "yes" : "no" } nome={props.nome} immagine={props.immagine} id={props.id} statoTema={props.statoTema} testo={terreno.testo}/>
      </div>
    ))

    return (
      <div className="griglia">
        {angoliMontati}
        {rettangoliMontati}
        <div className="nul"></div>
      </div>
    )
  }

  return (
    <div
      className={
        "grigliaWrapper " +
        (props.statoTema ? `grigliaWrapperClassico` : "grigliaWrapperFuturistico")
      }
    >
      {generatoreCaselle()}
    </div>
  )
}
