import "./Console.scss"
import animazioneHello from "../../contents/hello.gif"
import { useState } from "react"

export default function Console(props) {
    let [pulsantieraAperta, setPulsantieraAperta] = useState(false)

    function gestoreClick() {
        setPulsantieraAperta(!pulsantieraAperta)
    }

  return (
    <div className="consoleWrapper">
        <div className={`pulsantieraConsole pulsantiera${pulsantieraAperta}`}>
            <button className={`bottonePulsantieraOnOff`} onClick={gestoreClick}></button>
        </div>
      <div className="schermoConsole">
        <div className="schermoSuperiore">
          <img className="animazioneHello" src={animazioneHello} />
        </div>
        <div className="schermoInferiore">
          <h3 className="scritteConsole titoloConsole">Ehi...Ciao {props.nome}!<br/>Come va?</h3>
          <h4 className="scritteConsole selettoreConsole">bene | male</h4>
        </div>
      </div>
    </div>
  )
}
