import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("x");
  //win = null - "available"
  const [win, setWin] = useState(null);

  return (
    <div >
      <h1> BOARD - GAME </h1>
      <button>hello game</button>

      <div className="wrapper">
        <h1>wrapper</h1>
        {Array.from("012345678").map((ind) => (
          <button 
          key={ind}
          onClick={()=> console.log(ind)}
          >Cell {ind}</button>
          
                ))}
      </div>
    </div>
  )
}

export default App
