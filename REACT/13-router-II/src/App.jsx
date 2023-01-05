import './App.css'
import Login from './pages/Login'
import Private from './pages/Private'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="./Pages/Login.jsx" element={<Login />} />
          <Route path="./Pages/Private.jsx" element={<Private />} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
