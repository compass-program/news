import axios from 'axios';
import store from '@/store';

const state = () => ({
	news: [],
	news_loaded: null,
})

const getters = {}

const mutations = {
	SET_NEWS: (state, payload) => state.news = payload,
	SET_NEWS_LOADED: (state, payload) => state.news_loaded = payload,

	REMOVE_DELETED_NEWS: (state, payload) => {
		state.news = state.news.filter(news => {
			return news.id !== payload
		})
	},

	CLEAR_NEWS: (state) => { state.news = [], state.news_loaded = null },
}

const actions = {
	getNews: async (context) => {
		try {
			const response = await axios.get(`${store.state.baseURL}/posts/`)
			if (response.status === 200) {
				context.commit('SET_NEWS', response.data);
				context.commit('SET_NEWS_LOADED', true);
			}
			else {
				context.commit('SET_NEWS_LOADED', false);
			}
		}
		catch (err) {
			context.commit('SET_NEWS_LOADED', false);
			throw new Error(err)
		}
	},
}

export default {
	state,
	getters,
	mutations,
	actions,
}