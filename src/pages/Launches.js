import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pages.css";

function Launches(props) {
  const [launches, launch] = useState(null);
  const [id, setId] = useState("");
  const tmpArray = [];

  useEffect(() => {
    axios
      .get(
        `https://lldev.thespacedevs.com/2.2.0/launch/?mode=list&search=${id}`
      )
      .then((res) => {
        for (let i = 0; i < res.data.results.length; i++) {
          tmpArray.push(res.data.results[i]);
        }
        //console.log(tmpArray);
        console.log(res);
        launch(tmpArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    launches && (
      <ol>
        <label>
          Här kan du söka på alla olika raket uppskjutningar som gjorts! <br />
          <input
            placeholder="Exempel på sökord SpaceX"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        {launches.map((data) => (
          <li className="renderP" key={data.id}>
            <p>
              <strong>Launch service program:</strong> {data.lsp_name} <br />{" "}
              <strong>Mission:</strong> {data.mission} <br />{" "}
              <strong>Mission type:</strong> {data.mission_type} <br />{" "}
              <strong>Date:</strong> {data.net} <br />{" "}
              <strong>Rockets orbit:</strong> {data.orbit} <br />
              <strong>Rocket name:</strong> {data.name} <br />
              <strong>Location of rocket launch:</strong> {data.location} <br />
              <strong>Status of misson:</strong> {data.status.abbrev}
              <br />
              <strong>Description of mission:</strong> {data.status.description}
              <br /> <strong>Status of launch:</strong> {data.status.name}
            </p>
            <img className="rocketpics" alt="spacerockets" src={data.image} />
          </li>
        ))}
      </ol>
    )
  );
}

export default Launches;
