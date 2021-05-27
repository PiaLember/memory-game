import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";

export default function Card({
  id,
  colorId,
  game,
  color,
  count,
  setCount,
  flippedCount,
  setFlippedCount,
}) {
  let [flipped, set] = useState(false);
  let { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  useEffect(() => {
    if (count[2] === true && count.indexOf(id) > -1) {
      setTimeout(() => {
        set((state) => !state);
        setFlippedCount(flippedCount + 1);
        setCount([]);
        let sound1 = new Audio("sounds/small.wav");
        sound1.play();
      }, 1000);
    } else if (count[2] === false && id === 0) {
      let sound3 = new Audio("sounds/unlock.wav");
      sound3.play();
      setFlippedCount(flippedCount + 1);
      setCount([]);
    }
  }, [count]);

  function onCardClick() {
    if (!game[id].flipped && flippedCount % 3 === 0) {
      set((state) => !state);
      setFlippedCount(flippedCount + 1);
      let sound1 = new Audio("sounds/small.wav");
      sound1.play();
      let newCount = [...count];
      newCount.push(id);
      setCount(newCount);
    } else if (
      flippedCount % 3 === 1 &&
      !game[id].flipped &&
      count.indexOf(id) < 0
    ) {
      set((state) => !state);
      setFlippedCount(flippedCount + 1);
      let sound1 = new Audio("sounds/small.wav");
      sound1.play();
      let newCount = [...count];
      newCount.push(id);
      setCount(newCount);
    }
  }

  return (
    <div className="card" onClick={onCardClick}>
      <a.div
        className="c back"
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      />
      <a.div
        className="c front"
        style={{
          opacity,
          transform,
          rotateX: "180deg",
          background: color,
        }}
      />
    </div>
  );
}
