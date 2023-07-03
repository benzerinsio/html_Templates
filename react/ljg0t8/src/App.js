import React from "react";
import { useState } from "react";

function Square({ props, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {props}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function clickHandler(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  return (
    <div>
      <div className="board-row">
        <Square props={squares[0]} onSquareClick={() => clickHandler(0)} />
        <Square props={squares[1]} onSquareClick={() => clickHandler(1)} />
        <Square props={squares[2]} onSquareClick={() => clickHandler(2)} />
      </div>
      <div className="board-row">
        <Square props={squares[3]} onSquareClick={() => clickHandler(3)} />
        <Square props={squares[4]} onSquareClick={() => clickHandler(4)} />
        <Square props={squares[5]} onSquareClick={() => clickHandler(5)} />
      </div>
      <div className="board-row">
        <Square props={squares[6]} onSquareClick={() => clickHandler(6)} />
        <Square props={squares[7]} onSquareClick={() => clickHandler(7)} />
        <Square props={squares[8]} onSquareClick={() => clickHandler(8)} />
      </div>
    </div>
  );
}
