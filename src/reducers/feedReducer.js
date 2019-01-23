const feedReducer = (state = {feed:[]}, action) => {
    switch (action.type) {
        case 'ADD_FEED':
            return {feed: state.feed.concat(action.feed)};
        default:
            return state;
    }
};

export default feedReducer;