import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Game({ difficulty, setDifficulty }) {
  let [game, setGame] = useState([]);
  let color = [
    { name: "#F82600" },
    { name: "#FEFE00" },
    { name: "#2A7F15" },
    { name: "#1C1FFC" },
    { name: "#7E7E7E" },
    { name: "#A734CC" },
    { name: "#F98003" },
    { name: "#F8297F" },
    { name: "#46FDFF" },
    { name: "#3EFB00" },
    { name: "#994555" },
    { name: "#550E84" },
  ];
  let color2 = [...color];

  useEffect(() => {
    let easy = color.copyWithin(6);
    let medium = color2.slice(0, 9).concat(color2.slice(0, 9));
    let hard = color2.concat(color2);
    if (difficulty === 12) {
      setGame(easy.sort(() => Math.random() - 0.5));
    } else if (difficulty === 18) {
      setGame(medium.sort(() => Math.random() - 0.5));
    } else if (difficulty === 24) {
      setGame(hard.sort(() => Math.random() - 0.5));
    }
  }, []);
  console.log(game);

  return (
    <div className="cards">
      {game.map((card, index) => (
        <div className="card" key={index}>
          <Card id={index} color={card.name} game={game} />
        </div>
      ))}
    </div>
  );
}
