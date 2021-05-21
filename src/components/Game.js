import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Game({ difficulty, setDifficulty }) {
  let [game, setGame] = useState([]);
  let [count, setCount] = useState([]);
  let [flippedCount, setFlippedCount] = useState(0);
  let color = [
    { name: "#F82600", flipped: false, colorId: 1 },
    { name: "#FEFE00", flipped: false, colorId: 2 },
    { name: "#2A7F15", flipped: false, colorId: 3 },
    { name: "#1C1FFC", flipped: false, colorId: 4 },
    { name: "#7E7E7E", flipped: false, colorId: 5 },
    { name: "#A734CC", flipped: false, colorId: 6 },
    { name: "#F98003", flipped: false, colorId: 7 },
    { name: "#F8297F", flipped: false, colorId: 8 },
    { name: "#46FDFF", flipped: false, colorId: 9 },
    { name: "#3EFB00", flipped: false, colorId: 10 },
    { name: "#994555", flipped: false, colorId: 11 },
    { name: "#550E84", flipped: false, colorId: 12 },
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

  if (count.length === 2) {
    let match = game[count[0]].colorId === game[count[1]].colorId;
    if (match) {
      let newGame = [...game];
      newGame[count[0]].flipped = true;
      newGame[count[1]].flipped = true;
      setGame(newGame);

      let newCount = [...count];
      newCount.push(false);
      setCount(newCount);
    } else {
      let newCount = [...count];
      newCount.push(true);
      setCount(newCount);
    }
  }
  useEffect(() => {
    let finished = !game.some((card) => !card.flipped);
    if (finished && game.length > 0) {
      setTimeout(() => {
        alert("Good job!");
        setDifficulty(null);
      }, 1000);
    }
  }, [game]);

  return (
    <div className="cards">
      {game.map((card, index) => (
        <div className="card" key={index}>
          <Card
            id={index}
            colorId={card.colorId}
            color={card.name}
            game={game}
            count={count}
            setCount={setCount}
            flippedCount={flippedCount}
            setFlippedCount={setFlippedCount}
          />
        </div>
      ))}
    </div>
  );
}
