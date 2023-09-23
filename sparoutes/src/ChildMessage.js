import { useContext } from "react";
import GlobalContext from "./Context";


export default function ChildMessage(){
	const {state} = useContext(GlobalContext);
	return (
		<div>
			<h3>Child Message</h3>
			<p>{state.message}</p>
		</div>
	)
}