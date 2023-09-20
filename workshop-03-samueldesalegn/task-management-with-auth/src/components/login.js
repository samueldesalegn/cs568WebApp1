import { useState, useContext } from "react";
import GlobalContext from "../services/Context"
import login from "../services/network";
export default function Login(){

	const [user, setUser] = useState({email: "", password: ""})
	
	const {email, password} = user;
	const {state, setState} = useContext(GlobalContext);
	
	const change = (e) => {
		setUser({...user, [e.target.name]: e.target.value})
	};

	const handleSubmit = async (e) =>{
		e.preventDefault();
		try {
			await login(email, password);
			setState({...state, user})
		} catch (error) {
			alert(error);
		}
	};

	return (

		<div style={{ margin:"20px"}}>
			
			<form onSubmit={handleSubmit}>
				<input type="email" placeholder="email" value={email} name="email" onChange={change}/>        
				<input type="password"placeholder="password" value={password} name="password" onChange={change}/>         
				<input type="submit"/>        
				<input type="reset"/>        
			</form>	

		</div>
	);
}