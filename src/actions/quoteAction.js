import axios from 'axios';
import createElectronStore from 'electron-store-webpack-wrapper';
import quoteReducer from '../reducers/quoteReducer';

const store = createElectronStore(quoteReducer);
const jwt = store.get('jwt');

var instance = axios.create({
	baseURL: 'https://young-river-76901.herokuapp.com/',
	timeout: 2000,
	headers: { 'x-auth': jwt }
});

export const addQuotes = (quotes) => {
	return {
		type: 'ADD_QUOTES',
		quotes
	};
};

export const getQuotes = user => {
	return (dispatch) => {
		return instance.get('bid/me')
			.then((response) => {
				let quotes = response.data;
				dispatch(addQuotes(quotes));
				return quotes;
			}).catch((err) => {
				console.log(err);
			});
	};
};
