<template>
	<div>
		<Landing />
		<Login />
		<Register />
		<Product />
		<Gallery />
		<Contact />
		<Footer />
	</div>
</template>
<script>
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import Landing from '@/components/Landing.vue';
import Product from '@/components/Product.vue';
import Gallery from '@/components/Gallery.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/NavFooter.vue';
import $ from 'jquery';
export default {
	mounted() {
		// https://twitter.com/uixmat

		function scrollNav() {
			$(' ul li a').click(function() {
				$('.active').removeClass('active');
				$(this).addClass('active');
			});
		}
		scrollNav();
	},
	components: {
		Landing,
		Login,
		Register,
		Product,
		Gallery,
		Contact,
		Footer,
	},
};
</script>
<style scoped>
@import '../assets/CSS/web.css';
</style>
