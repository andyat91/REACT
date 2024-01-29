import { useEffect, useState } from "react";
import Square from "./Square";
import "./board.css";

export default function Board() {
  //useStates----------------------------------------------------------------------------------
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [xisNext, setXisNext] = useState(true);
  const [showwinner, setShowWinner] = useState(false);

  //Funcion cacular ganador------------------------------------------------------------------
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
      //va comparando por lineas,escritas anteriormente como ganadoras.
      //si A existe y es igual a B y es igual a C retorna el valor que tenga el cuadrado
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  //Funcion manejar click en cuadrado------------------------------------------------------------
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xisNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "0";
    }

    setSquares(nextSquares);
    setXisNext(!xisNext);
  }

  const winner = calculateWinner(squares);

// useEffect------------------------------------------------------------------------------------------

  useEffect(() => {
    if (winner) {
      setShowWinner(true);
    }
  }, [winner]);

//Return----------------------------------------------------------------------------------------------

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <div className="lines">
        <Square value={squares[0]} onCLickSquare={() => handleClick(0)} />
        <Square value={squares[1]} onCLickSquare={() => handleClick(1)} />
        <Square value={squares[2]} onCLickSquare={() => handleClick(2)} />
      </div>
      <div className="lines">
        <Square value={squares[3]} onCLickSquare={() => handleClick(3)} />
        <Square value={squares[4]} onCLickSquare={() => handleClick(4)} />
        <Square value={squares[5]} onCLickSquare={() => handleClick(5)} />
      </div>
      <div className="lines">
        <Square value={squares[6]} onCLickSquare={() => handleClick(6)} />
        <Square value={squares[7]} onCLickSquare={() => handleClick(7)} />
        <Square value={squares[8]} onCLickSquare={() => handleClick(8)} />
      </div>
      <div className="status">
        {showwinner ? <h1>Winner: {winner} </h1> : <h1>Lets Go!</h1>}

        <button className="button" onClick={() => window.location.reload()}>
          Refresh
        </button>
      </div>
    </div>
  );
}
