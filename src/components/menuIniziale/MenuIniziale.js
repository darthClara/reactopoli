import React, { useState } from "react"
import "./MenuIniziale.scss"
import "../pedine/DatiPedine"
import { DatiPedine } from "../pedine/DatiPedine"
import "../pedine/StilePedine.scss"

export default function MenuIniziale({pedinaUtente}) {
  const [menuAperto, setMenuAperto] = useState(true)
  const [nome, setNome] = useState("")
  const [pedinaScelta, setPedinaScelta] = useState("")

  function gestoreClickNuovaPartita() {
    if ((nome !=="") && (pedinaScelta !=="")) {
        setMenuAperto(false)
        pedinaUtente(pedinaScelta)
    } else {
        alert("INSERISCI UN NOME E SCEGLI LA TUA PEDINA")
    }
  }

  function gestoreInputNome(e) {
    let nome = e.target.value
    setNome(nome)
  }

  function gestoreClickPedina(e) {
    let pedinaCliccata = e.currentTarget.value;
    setPedinaScelta(pedinaCliccata)
    console.log(pedinaScelta)
  }

  function generatorePedine() {
    let pedine = DatiPedine.map((pedina) => {
      return (
        <button
          onClick={gestoreClickPedina}
          value={pedina.nome}
          className={`pedinaWrapper pedina${pedina.nome}Wrapper`}
        >
          {pedina.immagine && (
            <img
              className={`immaginePedina immaginePedina${pedina.nome}`}
              src={pedina.immagine}
            ></img>
          )}
        </button>
      )
    })

    return pedine
  }

  return (
    <div
      className={`menuInizialeWrapper ` + `menuInizialeWrapper${menuAperto}`}
    >
      <input
        className="inputNome"
        onChange={gestoreInputNome}
        type="text"
        placeholder="COME TI CHIAMI?"
      ></input>
      <div className="selettorePedineWrapper">
        <h2>SCEGLI LA TUA PEDINA:</h2>
        <div className="selettorePedineWrapper2">{generatorePedine()}</div>
      </div>
      <button
        className="btnNuovaPartita"
        onClick={gestoreClickNuovaPartita}
      >
        NUOVA PARTITA
      </button>
    </div>
  )
}
