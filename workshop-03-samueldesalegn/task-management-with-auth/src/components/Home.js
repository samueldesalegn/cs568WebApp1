import { useNavigate } from "react-router-dom";
import TaskList from './TaskList';

export default function Home(){
	const navigate = useNavigate();
	const navigateToAddNewTask = () => {
		navigate("/AddNewTask");
	};

	return (
		<div>
			<button onClick={navigateToAddNewTask}>Goto AddNewTask</button>
			<TaskList />
		</div>
	);
}