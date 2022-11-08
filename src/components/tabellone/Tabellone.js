import React from "react"
import "./Tabellone.scss"
import * as FaIcons from "react-icons/fa"
import Griglia from "./Griglia"

export default function Tabellone(props) {
 
  return (
    <div className={"tabelloneWrapper " + (props.statoTema ? "tabelloneWrapperClassico" : "tabelloneWrapperFuturistico")}>
      <Griglia nome={props.nome} immagine={props.immagine} id={props.id} statoTema={props.statoTema} posizione={props.posizione}/>
      <div className={"tabelloneWrapper2 " + (props.statoTema ? "tabelloneWrapper2Classico" : "tabelloneWrapper2Futuristico")}>
        <div className={"tabelloneWrapper3 " + (props.statoTema ? "tabelloneWrapper3Classico" : "tabelloneWrapper3Futuristico")}>
          <div className="talloncini" id="probabilità">
            <div className={"talloncini2 " + (props.statoTema ? "talloncini2Classico" : "talloncini2Futuristico")}></div>
            <h3 className={`h3${props.statoTema}`}>PROBABILITÀ</h3>
          </div>
          <div className="talloncini" id="imprevisti">
            <h3 className={`h3${props.statoTema}`}>IMPREVISTI</h3>
            <div className={"talloncini2 " + (props.statoTema ? "talloncini2Classico" : "talloncini2Futuristico")}></div>
          </div>
          <FaIcons.FaReact className={"logoReactIcona " + (props.statoTema ? "logoReactIconaClassico" : "logoReactIconaFuturistico")} />
          <div className={"titoloCentrale " + (props.statoTema ? "titoloCentraleClassico" : "titoloCentraleFuturistico")}>
            <h1>REACTÒPOLI</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
