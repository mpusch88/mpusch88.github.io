const bidReducerDefaultState = {
    updating: false,
    entities: {
        bids: {},
        users: {}
    },
    result: []
};

const bidReducer = (state = bidReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BID':
            return {
                ...state,
                entities: {
                    ...state.entities,
                    bids: {
                        ...state.entities.bids,
                        [action.bid._id]: action.bid
                    },
                    users: {
                        ...state.entities.users
                    }
                }
            };
        default:
            return state;
    }
};

export default bidReducer;