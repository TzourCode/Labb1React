import React, { useEffect, useState } from "react";

function spacelaunch() {
  const [spacelaunch, launch] = useState();
  const tmpArray = [];

  useEffect(() => {
    fetch("https://lldev.thespacedevs.com/2.2.0/agencies/")
      .then((res) => res.json())
      .then((data) => {
        for (var i = 0; i < data.results.length; i++) {
          tmpArray.push(data.results[i]);
        }
        launch(tmpArray);
        console.log(tmpArray);
        console.log(data);
      });
  }, []);

  return (
    spacelaunch && (
      <ol>
        {spacelaunch.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ol>
    )
  );
}
export default spacelaunch;
