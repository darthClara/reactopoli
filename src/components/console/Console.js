import "./Console.scss"
import animazioneConsole from "../../contents/hello.gif"
import animazioneVino from "../../contents/vino.gif"
import animazioneGhigno from "../../contents/ghigno.gif"
import animazioneInchino from "../../contents/inchino.gif"
import animazionePensoso from "../../contents/pensoso.gif"
import animazioneSheldon from "../../contents/sheldon.gif"
import animazioneCosino from "../../contents/cosino.gif"
import animazioneWtf from "../../contents/wtf.gif"
import animazioneDr from "../../contents/dr.gif"
import { useEffect, useState } from "react"
import * as FaIcons from "react-icons/fa"
import SelettoreConsole from "./SelettoreConsole"

export default function Console(props) {
  let [consoleAperta, setConsoleAperta] = useState(true)
  let [pulsantieraAperta, setPulsantieraAperta] = useState(false)
  let [pulsanteSX, setPulsanteSX] = useState(false)
  let [pulsanteDX, setPulsanteDX] = useState(false)
  let [pulsanteENT, setPulsanteENT] = useState(false)
  let [testo, setTesto] = useState()
  let [immagine, setImmagine] = useState()
  let [opzioniSelettore, setOpzioniSelettore] = useState([""])
  let [risposta, setRisposta] = useState()
  let [sessoUtente, setSessoUtente] = useState()
  let [schermoInferiore, setSchermoInferiore] = useState(true)
  let [schermoSuperiore, setSchermoSuperiore] = useState(true)

  useEffect(() => {
    document
      .getElementsByClassName("wrapperSelettoreConsole")[0]
      .firstChild.firstChild.setAttribute("id", "opzioneSelezionata")
    setImmagine(<img className="animazioneConsole" src={animazioneConsole} />)
    setTesto(
      <h3 className="scritteConsole titoloConsole">
        Ehi...Ciao {props.nome}!<br />
        Come va?
      </h3>
    )
    setOpzioniSelettore(["bene, dai", "insomma..."])
  }, [props.nome])

  useEffect(() => {
    risposta === "bene, dai" &&
      setTesto(
        <h4
          style={{ fontSize: "8px" }}
          className="scritteConsole titoloConsole"
        >
          Questo perché non hai ancora iniziato a giocare, ah ah ah.
          <br />
          Di che genere sei?
        </h4>
      )
    risposta === "bene, dai" &&
      setImmagine(
        <img id="ghigno" className="animazioneConsole" src={animazioneGhigno} />
      )
    risposta === "insomma..." &&
      setTesto(
        <h4
          style={{ fontSize: "8px" }}
          className="scritteConsole titoloConsole"
        >
          Mi dispiace molto...ma per fortuna esiste il vino, dai!
          <br />
          Di che genere sei?
        </h4>
      )
    risposta === "insomma..." &&
      setImmagine(<img className="animazioneConsole" src={animazioneVino} />)
    setOpzioniSelettore(["maschile", "femminile", "boh"])
  }, [risposta])

  useEffect(() => {
    risposta === "maschile" && setSessoUtente("M")
    risposta === "femminile" && setSessoUtente("F")
    risposta === "boh" && setSessoUtente("B")
  }, [risposta])

  useEffect(() => {
    risposta === "maschile" &&
      setImmagine(<img className="animazioneConsole" src={animazioneInchino} />)
    risposta === "femminile" &&
      setImmagine(<img className="animazioneConsole" src={animazioneInchino} />)
    risposta === "boh" &&
      setImmagine(<img className="animazioneConsole" src={animazionePensoso} />)
    risposta === "maschile" &&
      setOpzioniSelettore(["ehm...no. Grazie.", "Certo che sì!"])
    risposta === "femminile" &&
      setOpzioniSelettore(["ehm...no. Grazie.", "Certo che sì!"])
    risposta === "boh" &&
      setOpzioniSelettore(["Sono confusæ", "Sono una lumaca"])
  }, [risposta])

  useEffect(() => {
    sessoUtente == "M" &&
      setTesto(
        <h4
          style={{ fontSize: "8px" }}
          className="scritteConsole titoloConsole"
        >
          Va beh dai...capita. Piacere {props.nome}, io sono il DOM! Se gradisce
          potrei raccontarle una simpatica barzelletta!
        </h4>
      )
    sessoUtente == "F" &&
      setTesto(
        <h4
          style={{ fontSize: "8px" }}
          className="scritteConsole titoloConsole"
        >
          Piacere di conoscerti, {props.nome}! Io sono il DOM! Vuoi che ti
          racconti una simpatica barzelletta di benvenuto?
        </h4>
      )
    sessoUtente == "B" &&
      setTesto(
        <h4
          style={{ fontSize: "9px" }}
          className="scritteConsole titoloConsole"
        >
          Perché credi che il genere sia un costrutto sociale o perché sei una
          lumaca?
        </h4>
      )
  }, [sessoUtente])

  useEffect(() => {
    risposta === "ehm...no. Grazie." &&
      setTesto(
        <h4
          style={{ fontSize: "8px" }}
          className="scritteConsole titoloConsole"
        >
          ...
        </h4>
      )
    risposta === "ehm...no. Grazie." && setSchermoInferiore(false)
    risposta === "ehm...no. Grazie." && setOpzioniSelettore([])
    risposta === "ehm...no. Grazie." &&
      setImmagine(<img className="animazioneConsole" src={animazioneSheldon} />)
    setTimeout(() => {
      risposta === "ehm...no. Grazie." && setConsoleAperta(false)
      risposta === "ehm...no. Grazie." && setSchermoInferiore(true)
    }, 8000)

    risposta === "Certo che sì!" &&
      setTesto(
        <h4
          style={{ fontSize: "10px" }}
          className="scritteConsole titoloConsole"
        >
          Un PC uccide una periferica USB per errore. Al processo afferma, tra
          le lacrime: "Non l'avevo riconosciuta!".
        </h4>
      )
    risposta === "Certo che sì!" && setSchermoSuperiore(false)
    risposta === "Certo che sì!" &&
      setOpzioniSelettore(["ahahah", "non fa ridere"])
    risposta === "Sono confusæ" && setSchermoSuperiore(false)
    risposta === "Sono confusæ" &&
      setTesto(
        <h4
          style={{ fontSize: "10px" }}
          className="scritteConsole titoloConsole"
        >
          Ma sì, non ci pensare. Vuoi sentire una barzelletta? Te la racconto:
          Un PC uccide una periferica USB per errore. Al processo afferma, tra
          le lacrime: "Non l'avevo riconosciuta!".
        </h4>
      )
    risposta === "Sono confusæ" && setSchermoSuperiore(false)
    risposta === "Sono confusæ" &&
      setOpzioniSelettore(["ahahah", "non fa ridere"])
    risposta === "Sono una lumaca" && setSchermoSuperiore(false)
    risposta === "Sono una lumaca" &&
      setTesto(
        <h4
          style={{ fontSize: "9px" }}
          className="scritteConsole titoloConsole"
        >
          E come fai a cliccare i tasti se sei una lumaca?
        </h4>
      )
    risposta === "Sono una lumaca" &&
      setOpzioniSelettore(["non posso rispondere perché non ho le mani"])
  }, [risposta])

  useEffect(() => {
    risposta === "non fa ridere" &&
      setTesto(
        <h4
          style={{ fontSize: "7px" }}
          className="scritteConsole titoloConsole"
        >
          Non è vero, faceva molto ridere, ma voi esseri umana avete
          un'intelligenza troppo limitata per poter comprendere il mio sarcasmo.
        </h4>
      )
      risposta === "non fa ridere" && setSchermoSuperiore(true)
      risposta === "non fa ridere" &&
      setImmagine(<img className="animazioneConsole" src={animazioneDr} />)

      risposta === "non posso rispondere perché non ho le mani" && setSchermoSuperiore(true)
      risposta === "non posso rispondere perché non ho le mani" && setSchermoInferiore(false)
      risposta === "non posso rispondere perché non ho le mani" && setImmagine(<img className="animazioneConsole" src={animazioneWtf} />)
      setTimeout(() => {
        risposta === "non posso rispondere perché non ho le mani" && setConsoleAperta(false)
        risposta === "non posso rispondere perché non ho le mani" && setSchermoInferiore(true)
      }, 2000)
  }, [risposta])

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
    attuale.removeAttribute("id")
    document
      .getElementsByClassName("wrapperSelettoreConsole")[0]
      .firstChild.firstChild.setAttribute("id", "opzioneSelezionata")
  }

  function gestorePulsanteDX() {
    setPulsanteDX(true)
    let precedente = document.getElementById("opzioneSelezionata")
    precedente.nextSibling.setAttribute("id", "opzioneSelezionata")
    precedente.removeAttribute("id")
  }

  function gestoreRiduci() {
    setConsoleAperta(false)
  }

  function clickaperturaConsole() {
    !consoleAperta && setConsoleAperta(true)
  }

  return (
    <div
      className={`consoleWrapper consoleWrapper${consoleAperta}`}
    >
      <div className={`pulsantieraConsole pulsantiera${pulsantieraAperta}`}>
        <h4 className="scrittaTastierino">TASTIERINO</h4>
        <button
          className={`bottonePulsantieraOnOff`}
          onClick={gestoreClickOnOffPulsantiera}
        >
          <FaIcons.FaMinusCircle className="iconaOnOffPulsantiera" />
        </button>
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
        <button
          style={{ backgroundColor: "rgb(235, 166, 196)" }}
          onClick={gestoreRiduci}
          className={`tastiConsoleDS`}
        >
          <FaIcons.FaMinusCircle
            style={{ fontSize: "100%", color: "black" }}
            className="iconeTastiConsole"
          />
        </button>
      </div>
      <div onClick={clickaperturaConsole} className="schermoConsole">
        <div className={`schermoSuperiore schermoSuperiore${schermoSuperiore}`}>
          {consoleAperta ? (
            immagine
          ) : (
            <img className="animazioneConsole" src={animazioneCosino} />
          )}
        </div>
        <div className={`schermoInferiore schermoInferiore${schermoInferiore}`}>
          {testo}
          <div className="scritteConsole wrapperSelettoreConsole">
            <SelettoreConsole opzioni={opzioniSelettore} />
          </div>
        </div>
      </div>
    </div>
  )
}
