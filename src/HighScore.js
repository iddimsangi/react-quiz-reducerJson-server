import React from 'react'

const HighScore = () => {
  return (
    <div className="">
    <div id="highScores" className="flex-center flex-column">
      <h1 id="finalScore">High Scores</h1>
      <ul id="highScoresList"></ul>
      <a className="btn" href="index.html">Go Home</a>
    </div>
  </div>
  )
}

export default HighScore