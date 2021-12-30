import { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Button from "@mui/material/Button";
export function Tictactoe() {
  const initial = [null, null, null, null, null, null, null, null, null];
  const [board, setboard] = useState(initial);

  const [isXturn, setXturn] = useState(true);
  let boardCopy;
  const handleclick = (index) => {
    if (!winner && !board[index]) {
       boardCopy = [...board];
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
  let xwins=0;
  let owins=0;
  
  const winner = decidewinner(board);
  // if(winner==="X"){
  //   xwins++;
  //   console.log(xwins,owins);
  // }else if(winner==="O"){
  //    owins++;
  //    console.log(xwins,owins);
  // }
  return (
    <div>
      <div>
        <span>Choose X or O</span>
        <Button variant="outlined" onClick={() => setXturn(true)}>
          X
        </Button>
        <Button variant="outlined" onClick={() => setXturn(false)}>
          O
        </Button>
      </div>

      <div className="board">
        {board.map((val, index) => (
          <Gamebox val={val} onplayerclick={() => handleclick(index)} />
        ))}
      </div>
      
      <h2> {winner}</h2>
      <Button
        variant="outlined"
        onClick={() => setboard(initial)}
        startIcon={<AutorenewIcon />}
      >
        restart
      </Button>
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
