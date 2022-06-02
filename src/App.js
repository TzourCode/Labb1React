import "./App.css";
import React from "react";
import Quiz from "./pages/Quiz";
import Agencie from "./pages/Agencie";
import Launche from "./pages/Launche";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>
        Hej och välkommen till rymdsidan!
        <br></br>
        Här kan du klicka på en av länkarna för att titta på vilka och hur många
        raketer vi har skickat upp till rymden eller vilka bolag som har varit
        involverade med allt som har med rymden att göra.
      </h1>
      <BrowserRouter>
        <nav className="naav">
          <ul className="uul">
            <li>
              <Link className="link" to="/pages/Home">
                Hope
              </Link>
            </li>
            <li>
              <Link className="link" to="/pages/Launche">
                Launches
              </Link>
            </li>
            <li>
              <Link className="link" to="/pages/Agencie">
                Agencies
              </Link>
            </li>
            <li>
              <Link className="link" to="/pages/Quiz">
                Quiz
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route element={<Quiz />} path="/pages/Quiz" />
          <Route element={<Launche />} path="/pages/Launche" />
          <Route element={<Agencie />} path="/pages/Agencie" />
          <Route
            element={<Home name="Earthling" star="stars" />}
            path="/pages/Home"
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
