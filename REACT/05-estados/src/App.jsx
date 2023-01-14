import './App.css'
import { useState } from 'react'

function App () {

const [ active, setActive ] = useState(false)

const booleanToggle = () => {
  setActive(!active)
}

console.log(`El valor del interruptor es: ${active}`)

  return (
    <div>

      <button onClick={booleanToggle}></button>

      {active ? <p>Encendido</p> : <p>Apagado</p>}


    </div>



  )




}
  export default App








