import React from 'react'

const End = () => {
  return (
    <div className="">
        <div id="end" className="flex-center flex-column">
            <h1 id="finalScore">0</h1>
            <form>
                <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                />
                <button 
                type="submit" 
                className="btn" 
                id="saveScoreBtn"
                onclick="saveHighScore(event)"
                disabled
                >
                Save
                </button>
            </form>
            <a className="btn" href="game.html">Play Again</a>
            <a className="btn" href="/">Go Home</a>
        </div>
    </div>  )
}

export default End