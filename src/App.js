import React, { useState } from "react"
import "./App.scss"
import "./Zindex.scss"
import SchermoDadi from "./components/schermodadi/SchermoDadi"
import Tabellone from "./components/tabellone/Tabellone"
import Togglestile from "./components/togglestile/Togglestile"
import "./components/terreni/StileRettangoli.scss"
import MenuIniziale from "./components/menuIniziale/MenuIniziale"

function App() {
  const [tema, setTema] = useState(false);
  const [pedina, setPedina] = useState([]);

  const statoTema = (temaRicevutoDaToggle) => {
    setTema(temaRicevutoDaToggle)
  }

  const pedinaUtente = (pedinaRicevutaDaMenuIniziale) => {
    setPedina(pedinaRicevutaDaMenuIniziale)
  }

  console.log(pedina)

  return (
    <div className={tema ? "app appClassico" : "app appFuturistico"}>
      <MenuIniziale pedinaUtente={pedinaUtente}/>
      <SchermoDadi statoTema={tema}/>
      <Togglestile statoTema={statoTema}/>
      <Tabellone statoTema={tema}/>
    </div>
  )
}

export default App
