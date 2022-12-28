import './App.css'
import { useState } from 'react'

function App() {
  const [ active, setActive ] = useState (false)
  
  const booleanToggle = () => setActive(!active)

  console.log(active)

  return (
    <div>
      <button onClick={booleanToggle}></button>

      {active ? <p>Active</p> : <p>Inactive</p>}
    </div>
  )
}

export default App
