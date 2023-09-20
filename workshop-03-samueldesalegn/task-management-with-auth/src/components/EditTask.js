import { useState, useContext} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GlobalContext from "../services/Context";


export default function EditTask(){
	
	const {state, setState} = useContext(GlobalContext);
	
	const location = useLocation();

	
	const [editTask, setEditState] = useState(location.state);
	
	const navigate = useNavigate();
	const {title, description, duration, deadline, assignee, assignor, status} = editTask;
	
	const newState = {...state};

	const change = (e) => {
		setEditState({...editTask, [e.target.name]: e.target.value})
	};

	const handleSubmit = (e) =>{
		e.preventDefault();
		const index = newState.tasks.findIndex(elem =>editTask.id ===elem.id);
		if (index !== -1) {
			newState.tasks[index] = editTask;
			setState(newState);
			navigate("/");
		}
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