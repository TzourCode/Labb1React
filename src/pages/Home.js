import React from "react";
import space from "../space.jpg";

function Home(props) {
  console.log(props);
  return (
    <div>
      <h1 className="earthling">
        Hello my fellow <strong>{props.name}</strong>!
      </h1>{" "}
      <p className="hope">
        Maybe some day we can prevent self-annihilation from conflicts among our
        self and travel beyond the <strong>{props.star} </strong>
        we see and continuing the evolution of human species.
      </p>
      <img alt="space" height="500" src={space} />
    </div>
  );
}

export default Home;
