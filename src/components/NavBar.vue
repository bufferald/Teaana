<template>
  <nav class="navbar navigation fixed-top navbar-expand-lg">
    <div class="navbar-brand">
      <ul class="navbar-nav">
        <li class="nav-item">
          <img
            src="../assets/Images/TeaAna.png"
            alt="Logo"
            class="img mr-1 img-fluid"
            v-bind:href="homelink"
          />
        </li>
      </ul>
    </div>
    <div class="d-flex flex-row order-2 order-lg-3">
      <ul class="navbar-nav flex-row">
        <li class="nav-item">
          <a class="nav-link mr-2" v-bind:href="shoplink">
            <i class="fas fa-store"></i>
            store
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link mr-2" v-bind:href="cartlink">
            <i class="fas fa-shopping-cart"></i>
            cart
          </a>
        </li>

        <li class="nav-item">
          <button
            type="button"
            class="btn btn-sm m-1 text-white"
            style="background-color: #5cd85a"
            data-toggle="modal"
            data-target="#Loginmodal"
          >
            Login
          </button>
        </li>
        <li class="nav-item">
          <button
            type="button"
            class="btn btn-sm m-1 text-white"
            style="background-color: #028476"
            data-toggle="modal"
            data-target="#Registermodal"
          >
            Register
          </button>
        </li>

        <li class="nav-item dropdown show">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
            >name</a
          >
          <div
            class="dropdown-menu"
            aria-labelledby="dropdownMenuButton fixed-top"
          >
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" :href="profilelink">Profile</a>
            <a class="dropdown-item" href="#" @click="logout()">Log out</a>
          </div>
        </li>
      </ul>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
      >
        <i class="fas fa-bars text-white"></i>
      </button>
    </div>
    <div
      class="collapse navbar-collapse nav order-3 order-lg-2"
      id="navbarNavDropdown"
    >
      <ul class="navbar-nav mr-auto text-left">
        <li class="nav-item">
          <a class="nav-link" href="#banner-section"
            ><router-link to="/">Home</router-link></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#product-category-section"
            ><router-link to="/#product-category-section">Food</router-link></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about-section"
            ><router-link to="/#about-section">About</router-link></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact-section"
            ><router-link to="/#contact-section">Contact</router-link></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;

export default {
  data() {
    return {
      cartlink: "/cart",
      shoplink: "/shop",
      homelink: "/",
      profilelink: "/profile",
    };
  },
  methods: {
    logout: async function () {
      try {
        const res = await axios.get("https://api.tea-ana.com/v1/auth/logout", {
          withCredentials: true,
        });
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
