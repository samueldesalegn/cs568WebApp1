import ChildMessage from "./ChildMessage";
import GlobalContext from "./Context";
import { useContext } from "react";
import { ACTION_TYPES } from "./reducer";

export default function Message(){
	// const {state, setState} = useContext(GlobalContext);
	const {state, dispatch} = useContext(GlobalContext);
	// console.log(state)
	const action = () =>{
		// setState({...state, message:"new Message", show: !state.show});
		dispatch({type: ACTION_TYPES.CHANGE_MSG, payload:"new Message", show: !state.show});
	}
	return (
		<div>
			<ChildMessage />
			{state.show && <p>{state.message}</p>}
			<button onClick={action}>NewMessage</button>
		</div>
			);
}