import React, { useContext, useState } from "react";
import "./App.css";
import GlobalContext, {GlobalContext2} from "./context";
//  import Team1 from "./Team1";
//  import Team2 from "./Team2";

const Team = React.memo(function Team({ name }) {
  console.log(`Rendered ${name}`);
  const count = useContext(GlobalContext);
  return (
    <p>
      {name}: {count}
    </p>
  );
})

function App() {
  const [count, setCount] = useState({count1: 0, count2: 0});
  // const [count2, setCount2] = useState(0);
  const increase1 = () => {
    setCount({...count, count1: count.count1+1})
  };
  const increase2 = () => {
    setCount({...count, count2: count.count2+1})
  };
  return (
    <div className="App">
      <h3>Game Time</h3>
      <GlobalContext.Provider value={count.count1}>
        <Team name="Chicago" />
      </GlobalContext.Provider>

      <GlobalContext.Provider value={count.count2}>
        <Team name="Iowa" />
      </GlobalContext.Provider>
      <p>
        Current Result: {count.count1} - {count.count2}
      </p>
      <button onClick={increase1}>Increase 1</button>
      <button onClick={increase2}>Increase 2</button>
    </div>
  );
}

export default App;