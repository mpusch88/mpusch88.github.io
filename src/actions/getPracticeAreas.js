import axios from 'axios';
import { webRequest } from '../helpers/http';

export const getPracticeAreas = () => {
	return function(dispatch) {
		return webRequest()
			.get('/practicearea')
			.then(function(response) {
				return response.data;
			})
			.catch(e => {
				console.log(e);
			});
	};
};
