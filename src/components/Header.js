import React, { useState } from "react";
import Game from "./Game";

export default function Header() {
  let [difficulty, setDifficulty] = useState(null);

  return (
    <div className="header">
      <h1>Memory Game</h1>
      {difficulty === null ? (
        <div>
          <button onClick={() => setDifficulty(12)}>Easy</button>
          <button onClick={() => setDifficulty(18)}>Medium</button>
          <button onClick={() => setDifficulty(24)}>Hard</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setDifficulty(null)}>Back</button>
        </div>
      )}

      {difficulty ? (
        <Game difficulty={difficulty} setDifficulty={setDifficulty} />
      ) : (
        <h3>Choose a difficulty to begin!</h3>
      )}
    </div>
  );
}
