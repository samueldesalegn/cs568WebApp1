import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import tasks from "./tasks"


export default function EditTask(){
	
	// const [task, setTask] = useState(etask);
	// // console.log(task)
	const location = useLocation();
	console.log(location.state);
	const [state, setState] = useState(location.state);
	const navigate = useNavigate();
	const {title, description, duration, deadline, assignee, assignor, status} = state;
	
	

	const change = (e) => {
		setState({...state, [e.target.name]: e.target.value})
	};

	const handleSubmit = (e) =>{
		e.preventDefault();
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].id === state.id) {
				tasks[i] = state;
				break;
			}
			
		}
		navigate("/");
		

	};

	

	return (

		<div style={{ margin:"20px"}}>
			
			<form onSubmit={handleSubmit}>      
				<input placeholder="title" value={title} name="title" onChange={change}/>        
				<input placeholder="description" value={description} name="description" onChange={change}/>        
				<input placeholder="duration" value={duration} name="duration" onChange={change}/>        
				<input placeholder="deadline" value={deadline} name="deadlein" onChange={change}/>        
				<input placeholder="assignee" value={assignee} name="assignee" onChange={change}/>        
				<input placeholder="assignor" value={assignor} name="assignor" onChange={change}/>        
				<input placeholder="status" value={status} name="status" onChange={change}/>        
				<input type="submit"/>        
			</form>
			
			
		</div>
	);
}