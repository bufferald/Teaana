<template>
  <nav class="navbar fixed-top navbar-expand-lg">
    <div class="navbar-brand">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="Home">
            <a class="nav-link mr-5" href style="color: #5cd85c;">
              <img src="../assets/Images/TeaAna.png" alt="Logo" class="img mr-2 img-fluid" />TEA ANA
            </a>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="d-flex flex-row order-2 order-lg-3">
      <ul class="navbar-nav flex-row">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fas fa-shopping-cart mr-2"></i>
          </a>
        </li>
        <li class="nav-item">
          <button
            type="button"
            class="btn btn-sm m-1 text-white"
            style="background-color: #5CD85A;"
            data-toggle="modal"
            data-target="#Loginmodal"
          >Login</button>
        </li>
        <li class="nav-item">
          <button
            type="button"
            class="btn btn-sm m-1 text-white"
            style="background-color: #028476;"
            data-toggle="modal"
            data-target="#Registermodal"
          >Register</button>
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
    <div class="collapse navbar-collapse order-3 order-lg-2" id="navbarNavDropdown">
      <ul class="navbar-nav mr-auto text-left">
        <li class="nav-item">
          <a class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
