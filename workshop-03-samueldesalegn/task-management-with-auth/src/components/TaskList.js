import TaskDetails from "./TaskDetails";
// import {getTasks} from "./network";
import { useContext } from "react";
import GlobalContext from "./Context";






export default function TaskList() {
	
	const {state, setState} = useContext(GlobalContext);
	
	
	return(
		<div>
			{
				state.map(task => <TaskDetails key={task.id} task={task}/>)
				
			}
			
		</div>
	)
}