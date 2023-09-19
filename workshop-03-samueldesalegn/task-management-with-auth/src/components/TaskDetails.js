// import { useNavigate } from "react-router-dom";
// import {useState, useContext } from "react";
// import GlobalContext from "./Context";
import { useNavigate } from "react-router-dom";


export default function TaskDetails({task}) {
	const navigate = useNavigate();

	const {id, title, description, duration, deadline, assignor, status} = task;
	return (
		<div>
		<div style={{textAlign:"center", justifyContent: "center", border: "5px solid blue"}}>
			<p>Id: {id} - Title: {title} - Description: {description} - Duration: {duration} - Deadline: {deadline} - Assignor: {assignor} - Status: {status}</p>
		</div>
		<button onClick={() => navigate("/EditTask", {state: task})} style={{textAlign:"right", marginLeft: "800px", border: "10px solid green"}}>edit</button>
		</div>
	);
}