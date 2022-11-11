import { useState } from "react"

export default function SelettoreConsole(props) {

    let creazioneListItem = props.opzioni.map((opzione) => {
        
        return <li className={`liSelettoreConsole `}>{opzione}</li>
    })

    return (
        <ul className={`ulSelettoreConsole`}>
            {creazioneListItem}
        </ul>
    )
}