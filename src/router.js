import CenterFO from '@/components/pages/CenterFO.vue'
import FarEast from '@/components/pages/FarEast.vue'
import PoliticPage from '@/components/pages/PoliticPage.vue'
import ProjectPage from '@/components/pages/ProjectPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ArticlePolitic from './components/Article/ArticlePolitic.vue'
import MoscowScreen from './components/MoscowScreen.vue'
import AboutPortal from './components/pages/AboutPortal.vue'
import Contact from './components/pages/ContactPage.vue'
import Home from './components/pages/HomePage.vue'
import PartnerPage from './components/pages/PartnerPage.vue'
import CaucasusFederalDistrict from './components/pages/Caucasus.vue'
import NorthWest from './components/pages/NorthWest.vue'
import SiberianFederalDistrict from './components/pages/Siberis.vue'
import SouthernFederalDistrict from './components/pages/South.vue'
import VolgaFederalDistrict from './components/pages/Volga.vue'

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
		},
		{
			path: '/far-east',
			name: 'FarEast',
			component: FarEast
		},
		{
			path: '/Caucasus',
			name: 'CaucasusFederalDistrict',
			component: CaucasusFederalDistrict
		},
		{
			path: '/NorthWest',
			name: 'NorthWest',
			component: NorthWest
		},
		{
			path: '/Siberis',
			name: 'SiberianFederalDistrict',
			component: SiberianFederalDistrict
		},
		{
			path: '/South',
			name: 'SouthernFederalDistrict',
			component: SouthernFederalDistrict
		},
		{
			path: '/Ural',
			name: 'UralFederalDistrict',
			component: UralFederalDistrict
		},
		{
			path: '/Volga',
			name: 'VolgaFederalDistrict',
			component: VolgaFederalDistrict
		}
	]
})

export default router
