import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
 
function Counter() {
  // const [count, setCount] = useState(1);
  // const [message, setMessage] = useState("Hello World");
 
  const [state, setState] = useState({count: 1, message: "Hello World"})
 
  const increase = () => {
    console.log(state);
    setState({...state, count: state.count + 1, abc: 123});
  }
  const outerFunction = () => {
    console.log("outerFunction");
    const innerFunction = () => console.log("inner function");
    setTimeout(() => console.log("setTimeout"), 0);
    return innerFunction;
  }
  useEffect(outerFunction)
  console.log('rendered')
  return (
    <div>
      <p>{state.message}</p>
      <p>
        {state.count}
      </p>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
 
function App() {
  const [state, setState] = useState(true)
  const showHide = () => {
    setState(!state)
  }
  return (
  
    <div className="App">
      {state? <Counter />: null}
      <button onClick={showHide}>showHide</button>
    </div>
  );
}
 
export default App;