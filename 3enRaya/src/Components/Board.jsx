import {  useState } from "react";
import Square from "./Square";
import "./cuadrado.css";

export default function Board() {
  const [xisNext,setXisNext] = useState(true)
  const [squares,setSquares] = useState(Array(9).fill(null));

  function calculateWinner(squares) {

    const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for(let i=0; i<lines.length ; i++) {
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null; 
  }

  function handleClick(i) {

    if(squares[i]  || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    if(xisNext) {
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "0"
    }
    
    setSquares(nextSquares);
    setXisNext(!xisNext);

  }

  const winner = calculateWinner(squares);


  return (
    <>
      <div>
        <Square value={squares[0]} onCLickSquare={() => handleClick(0)}/>
        <Square value={squares[1]} onCLickSquare={() => handleClick(1)}/>
        <Square value={squares[2]} onCLickSquare={() => handleClick(2)}/>
      </div>
      <div>
        <Square value={squares[3]} onCLickSquare={() => handleClick(3)}/>
        <Square value={squares[4]} onCLickSquare={() => handleClick(4)}/>
        <Square value={squares[5]} onCLickSquare={() => handleClick(5)}/>
      </div>
      <div>
        <Square value={squares[6]} onCLickSquare={() => handleClick(6)}/>
        <Square value={squares[7]} onCLickSquare={() => handleClick(7)}/>
        <Square value={squares[8]} onCLickSquare={() => handleClick(8)}/>
      </div>
      <div className="status">{winner} </div>
    </>
  );
}
