import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [style, setStyle] = useState({})

  const [backgroundColor, setBackgroundColor] = useState('white')

  const [color, setColor] = useState('red')

  const [fontSize, setFontSize] = useState('16')

  const [borderRadius, setBorderRadius] = useState(4);


  useEffect(() => {
    // let newStyles = {backgroundColor} 
    setStyle({backgroundColor: backgroundColor, // setStyle({newStyles})
     color: color,
     fontSize: `${fontSize}px`,
     borderRadius: `${borderRadius}px`
    })
  }, [backgroundColor, color, fontSize, borderRadius])


  return (
    <div className="App">
      <h2>Editando estilos de forma dinámica</h2>
      <button  style={style}>Cambia el color de fondo del botón</button>
      <input 
      type="color"
      label="Selecciona el color de fondo"
      onChange={(e) => setBackgroundColor(e.target.value)}  />

      <br />

      <button>Cambia el color del texto</button>
      <input 
      type="color"
      label="selecciona el color del texto del botón"
      onChange={(e) => setColor(e.target.value)}  />

      <br />

      <button>Cambia el tamaño del texto</button>
      <input 
      type="number"
      label="selecciona el tamaño del texto" 
      onChange={(e) => setFontSize(e.target.value)}/>

      <br />

      <button>Cambia el estilo del borde del botón</button>
      <input 
      type="number"
      label="selecciona el estilo del borde del botón"
      onChange={(e) => setBorderRadius(e.target.value)}/>

      </div>
  )
}

export default App




