import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Game1 from "./pages/Game1"; // ✅ Ensure this matches the filename exactly

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to the Game Collection</h1>

        <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/game1">
            <button>Play Game 1</button>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game1" element={<Game1 />} /> {/* ✅ Ensure Game1 is used correctly */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
