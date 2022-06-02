import React, { useState } from "react";
import "./pages.css";
import Earth from "../images/earth.jpg";
import Mars from "../images/mars.jpg";
import Jupiter from "../images/jupiter.jpg";
import Mercury from "../images/mercury.jpg";
import Neptunus from "../images/neptunus.jpg";
import Pluto from "../images/pluto.jpg";
import Saturnus from "../images/saturnus.jpg";
import Uranus from "../images/uranus.jpg";
import Venus from "../images/venus.jpg";

function showpic() {
  const [eplanet, tellus] = useState("");
  const [mplanet, mars] = useState("");
  const [jplanet, jupiter] = useState("");
  const [meplanet, mercury] = useState("");
  const [nplanet, neptunus] = useState("");
  const [pplanet, pluto] = useState("");
  const [splanet, saturnus] = useState("");
  const [uplanet, uranus] = useState("");
  const [vplanet, venus] = useState("");

  return (
    <div>
      <label className="labels">
        What is the correct name for this planet? <br></br>
        <input
          placeholder="Enter planets name"
          type="text"
          value={eplanet}
          onChange={(e) => tellus(e.target.value)}
        />
      </label>

      <p>
        {eplanet === "earth"
          ? eplanet + " is right ✔"
          : eplanet.length < 1
          ? ""
          : eplanet.length > 0
          ? "You were wrong :( try again!"
          : ""}
      </p>
      <img alt="Earth" src={Earth} />
      <br></br>
      <label className="labels">
        What is the correct name for this planet? <br></br>
        <input
          placeholder="Enter planets name"
          type="text"
          value={mplanet}
          onChange={(e) => mars(e.target.value)}
        />
      </label>

      <p>
        {mplanet === "mars"
          ? mplanet + " is right ✔"
          : mplanet.length < 1
          ? ""
          : mplanet.length > 0
          ? "You were wrong :( try again!"
          : ""}
      </p>
      <img alt="Mars" src={Mars} />
      <br></br>
      <label className="labels">
        What is the correct name for this planet? <br></br>
        <input
          placeholder="Enter planets name"
          type="text"
          value={jplanet}
          onChange={(e) => jupiter(e.target.value)}
        />
      </label>

      <p>
        {jplanet === "jupiter"
          ? jplanet + " is right ✔"
          : jplanet.length < 1
          ? ""
          : jplanet.length > 0
          ? "You were wrong :( try again!"
          : ""}
      </p>
      <img alt="jupiter" src={Jupiter} />
      <br></br>
      <label className="labels">
        What is the correct name for this planet? <br></br>
        <input
          placeholder="Enter planets name"
          type="text"
          value={meplanet}
          onChange={(e) => mercury(e.target.value)}
        />
      </label>

      <p>
        {meplanet === "mercury"
          ? meplanet + " is right ✔"
          : meplanet.length < 1
          ? ""
          : meplanet.length > 0
          ? "You were wrong :( try again!"
          : ""}
      </p>
      <img alt="Mercury" src={Mercury} />
      <br></br>
      <label className="labels">
        What is the correct name for this planet? <br></br>
        <input
          placeholder="Enter planets name"
          type="text"
          value={nplanet}
          onChange={(e) => neptunus(e.target.value)}
        />
      </label>

      <p>
        {nplanet === "neptunus"
          ? nplanet + " is right ✔"
          : nplanet.length < 1
          ? ""
          : nplanet.length > 0
          ? "You were wrong :( try again!"
          : ""}
      </p>
      <img alt="neptunus" src={Neptunus} />
      <br></br>
      <label className="labels">
        What is the correct name for this planet? <br></br>
        <input
          placeholder="Enter planets name"
          type="text"
          value={pplanet}
          onChange={(e) => pluto(e.target.value)}
        />
      </label>

      <p>
        {pplanet === "pluto"
          ? pplanet + " is right ✔"
          : pplanet.length < 1
          ? ""
          : pplanet.length > 0
          ? "You were wrong :( try again!"
          : ""}
      </p>
      <img alt="pluto" src={Pluto} />
      <br></br>
      <label className="labels">
        What is the correct name for this planet? <br></br>
        <input
          placeholder="Enter planets name"
          type="text"
          value={splanet}
          onChange={(e) => saturnus(e.target.value)}
        />
      </label>

      <p>
        {splanet === "saturnus"
          ? splanet + " is right ✔"
          : splanet.length < 1
          ? ""
          : splanet.length > 0
          ? "You were wrong :( try again!"
          : ""}
      </p>
      <img alt="saturnus" src={Saturnus} />
      <br></br>
      <label className="labels">
        What is the correct name for this planet? <br></br>
        <input
          placeholder="Enter planets name"
          type="text"
          value={uplanet}
          onChange={(e) => uranus(e.target.value)}
        />
      </label>

      <p>
        {uplanet === "uranus"
          ? uplanet + " is right ✔"
          : uplanet.length < 1
          ? ""
          : uplanet.length > 0
          ? "You were wrong :( try again!"
          : ""}
      </p>
      <img alt="uranus" src={Uranus} />
      <br></br>
      <label className="labels">
        What is the correct name for this planet? <br></br>
        <input
          placeholder="Enter planets name"
          type="text"
          value={vplanet}
          onChange={(e) => venus(e.target.value)}
        />
      </label>

      <p>
        {vplanet === "venus"
          ? vplanet + " is right ✔"
          : vplanet.length < 1
          ? ""
          : vplanet.length > 0
          ? "You were wrong :( try again!"
          : ""}
      </p>
      <img alt="venus" src={Venus} />
    </div>
  );
}

export default showpic;
