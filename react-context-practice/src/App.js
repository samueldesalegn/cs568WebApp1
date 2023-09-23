import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

import GlobalContext from "./context";

function Wrapper(){
  return <Counter/>
}
function App() {
  const [state, setState] = useState({ count: 10, message: "" });
  const increaseBytwo = () => {
    setState({ ...state, count: state.count + 2 });
  };
  return (
    <div className="App">
      <GlobalContext.Provider value={{ state, setState }}>
        <hr />
        <Wrapper/>
        <hr />
        <p>
          Parrent Count: {state.count}
        </p>
        <p>{state.message}</p>
        <button onClick={increaseBytwo}>Change Count</button>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;

