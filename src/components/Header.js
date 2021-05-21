import React, { useState } from "react";
import Game from "./Game";

export default function Header() {
  let [difficulty, setDifficulty] = useState(null);

  return (
    <div className="header">
      <h1>Memory Game 👀</h1>
      {difficulty === null ? (
        <div className="buttons">
          <button onClick={() => setDifficulty(12)}>Easy</button>
          <button onClick={() => setDifficulty(18)}>Medium</button>
          <button onClick={() => setDifficulty(24)}>Hard</button>
        </div>
      ) : (
        <div className="buttons">
          <button onClick={() => setDifficulty(null)}>Back</button>
          <hr />
        </div>
      )}

      {difficulty ? (
        <div>
          <Game difficulty={difficulty} setDifficulty={setDifficulty} />
          <hr />
        </div>
      ) : (
        <div>
          <h3>Choose a difficulty to begin!</h3>
          <hr />
        </div>
      )}
    </div>
  );
}
