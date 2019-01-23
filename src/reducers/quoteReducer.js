const quoteReducerDefaultState = {
	quotes: {}
};

const quoteReducer = (state = quoteReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_QUOTES':
			console.log({
				...state,
				quotes: action.quotes
			});
			return {
				...state,
				quotes: action.quotes
			};
		default:
			return state;
	}
};

export default quoteReducer;
