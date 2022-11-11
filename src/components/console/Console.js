import "./Console.scss"
import animazioneHello from "../../contents/hello.gif"
import { useState } from "react"
import * as FaIcons from "react-icons/fa"

export default function Console(props) {
    let [pulsantieraAperta, setPulsantieraAperta] = useState(false)

    function gestoreClick() {
        setPulsantieraAperta(!pulsantieraAperta)
    }

  return (
    <div className="consoleWrapper">
        <div className={`pulsantieraConsole pulsantiera${pulsantieraAperta}`}>
            <h4 className="scrittaTastierino">TASTIERINO</h4>
            <button className={`bottonePulsantieraOnOff`} onClick={gestoreClick}></button>
        </div>
        <div className={`pulsantiera2Console`}>
            <button className="tastiConsoleDS"><FaIcons.FaRegArrowAltCircleLeft className="iconeTastiConsole"/></button>
            <button className="tastiConsoleDS tastoENTERCOnsoleDS">ENTER</button>
            <button className="tastiConsoleDS"><FaIcons.FaRegArrowAltCircleRight className="iconeTastiConsole"/></button>
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
