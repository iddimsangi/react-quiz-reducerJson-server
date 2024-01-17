import { useReducer, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Qustion from "./Qustion";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  currentQsn:null, 
  currentPoints:0,
  isCorrect:false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "received":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "receivedFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "start",
        currentQsn:state.questions[state.index]
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + action.payload,
        isCorrect:false,
        currentQsn:state.questions[state.index + action.payload]
      };
    case "pressedAnswer":
      return {
        ...state,
        answer: action.payload,
        isCorrect:action.payload === state.currentQsn.correctOption ? true : state.isCorrect
      };
    default:
      throw new Error("unknown action type");
  }
};

function App() {
  const [mystate, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer, currentQsn, currentPoints, isCorrect } = mystate;
  const totalQsns = questions.length;
  const totalPoints = questions.reduce(
    (acc, currQsn) => acc + currQsn.points,
    0
  );
//   console.log(totalPoints);
console.log(mystate);
console.log();
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await fetch("http://localhost:9000/questions");
        const response = await data.json();
        dispatch({ type: "received", payload: response });
      } catch (error) {
        console.log(error);
        dispatch({ type: "receivedFailed" });
      }
    };

    fetchQuestions();
  }, []);
  return (
    <div className="container">
      {status === "ready" && <Home dispatch={dispatch} />}
      {status === "start" && (
        <Qustion
          totalPoints={totalPoints}
          totalQsns={totalQsns}
          index={index}
          dispatch={dispatch}
          questionSelected={questions[index]}
          currentPoints={currentPoints}
          isCorrect={isCorrect}
        />
      )}
      {/* Render other components based on the state */}
    </div>
  );
}

export default App;
