<template>
  <section class="container-fluid p-0" id="about-section">
    <div class="commercial">
      <div class="container vh-auto">
        <div class="row info-about">
          <div class="col-lg-6 p-5 m-auto text-left order-2">
            <h1>TEA ANA</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p class="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="col-lg-6 m-auto p-5 order-1">
            <img class="img img-fluid" src="../assets/Images/4-products.png" />
          </div>
        </div>
      </div>
      <div class="dots-wrapper d-flex align-items-center">
        <ul class="dots-list ml-auto" id="dotted">
          <a href="#pageone">
            <li class="dot dot-1 dot-ring"></li>
          </a>
          <a href="#pagetwo">
            <li class="dot dot-2"></li>
          </a>
          <a href="#pagethree">
            <li class="dot dot-3"></li>
          </a>
        </ul>
      </div>

      <a name="pageone"></a>
      <div
        class="container-fluid d-flex justify-content-center align-items-center gallery bg-1"
      >
        <div class="page-one mr-auto p-4">
          <h1 class="font-weight-bold text-left" style="color: #5cd85c">
            Boost your energy
          </h1>
          <h2 class="text-left text-white">Coffee Drink</h2>
          <p class="text-left text-white">
            Good vibe with a milk-based or brewed-based Cofee
          </p>
        </div>
      </div>
      <a name="pagetwo"></a>
      <div
        class="container-fluid d-flex justify-content-center align-items-center gallery bg-2"
      >
        <div class="page-two mr-auto p-4">
          <h1 class="font-weight-bold text-left" style="color: #5cd85c">
            Mouthwatering Delicacy
          </h1>
          <h2 class="text-left text-white">Takoyaki</h2>
          <p class="text-left text-white">
            Just a bite of takoyaki will surely taste the seefood special of
            Japanese Culture
          </p>
        </div>
      </div>
      <a name="pagethree"></a>
      <div
        class="container-fluid d-flex justify-content-center align-items-center gallery bg-3"
      >
        <div class="page-three mr-auto p-4">
          <h1
            class="display-4 font-weight-bold text-left"
            style="color: #5cd85c"
          >
            Juicy and Delicious
          </h1>
          <h2 class="text-left text-white">Chicken wings</h2>
          <p class="text-left text-white">
            Try these awesome Wings Flavors. It comes with crispy, honey glazed,
            cheesy parmesan and even hot spicy.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
/* var $ = require("jquery"); */
export default {
  mounted() {
    var isInViewport = function (elem) {
      var bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    var page1 = document.querySelector(".page-one");
    var page2 = document.querySelector(".page-two");
    var page3 = document.querySelector(".page-three");
    var dot1 = document.querySelector(".dot-1");
    var dot2 = document.querySelector(".dot-2");
    var dot3 = document.querySelector(".dot-3");
    var current = document.getElementById("dotted");
    // var main = document.getElementsByClassName("commercial");

    document.addEventListener("scroll", function () {
      if (isInViewport(page1)) {
        dot1.classList.add("dots-active");

        if (current.style.display == "none") {
          current.style.display = "block";
        }
      } else {
        dot1.classList.remove("dots-active");
        current.style.display = "none";
      }

      if (isInViewport(page2)) {
        dot2.classList.add("dots-active");
        if (current.style.display == "none") {
          current.style.display = "block";
        }
      } else {
        dot2.classList.remove("dots-active");
      }

      if (isInViewport(page3)) {
        dot3.classList.add("dots-active");
        if (current.style.display == "none") {
          current.style.display = "block";
        }
      } else {
        dot3.classList.remove("dots-active");
      }
    });
  },
};
</script>

<style scoped></style>
