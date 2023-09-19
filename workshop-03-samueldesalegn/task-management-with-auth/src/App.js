import './App.css';
import TaskList from './components/TaskList';
import GlobalContext from "./components/Context";
import Home from "./components/Home";
import EditTask from './components/EditTask';
import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from './router';

import { getTasks } from "./components/network";


function App() {

  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTasks();
      setState(data)

    };
    fetchData();

  }, [])

  return (
    <div>
      <GlobalContext.Provider value={{ state, setState }}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
      {/* <RouterProvider router={router} /> */}

    </div>
  );
}

export default App;


