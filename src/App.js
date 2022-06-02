import space from "./space.jpg";
import "./App.css";
import React from "react";
import Agencies from "./pages/Agencies";
import Launches from "./pages/Launches";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 className="header">
        Här kan du få massa information om alla rymdfärder människan har gjort.
      </h1>
      <BrowserRouter>
        <nav className="naav">
          <ul className="uul">
            <li>
              <Link className="link" to="/pages/Home">
                Hem
              </Link>
            </li>
            <li>
              <Link className="link" to="/pages/Launches">
                Launches
              </Link>
            </li>
            <li>
              <Link className="link" to="/pages/Agencies">
                Agencies
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route element={<Launches />} path="/pages/Launches" />
          <Route element={<Agencies />} path="/pages/Agencies" />
          <Route
            element={<Home name="Earthling" star="stars" />}
            path="/pages/Home"
          />
        </Routes>
      </BrowserRouter>
      <img alt="space" height="400" src={space} />
    </div>
  );
}

export default App;
