import React from "react"
import "./Tabellone.scss"
import * as FaIcons from "react-icons/fa"
import Griglia from "./Griglia"

export default function Tabellone({statoTema}) {

  return (
    <div className={"tabelloneWrapper " + (statoTema ? "tabelloneWrapperClassico" : "tabelloneWrapperFuturistico")}>
      <Griglia statoTema={statoTema}/>
      <div className={"tabelloneWrapper2 " + (statoTema ? "tabelloneWrapper2Classico" : "tabelloneWrapper2Futuristico")}>
        <div className={"tabelloneWrapper3 " + (statoTema ? "tabelloneWrapper3Classico" : "tabelloneWrapper3Futuristico")}>
          <div className="talloncini" id="probabilità">
            <div className={"talloncini2 " + (statoTema ? "talloncini2Classico" : "talloncini2Futuristico")}></div>
            <h3 className={`h3${statoTema}`}>PROBABILITÀ</h3>
          </div>
          <div className="talloncini" id="imprevisti">
            <h3 className={`h3${statoTema}`}>IMPREVISTI</h3>
            <div className={"talloncini2 " + (statoTema ? "talloncini2Classico" : "talloncini2Futuristico")}></div>
          </div>
          <FaIcons.FaReact className={"logoReactIcona " + (statoTema ? "logoReactIconaClassico" : "logoReactIconaFuturistico")} />
          <div className={"titoloCentrale " + (statoTema ? "titoloCentraleClassico" : "titoloCentraleFuturistico")}>
            <h1>REACTÒPOLI</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
