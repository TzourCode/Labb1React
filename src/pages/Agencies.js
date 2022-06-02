import React, { useEffect, useState } from "react";

function Spacelaunch() {
  const [spacelaunch, launch] = useState(null);
  const tmpArray = [];

  useEffect(() => {
    fetch("https://lldev.thespacedevs.com/2.2.0/agencies/")
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.results.length; i++) {
          tmpArray.push(data.results[i]);
        }
        launch(tmpArray);
        //console.log(tmpArray);
        console.log(data);
      });
  }, []);

  return (
    spacelaunch && (
      <ol>
        {spacelaunch.map((data) => (
          <li className="renderP" key={data.id}>
            <p>
              <strong>Abbrevation:</strong> {data.abbrev} <br />{" "}
              <strong>Administrator:</strong> {data.administrator} <br />{" "}
              <strong>Country:</strong> {data.country_code} <br />{" "}
              <strong>Description:</strong> {data.description} <br />{" "}
              <strong>Founding year:</strong> {data.founding_year} <br />
              <strong>Number of launchers:</strong> {data.launchers} <br />
              <strong>Agencie name:</strong> {data.name} <br />
              <strong>Spacecraft(s):</strong> {data.spacecraft}
              <br />
              <strong>Agencies type:</strong> {data.type}
              <br />
            </p>
            <img
              className="rocketpics"
              alt="spacerockets"
              src={data.image_url}
            />
          </li>
        ))}
      </ol>
    )
  );
}
export default Spacelaunch;
