import { useState } from "react";

export function Tictactoe() {
  const [board, setboard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [isXturn, setXturn] = useState(true);

  const handleclick = (index) => {
    if (!winner && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXturn ? "X" : "O";
      setboard(boardCopy);
      setXturn(!isXturn);
    }
  };

  const decidewinner = (board) => {
    let count = 0;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [1, 4, 7],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return `The Winner is ${board[a]}`;
      }
    }
    for (let i = 0; i <= 8; i++) {
      if (board[i] != null) {
        count += 1;
      }
    }
    if (count === 9) {
      return `Match Drawn`;
    }
  };
  const winner = decidewinner(board);
  return (
    <div>
      <div className="board">
        {board.map((val, index) => (
          <Gamebox val={val} onplayerclick={() => handleclick(index)} />
        ))}
      </div>
      <h2> {winner}</h2>
    </div>
  );
}
function Gamebox({ val, onplayerclick }) {
  const styles = { color: val === "X" ? "green" : "red" };
  return (
    <div className="game-box" style={styles} onClick={() => onplayerclick()}>
      {val}
    </div>
  );
}
