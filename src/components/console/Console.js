import "./Console.scss"
import animazioneConsole from "../../contents/hello.gif"
import animazioneVino from "../../contents/vino.gif"
import animazioneGhigno from "../../contents/ghigno.gif"
import { useEffect, useState } from "react"
import * as FaIcons from "react-icons/fa"
import SelettoreConsole from "./SelettoreConsole"

export default function Console(props) {
  let [pulsantieraAperta, setPulsantieraAperta] = useState(false)
  let [pulsanteSX, setPulsanteSX] = useState(false)
  let [pulsanteDX, setPulsanteDX] = useState(false)
  let [pulsanteENT, setPulsanteENT] = useState(false)
  let [testo, setTesto] = useState()
  let [immagine, setImmagine] = useState()
  let [opzioniSelettore, setOpzioniSelettore] = useState([""])
  let [risposta, setRisposta] = useState()
  let [sessoUtente, setSessoUtente] = useState()

  useEffect(() => {
    document
      .getElementsByClassName("wrapperSelettoreConsole")[0]
      .firstChild.firstChild.setAttribute("id", "opzioneSelezionata")
      setImmagine(<img className="animazioneConsole" src={animazioneConsole}/>)
    setTesto(
      <h3 className="scritteConsole titoloConsole">
        Ehi...Ciao {props.nome}!<br />
        Come va?
      </h3>
    )
    setOpzioniSelettore(["bene, dai", "insomma..."])
  }, [props.nome])

  useEffect(() => {
    risposta === "bene, dai" && setTesto(<h4 style={{fontSize: "8px"}} className="scritteConsole titoloConsole">Questo perché non hai ancora iniziato a giocare, ah ah ah.<br/>Di che genere sei?</h4>)
    risposta === "bene, dai" && setImmagine(<img id="ghigno" className="animazioneConsole" src={animazioneGhigno}/>)
    risposta === "insomma..." && setTesto(<h4 style={{fontSize: "8px"}} className="scritteConsole titoloConsole">Mi dispiace molto...ma per fortuna esiste il vino, dai!<br/>Di che genere sei?</h4>)
    risposta === "insomma..." && setImmagine(<img className="animazioneConsole" src={animazioneVino}/>)
    setOpzioniSelettore(["maschile", "femminile", "boh"])
  }, [risposta])

  useEffect(() => {
   risposta === "maschile" && (setSessoUtente("M"))
   risposta === "femminile" && setSessoUtente("F")
   risposta === "boh" && setSessoUtente("B")
  }, [risposta])


  useEffect(() => {
    sessoUtente == "M" && setTesto(<h4 style={{fontSize: "8px"}} className="scritteConsole titoloConsole">Va beh dai...capita. Piacere {props.nome}, io sono il DOM. Benvenuto a Reactopoli!</h4>)
    sessoUtente == "F" && setTesto(<h4 style={{fontSize: "8px"}} className="scritteConsole titoloConsole">Benvenuta a Reactopoli, {props.nome}! Io sono il DOM</h4>)
    sessoUtente == "B" && setTesto(<h4 style={{fontSize: "8px"}} className="scritteConsole titoloConsole">Capisco...Beh...Benvenutæ a Reactopoli, {props.nome}! Io sono il DOM</h4>)
}, [sessoUtente])


  function gestoreClickOnOffPulsantiera() {
    setPulsantieraAperta(!pulsantieraAperta)
  }

  function gestorePulsanteSX() {
    setPulsanteSX(true)
    let precedente = document.getElementById("opzioneSelezionata")
    precedente.previousSibling.setAttribute("id", "opzioneSelezionata")
    precedente.removeAttribute("id")
  }

  function gestorePulsanteENT() {
    setPulsanteENT(true)
    let attuale = document.getElementById("opzioneSelezionata")
    setRisposta(attuale.textContent)
  }

  function gestorePulsanteDX() {
    setPulsanteDX(true)
    let precedente = document.getElementById("opzioneSelezionata")
    precedente.nextSibling.setAttribute("id", "opzioneSelezionata")
    precedente.removeAttribute("id")
  }

  return (
    <div className="consoleWrapper">
      <div className={`pulsantieraConsole pulsantiera${pulsantieraAperta}`}>
        <h4 className="scrittaTastierino">TASTIERINO</h4>
        <button
          className={`bottonePulsantieraOnOff`}
          onClick={gestoreClickOnOffPulsantiera}
        ></button>
      </div>
      <div className={`pulsantiera2Console`}>
        <button
          onClick={gestorePulsanteSX}
          className={`tastiConsoleDS pulsanteSX${pulsanteSX}`}
        >
          <FaIcons.FaRegArrowAltCircleLeft className="iconeTastiConsole" />
        </button>
        <button
          onClick={gestorePulsanteENT}
          className={`tastiConsoleDS pulsanteENT${pulsanteENT} tastoENTERCOnsoleDS`}
        >
          ENTER
        </button>
        <button
          onClick={gestorePulsanteDX}
          className={`tastiConsoleDS pulsanteDX${pulsanteDX}`}
        >
          <FaIcons.FaRegArrowAltCircleRight className="iconeTastiConsole" />
        </button>
      </div>
      <div className="schermoConsole">
        <div className="schermoSuperiore">
          {immagine}
        </div>
        <div className="schermoInferiore">
          {testo}
          <div className="scritteConsole wrapperSelettoreConsole">
            <SelettoreConsole opzioni={opzioniSelettore} />
          </div>
        </div>
      </div>
    </div>
  )
}
