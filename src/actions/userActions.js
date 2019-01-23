import axios from 'axios';
import { webRequest } from '../helpers/http';
import createElectronStore from 'electron-store-webpack-wrapper';

const store = createElectronStore();

export const setEmail = email => {
	return { type: 'EMAIL', email };
};

export const setUser = (user) => {
	return { type: 'SET_USER', user };
};

export const authenticate = user => {
	return (dispatch) => {
		return axios
			.post('http://young-river-76901.herokuapp.com/users/login', user)
			.then(function(response) {
				console.log(response);
				let user = response.data;
				dispatch(setUser(user));
				return response.headers['x-auth'];
			})
			.catch(e => {
				if (e && e.response.status == 400) {
					console.log('Bad login');
					throw 'invalid';
				}
			});
	};
};

export const logout = user => {
	return (dispatch) => {
		return webRequest()
			.delete('/users/me/token')
			.then(() => {
				store.clear();
				console.log('JWT deleted');
			})
			.catch(e => {
				if (e && e.response.status == 400) {
					console.log('Something broke');
					throw 'failed logout';
				}
			});
	};
};

// ????? Was this inside above function? return function(dispatch) { 	return
// axios.get('http://localhost:3001/users/lawyers', { 		params: { 			id:
// '5bc55e28ecea26bd9d880beb' 		} 	}).then((response) => {
// 		console.log(response);
// 		//dispatch(setFirstName(response.data[0].firstName)); 	}).catch((e) => {
// 		console.log(e); 	}); }; LOGOUT STUFF export const clearUser = () => {
// return {         type:'CLEAR_ALL'     }; }; export const logoutUser = () => {
// 	return function (dispatch){ 		const jwt =
// JSON.parse(localStorage.getItem('u')).jwt; 		return
// axios.delete('http://localhost:3001' + '/users/me/token',{	// UPDATE ME!
// 			headers:{ 				'x-auth':jwt 			} 		}).then(() => {
// 			localStorage.removeItem('u'); 			dispatch(clearUser()); 			closeSocket();
// 		}).catch(() => { 		}); 	}; };
