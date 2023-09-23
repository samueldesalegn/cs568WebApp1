import './App.css';
import Message from './Message';
import GlobalContext from "./Context";
import { useReducer, useState } from "react";
import reducer from './reducer';

function App() {
  // const [state, setState] = useState({message: "Hello", show: true});
  const [state, dispatch] = useReducer(reducer, {message: "Hello", show: true})
  return (
    <div>
      <GlobalContext.Provider value={{state, dispatch}}>
      <Message />
      </GlobalContext.Provider>

      
    </div>
  );
}

export default App;
