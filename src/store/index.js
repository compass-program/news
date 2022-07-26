import { createStore } from 'vuex'
import news from '@/store/modules/news';

export default createStore({
	state: { baseURL: 'https://jsonplaceholder.typicode.com' },
	getters: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		news
	}
})
