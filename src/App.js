import React, { useState, useEffect } from "react"
import "./App.scss"
import "./Zindex.scss"
import SchermoDadi from "./components/schermodadi/SchermoDadi"
import Tabellone from "./components/tabellone/Tabellone"
import Togglestile from "./components/togglestile/Togglestile"
import "./components/terreni/StileRettangoli.scss"
import MenuIniziale from "./components/menuIniziale/MenuIniziale"
import { type } from "@testing-library/user-event/dist/type"

function App() {
  const [tema, setTema] = useState(false)
  const [utente, setUtente] = useState("")
  const [posizioneDellaPedina, setPosizioneDellaPedina] = useState(1)
  const [risultatoDeiDadi, setRisultatoDeiDadi] = useState(1)

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
      if (somma >= 37) {
      let resto = (somma - 36)
      console.log(resto)
      setRisultatoDeiDadi(resto)
      setPosizioneDellaPedina(1)
      }
    }

  return (
    <div className={tema ? "app appClassico" : "app appFuturistico"}>
      <MenuIniziale utenteCreato={utenteCreato} />
      <SchermoDadi statoTema={tema} />
      <Togglestile statoTema={statoTema} />
      <Tabellone
        nome={utente.nome}
        immagine={utente.pedina}
        id={utente.id}
        statoTema={tema}
        posizione={risultatoDeiDadi}
      />
      <button onClick={muovi}>MUOVI</button>
    </div>
  )
}

export default App
