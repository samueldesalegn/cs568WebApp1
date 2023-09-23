export default function reducer(state, action){
	switch (action.type) {
		case ACTION_TYPES.CHANGE_MSG:
			return {...state, message:action.payload}
				
		default:
			return state;
	}
}

export const ACTION_TYPES = {
	CHANGE_MSG: "CHANGE MESSAGE"
}