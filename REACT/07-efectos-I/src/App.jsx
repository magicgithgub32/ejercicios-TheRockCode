import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [counter, setCounter ] = useState(0)

  useEffect(() => {
  }, [counter])
  console.log (`useEffect counter makes:`, counter)

  return (
    <div className="App">
      <p>Counter makes: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add one</button>  
    </div>
  )
}

export default App










