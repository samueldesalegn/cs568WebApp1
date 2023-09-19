import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "./Context"

export default function Login(){
	const {state, setState} = useContext(GlobalContext);

	
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
				<input placeholder="email" value={id} name="email" onChange={change}/>        
				<input type="password"placeholder="password" value={title} name="password" onChange={change}/>        
			       
				<input type="submit"/>        
				<input type="reset"/>        
			</form>
			
			
		</div>
	);
}