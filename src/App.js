import { useReducer, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Qustion from "./Qustion";

const initialState = {
  questions: [],
  status: "loading",
  index:0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "received":
      return {
        ...state,
        questions: action.payload,
        status:"ready"
      };
    case "receivedFailed":
          return {
            ...state,
            status:"error"
          }
    case "start":
        return{
            ...state,
            status:"start"
        }   
    case "nextQuestion":
        return{
            ...state,
            index:state.index + action.payload
        }   
    default:
      throw new Error("unknown action type")
  }
};

function App() {
  const [mystate, dispatch] = useReducer(reducer, initialState);
const{ questions, status, index}=mystate;
const totalQsns = questions.length;
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
      {status === "ready" && <Home dispatch={dispatch}/>}
      {status === "start" && <Qustion totalQsns={totalQsns} dispatch={dispatch} questionSelected={questions[index]}/>}
      {/* Render other components based on the state */}
    </div>
  );
}

export default App;
