import "./Console.scss"
import animazioneHello from "../../contents/hello.gif"
import { useEffect, useState } from "react"
import * as FaIcons from "react-icons/fa"
import SelettoreConsole from "./SelettoreConsole"

export default function Console(props) {
  let [pulsantieraAperta, setPulsantieraAperta] = useState(false)
  let [pulsanteSX, setPulsanteSX] = useState(false)
  let [pulsanteDX, setPulsanteDX] = useState(false)
  let [pulsanteENT, setPulsanteENT] = useState(false)
  let [opzioniSelettore, setOpzioniSelettore] = useState([""])

  useEffect(() => {
    document
      .getElementsByClassName("wrapperSelettoreConsole")[0]
      .firstChild.firstChild.setAttribute("id", "opzioneSelezionata")
    setOpzioniSelettore(["bene, dai", "insomma..."])
  }, [])

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
    console.log(attuale.textContent);
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
          <img className="animazioneHello" src={animazioneHello} />
        </div>
        <div className="schermoInferiore">
          <h3 className="scritteConsole titoloConsole">
            Ehi...Ciao {props.nome}!<br />
            Come va?
          </h3>
          <div className="scritteConsole wrapperSelettoreConsole">
            <SelettoreConsole opzioni={opzioniSelettore} />
          </div>
        </div>
      </div>
    </div>
  )
}
