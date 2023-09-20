import TaskDetails from "./TaskDetails";
// import {getTasks} from "./network";
import { useContext } from "react";
import GlobalContext from "../services/Context";






export default function TaskList() {
	const { state } = useContext(GlobalContext);

	return (
		<div>
			{
				state.tasks.map(task => <TaskDetails key={task.id} task={task} />)
			}
		</div>
	)
}