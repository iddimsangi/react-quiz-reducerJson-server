import React from 'react'

const ScoreHeader = () => {
  return (
    <div id="hud">
            <div id="hud-item">
                <p id="progressText" className="hud-prefix">
                    Question
                </p>
                <div id="progressBar">
                    <div id="progressBarFull"></div>
                </div>    
            </div>
            <div id="hud-item">
                <p className="hud-prefix">
                    Score
                </p>
                <h1 className="hud-main-text" id="score">
                    0
                </h1>
            </div>
        </div>
  )
}

export default ScoreHeader