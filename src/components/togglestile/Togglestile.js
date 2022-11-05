import React, { useState } from "react"
import "./Togglestile.scss"
import * as GiIcons from "react-icons/gi"
import * as FaIcons from "react-icons/fa"

export default function Togglestile({ statoTema }) {
  const [toggleStile, setToggleStile] = useState(true)
  const [over, setOver] = useState(false)

  function gestoreClick() {
    setToggleStile(!toggleStile)
    statoTema(toggleStile)
  }

  function gestoreOver() {
    setOver(true)
  }

  function gestoreLeave() {
    setOver(false)
  }

  let iconaDelTema = !toggleStile ? (
    <GiIcons.GiTopHat className="iconaDelTemaClassico" />
  ) : (
    <FaIcons.FaRedhat className="iconaDelTemaFuturistico" />
  )

  return (
    <div className="toggleStileWrapper">
      {over && (
        <h1 className={`testoSelettoreTema${toggleStile}`}>SELETTORE TEMA</h1>
      )}
      <button
        onMouseEnter={gestoreOver}
        onMouseLeave={gestoreLeave}
        onClick={gestoreClick}
        className="toggleStile"
        id={`toggleStile${toggleStile}`}
      >
        <div
          className={
            "toggleStileButton " +
            (toggleStile ? "toggleDestra" : "toggleSinistra")
          }
          id={`toggleStileButton${toggleStile}`}
        >
          {iconaDelTema}
        </div>
      </button>
    </div>
  )
}
