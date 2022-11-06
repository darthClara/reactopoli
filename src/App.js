import React, { useState } from "react"
import "./App.scss"
import "./Zindex.scss"
import SchermoDadi from "./components/schermodadi/SchermoDadi"
import Tabellone from "./components/tabellone/Tabellone"
import Togglestile from "./components/togglestile/Togglestile"
import "./components/terreni/StileRettangoli.scss"
import MenuIniziale from "./components/menuIniziale/MenuIniziale"

function App() {
  const [tema, setTema] = useState(false)

  const statoTema = (TemaRicevutoDaToggle) => {
    setTema(TemaRicevutoDaToggle)
  }

  return (
    <div className={tema ? "app appClassico" : "app appFuturistico"}>
      <MenuIniziale statoTema={tema}/>
      <SchermoDadi statoTema={tema}/>
      <Togglestile statoTema={statoTema}/>
      <Tabellone statoTema={tema}/>
    </div>
  )
}

export default App
