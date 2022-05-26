import React, { useEffect } from "react";

function spacelaunch() {
  //const [spacelaunch, launch] = useState(null);

  useEffect(() => {
    fetch("https://lldev.thespacedevs.com/2.2.0/agencies/")
      .then((res) => res.json())
      .then((results) => {
        console.log(results);
      }, []);
  });

  return spacelaunch.map((data) => (
    <li key={data.results.id}>{data.results.name}</li>
  ));
}
export default spacelaunch;
