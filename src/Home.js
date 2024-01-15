import React from 'react'

const Home = ({dispatch}) => {
  return (
    <div className="">
    <div id="home" className="flex-center flex-column">
        <h1>Quick Quiz</h1>
        <button onClick={() => dispatch({type:"start"})} className="btn">Start Quiz</button>
        {/* <a className="btn" href="highscores.html">High scores</a> */}

    </div>
</div>
  )
}

export default Home