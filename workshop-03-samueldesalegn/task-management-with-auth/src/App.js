import './App.css';
import GlobalContext from "./services/Context";
import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from './router';
import Login from "./components/login"
import { getTasks } from "./services/network";


function App() {

  const [state, setState] = useState({tasks:[], user: null});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTasks();
        setState({...state, tasks: data})
        
      } catch (error) {
        alert(error);
      }

    };
    fetchData();

  }, [])

  return (
    <div>
      <GlobalContext.Provider value={{ state, setState }}>
        {state.user? <RouterProvider router={router} />: <Login />}
      </GlobalContext.Provider>
      </div>
  );
}

export default App;


