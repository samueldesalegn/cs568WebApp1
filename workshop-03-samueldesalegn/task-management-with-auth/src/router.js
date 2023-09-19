import TaskList from './components/TaskList';
import Home from "./components/Home";
import EditTask from './components/EditTask';
import AddNewTask from './components/AddNewTask';
import { createBrowserRouter } from "react-router-dom";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },  
  {
    path: "/Task-list",
    element: <TaskList />
  },  
  {
    path: "/AddNewTask",
    element: <AddNewTask />
  },  
  {
    path: "/EditTask",
    element: <EditTask />
  }
]);


export default router;