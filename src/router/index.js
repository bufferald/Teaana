import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';/* 
import Supply from '../views/Supply.vue';
import Profile from '../views/Account.vue';
import Product from '../views/Shop.vue';
import Cart from '../views/Cart.vue'; */
import Gallery from "../components/Gallery.vue"
import Contact from "../components/Contact.vue"
import Landing from "../components/Landing.vue"
/* import Login from "../views/Login.vue" */

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/banner-section',
		component: Home, Landing
	},
	{
		path: '/#about-section',

		component: Home, Gallery

	},
	{
		path: '#contact-section',
		name: 'contact',
		component: Contact

	},
	/* 	{
			path: '/profile',
			name: 'profile',
			component: Profile,
		},
		{
			path: '/store',
			name: 'shop',
			component: Product,
		},
		{
			path: '/cart',
			name: 'cart',
			component: Cart,
		},
		{
			path: '/supply',
			name: 'supply',
			component: Supply,
		},
		{
			path: '/teaana-login',
			name: 'teaana-login',
			component: Login,
		}, */

];


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
