import { useNavigate } from "react-router-dom";
import TaskList from './TaskList';

export default function Home(){
	const navigate = useNavigate();
	const navigateToAddNewTask = () => {
		navigate("/AddNewTask");
	};

	return (
		<div>
			<button onClick={navigateToAddNewTask} style={{color: "blue", margin:"10px 10px 10px 800px", border:"4px solid black"}}>Goto AddNewTask</button>
			<TaskList />
		</div>
	);
}