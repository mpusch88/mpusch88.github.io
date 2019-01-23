import axios from 'axios';
import createElectronStore from 'electron-store-webpack-wrapper';

const store = createElectronStore();

export function webRequest() {
	return axios.create({
		baseURL: 'https://young-river-76901.herokuapp.com/',
		timeout: 4000,
		headers: {
			'x-auth': store.get('jwt')
		}
	});
}
