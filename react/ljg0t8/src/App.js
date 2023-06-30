import React from "react";

function Square(props) {
  function clickHandler() {
    console.log("Clicked!!");
  }

  return (
    <button className="square" onClick={clickHandler}>
      {props.value}
    </button>
  );
}

export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </div>
  );
}
