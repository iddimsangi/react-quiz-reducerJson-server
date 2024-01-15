import './App.css';
import End from './End';
import Home from './Home';
import HighScore from './HighScore';

function App() {
  return (
    <>
     <div className="container">
    <div id="game" className="justify-center flex-column">
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
        <h2 id="question">What is the answer to this question?</h2>
        <div className="choice-container">
            <p className="choice-prefix">A</p>
            <p className="p choice-text" data-number="1">Choice 1</p>
        </div>
        <div className="choice-container">
            <p className="choice-prefix">B</p>
            <p className="p choice-text" data-number="2">Choice 2</p>
        </div>
        <div className="choice-container">
            <p className="choice-prefix">C</p>
            <p className="p choice-text" data-number="3">Choice 3</p>
        </div>
        <div className="choice-container">
            <p className="choice-prefix">D</p>
            <p className="p choice-text" data-number="4">Choice 4</p>
        </div>
    </div>
    </div>
    <End/>
    <Home/>
    <HighScore/>
    </>
   

  );
}

export default App;
