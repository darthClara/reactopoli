import React from "react"
import "./StileRettangoli.scss"

export default function StileRettangoli(props) {
  let contenuto = () => {
    if ((props.tipo == "terreno") && !props.luce) {
      return (
        <div
          className={"strisciaColorata"}
          style={{
            backgroundColor: props.colore,
            boxShadow: `0 0 50px ${props.colore}, 0 0 90px ${props.colore}, 0 0 100px ${props.colore}`,
          }}
        ></div>
      )
    } else {
      return (
        <div
          className={"strisciaColorata"}
          style={{
            backgroundColor: props.colore,
          }}
        ></div>
      )
    }
  }

  return <div className={`stileRettangoliWrapper ` + `stileRettangoliWrapper${props.luce}`}>{contenuto()}</div>
}
