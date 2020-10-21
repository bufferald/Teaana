<template>
  <div>
    <Landing />
    <Login />
    <Register />
    <Product />
    <Gallery />
    <Contact />
    <Footer />
    <PrivacyPolicy />
    <RefundPolicy />
    <TermsandConditions />
  </div>
</template>
<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Landing from "@/components/Landing.vue";
import Product from "@/components/Product.vue";
import Gallery from "@/components/Gallery.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/NavFooter.vue";
import PrivacyPolicy from "@/components/PrivacyPolicy.vue";
import RefundPolicy from "@/components/RefundPolicy.vue";
import TermsandConditions from "@/components/TermsCondition.vue";
import $ from "jquery";
export default {
  mounted() {
    // https://twitter.com/uixmat
    /* 
		function scrollNav() {
			$(' ul li a').click(function () {
				$('.active').removeClass('active');
				$(this).addClass('active');
			});
		}

		scrollNav();
		 */
    /*   $(document).ready(function () {
      $(document).on("scroll", onScroll);
    });

    function onScroll(event) {
      var scrollPosition = $(document).scrollTop();
      $(".nav a").each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (
          refElement.position().top   <= scrollPosition &&
          refElement.position().top + refElement.height() > scrollPosition
        ) {
          $(".nav ul li a").removeClass("active");
          currentLink.addClass("active");
        } else {
          currentLink.removeClass("active");
        }
      });
    } */

    function smooth_scroll_to(elem) {
      var offset = 1500;

      offset = $(elem).offset().top - 60;

      $("html, body").animate(
        {
          scrollTop: offset,
        },
        500,
        "swing"
      );
    }

    $(".nav ul li a").click(function (e) {
      e.preventDefault();
      var elem = $(this).attr("href");
      smooth_scroll_to(elem);
    });
  },
  components: {
    Landing,
    Login,
    Register,
    Product,
    Gallery,
    Contact,
    Footer,
    PrivacyPolicy,
    RefundPolicy,
    TermsandConditions,
  },
};
</script>
<style scoped>
@import "../assets/CSS/web.css";
</style>
