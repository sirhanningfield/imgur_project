import api from '../../api/imgur';
import { router } from '../../main';

const state = {
	 images : []
};

const getters = {
	allImages : () => state.images
};

const actions = {
	async fetchImages({rootState , commit }){
		const { token } = rootState.auth;
		const response = await api.fetchImages(token);
		commit('setImages',response.data.data);
	},

	async uploadImages({rootState},images){
		// get access token
		const { token } = rootState.auth;

		// call imgur api
		await api.uploadImages(images, token);

		// reroute to '/'
		router.push('/');
		
	}
};

const mutations = {

	setImages : (state, images) => {
		state.images = images;
	}
};


export default {
	state,
	getters,
	mutations,
	actions
};