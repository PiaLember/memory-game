import Game from "./Game";

export default function Header() {
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <button>Easy</button>
      <button>Medium</button>
      <button>Hard</button>
      <h3>Choose a difficulty to begin!</h3>
      <div className="game">
        <Game />
      </div>
    </div>
  );
}
