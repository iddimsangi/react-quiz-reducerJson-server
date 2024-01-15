import React from 'react'
import ScoreHeader from './ScoreHeader';
import SingleQsn from './SingleQsn';

const Qustion = ({questionSelected, totalQsns, dispatch}) => {
    console.log(questionSelected);
    const{correctOption, id, options, points, question} = questionSelected;

  return (
    <div id="game" className="justify-center flex-column">
        <ScoreHeader totalQsns={totalQsns}/>
        <h2 id="question">{question}</h2>
        <SingleQsn options = {options}  />
        <div className='btn-container'>
        <button onClick={() => dispatch({type:"nextQuestion", payload:1})} className='btn'>Next &rarr;</button>
        </div>
    </div>
  )
}

export default Qustion