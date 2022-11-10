import React, { useState, useEffect } from "react"
import "./App.scss"
import "./Zindex.scss"
import SchermoDadi from "./components/schermodadi/SchermoDadi"
import Tabellone from "./components/tabellone/Tabellone"
import Togglestile from "./components/togglestile/Togglestile"
import "./components/terreni/StileRettangoli.scss"
import MenuIniziale from "./components/menuIniziale/MenuIniziale"
import Console from "./components/console/Console"

function App() {
  const [tema, setTema] = useState(false)
  const [utente, setUtente] = useState("")
  const [posizioneDellaPedina, setPosizioneDellaPedina] = useState(1)
  const [risultatoDeiDadi, setRisultatoDeiDadi] = useState(1)
  const [stop, setStop] = useState(false)

  const statoTema = (temaRicevutoDaToggle) => {
    setTema(temaRicevutoDaToggle)
  }

  const utenteCreato = (pedinaScelta, nomeInserito, idDellaPedina) => {
    return setUtente({
      pedina: pedinaScelta,
      nome: nomeInserito,
      id: idDellaPedina,
    })
  }

  function muovi() {
    let risultato = window.sessionStorage.getItem("risultatoDadi")
    setPosizioneDellaPedina(risultato)
    let parsato = parseInt(risultato)
    let somma = parsato + risultatoDeiDadi
    setRisultatoDeiDadi(somma)
    setStop(true)
    if (somma >= 37) {
      let resto = somma - 36
      setRisultatoDeiDadi(resto)
      setPosizioneDellaPedina(1)
    }
  }

{useEffect(() => {tempoCheSiVedeIlRisultato()}, [risultatoDeiDadi])}

  function tempoCheSiVedeIlRisultato() {
    setTimeout(function() {setStop(false)}, 1000)}

  return (
    <div className={tema ? "app appClassico" : "app appFuturistico"}>
      <MenuIniziale utenteCreato={utenteCreato} />
      <SchermoDadi statoTema={tema} stop={stop} />
      <Console nome={utente.nome}/>
      <Togglestile statoTema={statoTema} />
      <Tabellone
        nome={utente.nome}
        immagine={utente.pedina}
        id={utente.id}
        statoTema={tema}
        posizione={risultatoDeiDadi}
      />
      <button
        onClick={muovi}
        className={`btnLanciaDadi btnLanciaDadi${tema} btnStop`}
      >
        STOP
      </button>
    </div>
  )
}

export default App
