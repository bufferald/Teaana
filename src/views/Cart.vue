<template>
  <div>
    <NavBar />
    <Login />
    <CartList />
    <Register />
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import CartList from "@/components/Cartlist.vue";
import Footer from "@/components/NavFooter.vue";
export default {
  components: {
    NavBar,
    Login,
    Register,
    CartList,
    Footer,
  },
};
</script>
<style scoped>
.cart {
  margin-top: 50px;
}
</style>