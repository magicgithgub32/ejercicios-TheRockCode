import './App.css'
import Countdown from './components/Countdown'
import DigitalClock from './components/DigitalClock'
import StopWatch from './components/StopWatch'

function App() {

  return (
    <div className="App">
      <p>🕗</p>
      <DigitalClock />
      <p>🔂</p>
      <Countdown />
      <p>⏱</p>
       <StopWatch />
    </div>
  )
}

export default App
