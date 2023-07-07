import React from "react";
import { useState } from "react";

function Square({ props, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {props}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function clickHandler(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className="status">{status}</div>
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

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    // TODO
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
