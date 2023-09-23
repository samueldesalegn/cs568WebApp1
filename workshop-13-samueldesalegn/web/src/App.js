import './App.css';
import GlobalContext from "./Context";
import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from '../../../workshop-04-samueldesalegn/workshop4/web/src/router';
import Login from "./components/Login"
import { getTasks } from "./network";


function App() {

  const [state, setState] = useState({tasks:[], token: null});
  useEffect(() => {
    async function getData(){
      if(state.token){
        const res = await getTasks(state.token);
        if(res && res.success){
          setState({...state, tasks: res.data})
        }else{
          setState({...state, tasks: []})
        }
      }
    }
    getData();
  }, [state.token])

  return (
    <div>
      <GlobalContext.Provider value={{ state, setState }}>
        {state.token? <RouterProvider router={router} />: <Login />}
      </GlobalContext.Provider>
      </div>
  );
}

export default App;