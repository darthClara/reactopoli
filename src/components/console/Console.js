import "./Console.scss"
import animazioneConsole from "../../contents/hello.gif"
import animazioneVino from "../../contents/vino.gif"
import animazioneGhigno from "../../contents/ghigno.gif"
import animazioneInchino from "../../contents/inchino.gif"
import animazionePensoso from "../../contents/pensoso.gif"
import animazioneSheldon from "../../contents/sheldon.gif"
import { useEffect, useState } from "react"
import * as FaIcons from "react-icons/fa"
import SelettoreConsole from "./SelettoreConsole"
import { unstable_renderSubtreeIntoContainer } from "react-dom"

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
          style={{ fontSize: "8px" }}
          className="scritteConsole titoloConsole"
        >
          Perché credi che il genere sia un costrutto sociale, perché non sai
          dove controllare, o perché sei una lumaca?
        </h4>
      )
  }, [sessoUtente])

  useEffect(() => {
    risposta === "ehm...no. Grazie." &&
    setTesto(
        <h4
          style={{ fontSize: "8px" }}
          className="scritteConsole titoloConsole">
          ...
        </h4>
      )
      risposta === "ehm...no. Grazie." &&
      setOpzioniSelettore([])
      risposta === "ehm...no. Grazie." &&
      setImmagine(<img className="animazioneConsole" src={animazioneSheldon} />)
      
      risposta === "Certo che sì!" && setTesto(
        <h4
          style={{ fontSize: "8px" }}
          className="scritteConsole titoloConsole">
          Paoletto va da suo padre, e gli fa: "papà papà, mi sono fidanzato!"
          "Bello di papà, che gioia! E con chi?"
        "Con Mariuccia, la figlia del fornaio!"
        </h4>
      ) 
      risposta === "Certo che sì!" &&
      setOpzioniSelettore(["e che gli ha risposto il padre?"])

      risposta === "Sono confusæ" &&
    setTesto(
        <h4
          style={{ fontSize: "7px" }}
          className="scritteConsole titoloConsole">
          Va beh dai...non ci pensare. Vuoi sentire una barzelletta? Te la racconto:
          Paoletto va da suo padre, e gli fa: "papà papà, mi sono fidanzato con Mariuccia, la figlia del fornaio!"
        </h4>
      ) 
      risposta === "Sono confusæ" &&
      setOpzioniSelettore(["...", "Ma io non volevo sent..."])

      risposta === "Sono una lumaca" &&
    setTesto(
        <h4
          style={{ fontSize: "8px" }}
          className="scritteConsole titoloConsole">
         E come fai a cliccare i tasti se sei una lumaca?
        </h4>
      )
      risposta === "Sono una lumaca" &&
      setOpzioniSelettore(["non posso rispondere perché non ho le mani"])
      
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
        <div className="schermoSuperiore">{immagine}</div>
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
