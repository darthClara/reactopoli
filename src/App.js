import React, { useState } from "react"
import "./App.scss"
import "./Zindex.scss"
import SchermoDadi from "./components/schermodadi/SchermoDadi"
import Tabellone from "./components/tabellone/Tabellone"
import Togglestile from "./components/togglestile/Togglestile"
import "./components/terreni/StileRettangoli.scss"
import MenuIniziale from "./components/menuIniziale/MenuIniziale"
import Utente from "./components/utente/Utente"

function App() {
  const [tema, setTema] = useState(false);
  const [utente, setUtente] = useState("");

  const statoTema = (temaRicevutoDaToggle) => {
    setTema(temaRicevutoDaToggle)
  }

  const utenteCreato = (pedinaScelta, nomeInserito, idDellaPedina) => {
    return setUtente({pedina: pedinaScelta, nome: nomeInserito, id: idDellaPedina})
  }

  return (
    <div className={tema ? "app appClassico" : "app appFuturistico"}>
      <MenuIniziale utenteCreato={utenteCreato}/>
      <SchermoDadi statoTema={tema}/>
      <Togglestile statoTema={statoTema}/>
      <Tabellone statoTema={tema}/>
      <Utente nome={utente.nome} immagine={utente.pedina} id={utente.id}/>
    </div>
  )
}

export default App
