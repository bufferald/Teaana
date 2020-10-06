<template>
	<div>
		<Login />
		<CartList />
		<Register />
		<UpdateItem />
		<Footer />
	</div>
</template>
<script>
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import CartList from '@/components/Cartlist.vue';
import UpdateItem from '@/components/UpdateItem.vue';
import Footer from '@/components/NavFooter.vue';
export default {
	components: {
		Login,
		Register,
		CartList,
		UpdateItem,
		Footer,
	},
};
</script>
<style scoped>
.cart {
	margin-top: 50px;
}
</style>
