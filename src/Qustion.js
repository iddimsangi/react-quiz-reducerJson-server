import React from 'react'
import ScoreHeader from './ScoreHeader';
import SingleQsn from './SingleQsn';

const Qustion = ({question}) => {
    console.log(question);
  return (
    <div id="game" className="justify-center flex-column">
        <ScoreHeader/>
        <h2 id="question">What is the answer to this question?</h2>
        <SingleQsn/>
        <SingleQsn/>
        <SingleQsn/>
        <SingleQsn/>
        <div className='btn-container'>
        <button className='btn'>Next &rarr;</button>
        </div>
    </div>
  )
}

export default Qustion