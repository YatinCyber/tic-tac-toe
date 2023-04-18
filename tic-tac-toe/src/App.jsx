import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Cell from './components/Cell';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [turn, setTurn] = useState('x');
  //win = null - "available"
  const [win, setWin] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setTurn('x');
    setWin(null);
  };
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
    setTurn(turn === 'x' ? 'o' : 'x');
    const W = handleWinner();
    if (W) {
      setWin(W);
    } else if (checkEndTheGame()) {
      setWin('available');
    }
  };
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <div className="page-wrapper">
      <h1> BOARD - GAME </h1>
      <button onClick={resetGame}>new game</button>
      <div className="board-wrapper">
        {Array.from('012345678').map((ind) => (
          <Cell key={ind} ind={ind} handleCell={handleCell} display={board[ind]}></Cell>
        ))}
      </div>
      <div className={`turn ${turn === 'x' ? 'left' : 'right'}`}>
        <Cell clsName="x" />
        <Cell clsName="o" />
      </div>

      <AnimatePresence>
        {win && (
          <motion.div
            key={'parent-box'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="winner"
          >
            <motion.div
              key={'child-box'}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text"
            >
              <motion.h2
                initial={{ scale: 0, y: 100 }}
                animate={{
                  scale: 1,
                  y: 0,
                  transition: {
                    y: { delay: 0.7 },
                    duration: 0.7,
                  },
                }}
              >
                {win === 'available' ? 'DRAW' : 'WIN'}
              </motion.h2>
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: {
                    delay: 1.3,
                    duration: 0.2,
                  },
                }}
                className="win"
              >
                {win === 'available' ? (
                  <>
                    <Cell display="x" />
                    <Cell display="o" />
                  </>
                ) : (
                  <>
                    <Cell display={win} />
                  </>
                )}
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { delay: 1.5, duration: 0.3 },
                }}
              >
                <button onClick={resetGame}>NEW GAME</button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
