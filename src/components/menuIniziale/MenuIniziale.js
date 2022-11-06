import React, { useState } from "react"
import "./MenuIniziale.scss"

export default function MenuIniziale({ statoTema }) {
  const [menuAperto, setMenuAperto] = useState(true)
  const [nome, setNome] = useState("")
  const [pedina, setPedina] = useState("")

  function gestoreClickNuovaPartita() {
    setMenuAperto(false)
  }

  function gestoreInputNome(e) {
    let nome = e.target.value
    setNome(nome)
  }

  function pedine() {
    return (
        <div>
            <input type="checkbox"></input>
        </div>
    )
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
        <div className="selettorePedineWrapper2">
            {pedine}
        </div>
      </div>
      <button className="btnNuovaPartita" onClick={nome && pedina && gestoreClickNuovaPartita}>
        NUOVA PARTITA
      </button>
    </div>
  )
}
