import React, { useState } from "react"
import "./MenuIniziale.scss"
import "../pedine/DatiPedine"
import { DatiPedine } from "../pedine/DatiPedine"
import "../pedine/StilePedine.scss"

export default function MenuIniziale({ utenteCreato }) {
  const [menuAperto, setMenuAperto] = useState(true)
  const [nomeInserito, setNome] = useState("")
  const [pedinaScelta, setPedinaScelta] = useState("")
  const [idDellaPedina, setIdDellaPedina] = useState("")

  function gestoreClickNuovaPartita() {
    if (nomeInserito !== "" && pedinaScelta !== "") {
      setMenuAperto(false)
      utenteCreato(pedinaScelta, nomeInserito, idDellaPedina)
    } else {
      alert("INSERISCI UN NOME E SCEGLI LA TUA PEDINA")
    }
  }

  function gestoreInputNome(e) {
    let nome = e.target.value
    setNome(nome)
  }

  function gestoreClickPedina(e) {
    let pedinaCliccata = e.currentTarget
    let idDellaPedinaCliccata = e.currentTarget.id
    let wrapperPadre = e.currentTarget.parentElement

    setPedinaScelta(pedinaCliccata.value)
    setIdDellaPedina(idDellaPedinaCliccata)
    wrapperPadre.style.display = "none"
    wrapperPadre.parentElement.appendChild(pedinaCliccata.firstChild)
  }

  function generatorePedine() {
    let pedine = DatiPedine.map((pedina) => {
      return (
        <button
          onClick={gestoreClickPedina}
          value={pedina.nome}
          id={pedina.id}
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
        <div className="selettorePedineWrapper2">{generatorePedine()}</div>
      </div>
      <button className="btnNuovaPartita" id={(nomeInserito !== "") && (pedinaScelta !== "") && "bottoneVerde"} onClick={gestoreClickNuovaPartita}>
        NUOVA PARTITA
      </button>
    </div>
  )
}
