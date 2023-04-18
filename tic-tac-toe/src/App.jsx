import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cell from './components/Cell';

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("x");
  //win = null - "available"
  const [win, setWin] = useState(null);

  // handleCell = () => {
    

  // }

  return (
    <div className='page-wrapper' >
      <h1> BOARD - GAME </h1>
      <button>hello game</button>

      <div className="board-wrapper">
        
        {Array.from("123456789").map((ind) => (
          <Cell key={ind} ind={ind} ></Cell>
          
        ))}
      </div>
    </div>
  )
}

export default App
