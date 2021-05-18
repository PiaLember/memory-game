import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";

export default function Card(props) {
  let [flipped, set] = useState(false);
  let { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  let game = props.game;

  return (
    <div className="card" onClick={() => set((state) => !state)}>
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
          background: props.color,
        }}
      />
    </div>
  );
}
