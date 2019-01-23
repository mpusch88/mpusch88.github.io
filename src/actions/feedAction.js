import { webRequest } from '../helpers/http.js';

export const getFeed = user => {
	return (dispatch) => {
		return webRequest()
			.get('jobs/pending')
			.then(function(response) {
				return response.data;
			})
			.catch(e => {
				console.log(e);
			});
	};
};
