import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Account.vue';
import Product from '../views/Shop.vue';
import Cart from '../views/Cart.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile,
	},
	{
		path: '/shop',
		name: 'Shop',
		component: Product,
	},
	{
		path: '/cart',
		name: 'Cart',
		component: Cart,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
