<template>
  <div>
    <Login />
    <Register />
    <ProductList />
    <Footer />
  </div>
</template>
<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import ProductList from "@/components/ProductList.vue";
import Footer from "@/components/NavFooter.vue";
/* import AddItem from "@/components/AddItem.vue";
 */ export default {
  components: {
    Login,
    Register,
    ProductList,
    Footer,
    /*     AddItem,
     */
  },
};
</script>
