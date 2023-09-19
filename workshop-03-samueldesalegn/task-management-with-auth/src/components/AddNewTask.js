import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "./Context"


export default function AddNewTask(){
	const {state, setState} = useContext(GlobalContext);
	// console.log("state", state)

	let arr = [...state]
	
	const navigate = useNavigate();

	const [task, setTask] = useState({id: "", title: "", description: "", duration: "", deadline: "", assignee: "", assignor: "", status: ""})
	// console.log(task)
	const {id, title, description, duration, deadline, assignee, assignor, status} = task;
	
	

	const change = (e) => {
		setTask({...task, [e.target.name]: e.target.value})
	};

	const handleSubmit = (e) =>{
		e.preventDefault();
		arr.push(task);
		// console.log(arr);
		setState(arr)
		navigate("/");
	};

	

	return (

		<div style={{ margin:"20px"}}>
			
			<form onSubmit={handleSubmit}>
				<input placeholder="id" value={id} name="id" onChange={change}/>        
				<input placeholder="title" value={title} name="title" onChange={change}/>        
				<input placeholder="description" value={description} name="description" onChange={change}/>        
				<input placeholder="duration" value={duration} name="duration" onChange={change}/>        
				<input placeholder="deadline" value={deadline} name="deadline" onChange={change}/>        
				<input placeholder="assignee" value={assignee} name="assignee" onChange={change}/>        
				<input placeholder="assignor" value={assignor} name="assignor" onChange={change}/>        
				<input placeholder="status" value={status} name="status" onChange={change}/>        
				<input type="submit"/>        
				<input type="reset"/>        
			</form>
			
			
		</div>
	);
}