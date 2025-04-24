import React from "react";
import "../../public/styles.css";
import playerCards from "../players";
import Card from "./Card";

function App() {
  let audio = new Audio("/mouse-click-290204.mp3");

  const start = () => {
    audio.play();
  };
  return (
    <div>
      <h1 className="heading">Developer Squad</h1>
      <div className="card-container">
        {playerCards.map((player) => (
          <Card
            onClick={start}
            name={player.class}
            src={player.imgURL}
            alt="avatar_img"
            skills={player.skills}
            quote={player.quote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
