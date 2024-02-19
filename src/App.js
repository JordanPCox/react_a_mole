import './App.css';
import { useState } from 'react'
import MoleContainer from './Components/MoleContainer'
import SplashPage from './Components/SplashPage'

function App() {
  let [score, setScore] = useState(0)
  let [gameStarted, setGameStarted] = useState(false)

  const startGame = () => {
    setGameStarted(true)
  }

  const createMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />)
    }
    return (
      <div>
        { hills }
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1>React-A-Mole</h1>
      {!gameStarted && <SplashPage startGame={startGame} />}
      {gameStarted && (
        <div>
          <p>Score: {score}</p>
          {createMoleHill()}
        </div>
      )}
    </div>
  );
}

export default App;