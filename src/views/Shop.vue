<template>
	<div>
		<NavBar />
		<Login />
		<Register />
		<ProductList />
		<Footer />
	</div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import ProductList from '@/components/ProductList.vue';
import Footer from '@/components/NavFooter.vue';
export default {
	components: {
		NavBar,
		Login,
		Register,
		ProductList,
		Footer,
	},
};
</script>
