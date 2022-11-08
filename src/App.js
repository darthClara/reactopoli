import React, { useState } from "react"
import "./App.scss"
import "./Zindex.scss"
import SchermoDadi from "./components/schermodadi/SchermoDadi"
import Tabellone from "./components/tabellone/Tabellone"
import Togglestile from "./components/togglestile/Togglestile"
import "./components/terreni/StileRettangoli.scss"
import MenuIniziale from "./components/menuIniziale/MenuIniziale"
// import UtenteDraggabile from "./components/utente/UtenteDraggabile"
// import UtenteAutomatico from "./components/utente/UtenteAutomatico"

function App() {
  const [tema, setTema] = useState(false);
  const [utente, setUtente] = useState("");

  const statoTema = (temaRicevutoDaToggle) => {
    setTema(temaRicevutoDaToggle)
  }

  const utenteCreato = (pedinaScelta, nomeInserito, idDellaPedina) => {
    return setUtente({pedina: pedinaScelta, nome: nomeInserito, id: idDellaPedina})
  }

//   let pedina = document.getElementsByClassName(`immaginePedina${utente.pedina}`)
//   let casella = document.getElementsByClassName("terreno1")

    // utente.pedina && document.getElementsByClassName("terreno1").append(pedina)

//   console.log(casella)
//   utente.pedina && console.log(pedina)

  return (
    <div className={tema ? "app appClassico" : "app appFuturistico"}>
      <MenuIniziale utenteCreato={utenteCreato}/>
      <SchermoDadi statoTema={tema}/>
      <Togglestile statoTema={statoTema}/>
      <Tabellone nome={utente.nome} immagine={utente.pedina} id={utente.id} statoTema={tema}/>
      {/* <UtenteAutomatico nome={utente.nome} immagine={utente.pedina} id={utente.id} posizione={1}/> */}
      {/* <UtenteDraggabile nome={utente.nome} immagine={utente.pedina} id={utente.id}/> */}
    </div>
  )
}

export default App
