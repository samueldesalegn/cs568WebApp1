import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "./Context"

export default function Login(){
	const {state, setState} = useContext(GlobalContext);

	
	const navigate = useNavigate();

	const [task, setTask] = useState({email: "", password: ""})
	// console.log(task)
	const {email, password} = task;
	
	

	const change = (e) => {
		setTask({...task, [e.target.name]: e.target.value})
	};

	const handleSubmit = (e) =>{
		e.preventDefault();
		navigate("/");
	};

	

	return (

		<div style={{ margin:"20px"}}>
			
			<form onSubmit={handleSubmit}>
				<input placeholder="email" value={email} name="email" onChange={change}/>        
				<input type="password"placeholder="password" value={password} name="password" onChange={change}/>        
			       
				<input type="submit"/>        
				<input type="reset"/>        
			</form>
			
			
		</div>
	);
}