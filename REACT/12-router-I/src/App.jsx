import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="home">Home 🏚</Link>
        <Link to="about">About 🙋‍♀️</Link>
      </nav>

      <Routes>
        <Route>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
