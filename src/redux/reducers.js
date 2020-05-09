const initialState = {
	counter: 0,
	token: null,
}

export default function reducer(state = initialState, action) {
	let token = state.token;
	let counter = state.counter;
	switch (action.type) {
		case "INCREMENT":
			return {
				counter: state.counter + 1,
				token: token
			}
		case "DECREMENT":
			return {
				counter: state.counter - 1,
				token: token
			}
		case "LOGIN":
			return {
				counter: counter,
				token: action.value
			}
		default:
			return state;
	}
}