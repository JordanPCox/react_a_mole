import React from 'react'

const SplashPage = ({ startGame }) => {
    return (
        <div>
            <h2>Welcome to React-A-Mole!</h2>
            <p>Click start to commence the carnage!</p>
            <button onClick={startGame}>Start</button>
        </div>
    )
}

export default SplashPage