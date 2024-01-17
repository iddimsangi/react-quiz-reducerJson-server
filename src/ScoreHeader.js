import React from 'react'

const ScoreHeader = ({totalQsns, index, totalPoints, currentPoints}) => {
  return (
    <div id="hud">
            <div id="hud-item">
                <p id="progressText" className="hud-prefix">
                    {`Question: ${index + 1}/${totalQsns}`}
                </p>
                <input type="range" min="0" max="15" value={index+1} readOnly/>
                 
            </div>
            <div id="hud-item">
                <p className="hud-prefix">
                    Score
                </p>
                <h1 className="hud-main-text" id="score">
                    {`${currentPoints}/${totalPoints}`}
                </h1>
            </div>
        </div>
  )
}

export default ScoreHeader