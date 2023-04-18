import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cell from './components/Cell';
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("x");
  //win = null - "available"
  const [win, setWin] = useState(null);

  const handleCell = (ind) => {
    //click duplicate, neu square đó không trùng thì được đi tiếp
    //nếu trùng thì return.
    //nếu trùng thì board[index] sẽ trả về x hoặc o, lúc đó if (true)
    if (board[ind] || win) {
      return;
    }
    const brd = board;
    brd[ind] = turn;
    setBoard(brd);
    setTurn(turn === "x" ? "o" : "x");
    const W = handleWinner();
      if (W) {
        setWin(W);
      } else if (checkEndTheGame()) {
        setWin("x | o");
      }

  }
  const checkEndTheGame = () => {
    for (let brd of board) {
        if (!brd) return false;
    }
    return true;
};
  const handleWinner = () => {
    const cases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    for (let cs of cases) {
        const [a, b, c] = cs;
        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            return board[a];
        }
    }
    return null;
};

  return (
    <div className='page-wrapper' >
      <h1> BOARD - GAME </h1>
      <button>hello game</button>
      <div className="board-wrapper">
        {Array.from("012345678").map((ind) => (
          <Cell 
          key={ind} 
          ind={ind} 
          handleCell={handleCell}
          display={board[ind]}
          ></Cell>
          
        ))}
      </div>
      

      <AnimatePresence>
        {win && <h1>win</h1>}
      </AnimatePresence>

    </div>
  )
}

export default App
