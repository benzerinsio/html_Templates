import React from "react";
import { useState } from "react";

function Square(props, onSquareClick) {
  return (
    <button className="square" onClick={onSquareClick}>
      {/*{value*/}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function clickHandler() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    <div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={clickHandler} />
        <Square value={squares[1]} onSquareClick={clickHandler} />
        <Square value={squares[2]} onSquareClick={clickHandler} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={clickHandler} />
        <Square value={squares[4]} onSquareClick={clickHandler} />
        <Square value={squares[5]} onSquareClick={clickHandler} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={clickHandler} />
        <Square value={squares[7]} onSquareClick={clickHandler} />
        <Square value={squares[8]} onSquareClick={clickHandler} />
      </div>
    </div>
  );
}
