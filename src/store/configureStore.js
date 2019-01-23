import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from '../reducers/userReducer';
import quoteReucer from '../reducers/quoteReducer';
import feedReducer from '../reducers/feedReducer';
import bidReducer from '../reducers/bidReducer';

export default () => {

const store = createStore(
  combineReducers({
    userReducer,
    quoteReucer,
    feedReducer,
    bidReducer
  }),
  compose(applyMiddleware(
    thunkMiddleware
  ), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

	return store;
};
