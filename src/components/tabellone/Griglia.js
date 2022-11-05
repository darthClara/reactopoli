import React from "react"
import "./Griglia.scss"
import { DatiAngoli } from "../terreni/DatiAngoli"
import { DatiRettangoli } from "../terreni/DatiRettangoli"
import StileRettangoli from "../terreni/StileRettangoli"
import StileAngoli from "../terreni/StileAngoli"

export default function Griglia({ statoTema }) {
  function generatoreCaselle() {
    let datiRettangoli = DatiRettangoli.map((terreno) => {
      return terreno.rettangoli
    })

    const rettangoliMontati = datiRettangoli.map((terreno) => (
      <div
        className={
          `rettangolo${terreno.numero} ` +
          (statoTema ? `rettangoloClassico` : "rettangoloFuturistico")
        }
      >
        <StileRettangoli luce={statoTema} colore={terreno.colore} tipo={terreno.tipo} />
      </div>
    ))

    let datiAngoli = DatiAngoli.map((terreno) => {
      return terreno.angoli
    })

    const angoliMontati = datiAngoli.map((terreno) => (
      <div
        className={
          `angolo${terreno.numero} ` +
          (statoTema ? "angoloClassico " : "angoloFuturistico ") 
          + (`angolo${terreno.numero}${statoTema}`) 
        }
      >
        <StileAngoli testo={terreno.testo} tema={statoTema}/>
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
        (statoTema ? `grigliaWrapperClassico` : "grigliaWrapperFuturistico")
      }
    >
      {generatoreCaselle()}
    </div>
  )
}
