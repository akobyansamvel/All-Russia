import CenterFO from '@/components/pages/CenterFO.vue'
import PoliticPage from '@/components/pages/PoliticPage.vue'
import ProjectPage from '@/components/pages/ProjectPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ArticlePolitic from './components/Article/ArticlePolitic.vue'
import MoscowScreen from './components/MoscowScreen.vue'
import AboutPortal from './components/pages/AboutPortal.vue'
import Contact from './components/pages/ContactPage.vue'
import Home from './components/pages/HomePage.vue'
import PartnerPage from './components/pages/PartnerPage.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/article',
			name: 'ArticlePolitic',
			component: ArticlePolitic
		},
		{
			path: '/about',
			name: 'AboutPortal',
			component: AboutPortal
		},

		{
			path: '/contact',
			name: 'Contact',
			component: Contact
		},

		{
			path: '/moscow',
			name: 'MoscowScreen',
			component: MoscowScreen
		},
		{
			path: '/partner',
			name: 'PartnerPage',
			component: PartnerPage
		},
		{
			path: '/CenterFO',
			name: 'CenterPage',
			component: CenterFO
		},
		{
			path: '/project',
			name: 'ProjectPage',
			component: ProjectPage
		},
		{
			path: '/politic',
			name: 'PoliticPage',
			component: PoliticPage
		}
	]
})

export default router
