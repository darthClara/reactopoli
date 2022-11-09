import React, { createElement, useState } from "react"
import "./SchermoDadi.scss"
import * as CgIcons from "react-icons/cg"

export default function SchermoDadi(props) {
  const [numeroRandom, setNumeroRandom] = useState("1")
  const [iconaDado1, setIconaDado1] = useState()
  const [iconaDado2, setIconaDado2] = useState()
  const [numeroUscito1, setNumeroUscito1] = useState([])
  const [numeroUscito2, setNumeroUscito2] = useState([])

  function dadoUno() {
    const numero = SchermoDadi(1, 7)
    numero === 1 && setIconaDado1(<CgIcons.CgDice1 className="dado" />)
    numero === 2 && setIconaDado1(<CgIcons.CgDice2 className="dado" />)
    numero === 3 && setIconaDado1(<CgIcons.CgDice3 className="dado" />)
    numero === 4 && setIconaDado1(<CgIcons.CgDice4 className="dado" />)
    numero === 5 && setIconaDado1(<CgIcons.CgDice5 className="dado" />)
    numero === 6 && setIconaDado1(<CgIcons.CgDice6 className="dado" />)
    setNumeroUscito1(numero)
  }

  function dadoDue() {
    const numero = SchermoDadi(1, 7)
    numero === 1 && setIconaDado2(<CgIcons.CgDice1 className="dado" />)
    numero === 2 && setIconaDado2(<CgIcons.CgDice2 className="dado" />)
    numero === 3 && setIconaDado2(<CgIcons.CgDice3 className="dado" />)
    numero === 4 && setIconaDado2(<CgIcons.CgDice4 className="dado" />)
    numero === 5 && setIconaDado2(<CgIcons.CgDice5 className="dado" />)
    numero === 6 && setIconaDado2(<CgIcons.CgDice6 className="dado" />)
    setNumeroUscito2(numero)
  }

  function SchermoDadi(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  function onClickLanciaDadi() {
    setNumeroRandom(SchermoDadi(1, 7))
    dadoUno()
    dadoDue()
  }

  let risultato = numeroUscito1 + numeroUscito2
    window.sessionStorage.setItem("risultatoDadi", risultato)

  return (
    <div
      className={`schermoDadiWrapper ` + `schermoDadiWrapper${props.statoTema}`}
    >
      <div className="schermoDadi">
        {iconaDado1}
        {iconaDado2}
      </div>
      <button
        className={`btnLanciaDadi ` + `btnLanciaDadi${props.statoTema}`}
        onClick={onClickLanciaDadi}
      >
        LANCIA I DADI
      </button>
    </div>
  )
}
