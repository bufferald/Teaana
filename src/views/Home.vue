<template>
  <div>
    <NavBar />
    <Login />
    <Register />
    <Landing />
    <Product />
    <Gallery />
    <Contact />
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Landing from "@/components/Landing.vue";
import Product from "@/components/Product.vue";
import Gallery from "@/components/Gallery.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/NavFooter.vue";

export default {
  mounted() {},
  components: {
    NavBar,
    Login,
    Register,
    Landing,
    Product,
    Gallery,
    Contact,
    Footer,
  },
};
</script>
<style scoped>
@import "../assets/CSS/web.css";
</style>
