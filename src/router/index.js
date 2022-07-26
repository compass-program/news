import { createRouter, createWebHashHistory } from 'vue-router'
import PageHome from '@/views/PageHome.vue'
import PageCreate from '@/views/PageCreate.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: PageHome,
		meta: {
			title: 'Все новости',
		}
	},
	{
		path: '/create',
		name: 'create',
		component: PageCreate,
		meta: {
			title: 'Создать запись'
		}
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
