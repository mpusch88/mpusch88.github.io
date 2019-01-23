const defaultState = {
	email: '',
	user: {}
};

const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'EMAIL':
			return {
				email: action.email
			};

		case 'SET_USER':
			return {
				...state,
				user: action.user
			};

		default:
			return defaultState;
	}
};

export default userReducer;
