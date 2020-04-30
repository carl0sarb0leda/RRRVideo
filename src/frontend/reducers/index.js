const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_FAVORITE':
			return {
				...state,
				mylist: [ ...state.mylist, action.payload ] //mylist from the json
			};
		case 'DELETE_FAVORITE':
			return {
				...state,
				mylist: state.mylist.filter((items) => items.id !== action.payload)
			};
		case 'LOGIN_REQUEST':
			return {
				...state,
				user: action.payload
			};
		case 'LOGOUT_REQUEST':
			return {
				...state,
				user: action.payload
			};
		case 'SET_REGISTER_REQUEST':
			return {
				...state,
				user: action.payload
			};
		case 'GET_VIDEO_REQUEST':
			return {
				...state,
				playing:
					state.trends.find((item) => item.id === Number(action.payload)) ||
					state.originals.find((item) => item.id === Number(action.payload)) ||
					[]
			};
		case 'GET_VIDEO_BY_TITLE':
			let result = state.trends
				.concat(state.originals)
				.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()));

			return {
				...state,
				searching: action.payload ? (result.length > 0 ? result : 'NotFound') : []
			};
		default:
			return state;
	}
};

export default reducer;
