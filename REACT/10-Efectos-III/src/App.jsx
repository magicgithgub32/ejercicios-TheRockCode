import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [style, setStyle] = useState({})

  const [backgroundColor, setBackgroundColor] = useState('white')

  useEffect(() => {
    let newStyles = {backgroundColor} // {backgroundColor : backgroundColor}
    setStyle(newStyles)
  }, [backgroundColor])

  return (
    <div className="App">
      <h2>Editando estilos de forma dinámica.</h2>
      <button  style={style} >Estilos dinámicos</button>
      <input 
      type="color"
      label="Selecciona el color de fondo"
      onChange={(e) => setBackgroundColor(e.target.value)}  />
      </div>
  )
}

export default App
