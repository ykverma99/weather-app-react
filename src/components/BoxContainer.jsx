import React, { useState } from "react";
import Box from "./Box";

const BoxContainer = () => {
  const [isNext, setisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if (squares[i] || calculatedWinner(squares)) {
      return;
    }
    const nextSquare = squares.slice();
    if (isNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquares(nextSquare);
    setisNext(!isNext);
  };

  const winner = calculatedWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (isNext ? "X" : "O");
  }

  return (
    <div className="space-y-2.5">
      <p className="text-center text-3xl">{status}</p>
      <div className="flex flex-wrap gap-3">
        {squares.map((elm, idx) => (
          <Box
            key={idx}
            value={elm}
            onClick={() => {
              handleClick(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxContainer;

function calculatedWinner(squares) {
  let lines = [
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
