import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="home">Home 🏚</Link>
        <Link to="about">About 🙋‍♀️</Link>
      </nav>

      <Routes>
        <Route>
          <Route path="./Pages/Home.jsx" element={<Home />} />
          <Route path="./Pages/About.jsx" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
