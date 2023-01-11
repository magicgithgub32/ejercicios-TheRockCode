import Login from './pages/Login'
import Private from './pages/Private'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="login" element={<Login />} />
          <Route path="private" element={<Private />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App;