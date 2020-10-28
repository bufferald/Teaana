<template>
  <section class="footer bg-light">
    <div class="container p-5 bg-light">
      <div class="row">
        <div class="col-lg-4 col-sm-6 infos">
          <h4 style="color: #666666">Contacts</h4>
          <ul class="list-group border-0">
            <li class="list-group-item">Sales@tea-ana.com</li>
            <li class="list-group-item">09270244269</li>
          </ul>
        </div>
        <div class="col-lg-4 col-sm-6 disclaimer">
          <h4 style="color: #666666">Disclaimer</h4>
          <ul class="list-group">
            <li class="list-group-item">
              <a data-toggle="modal" data-target="#PrivacyPolicymodal"
                >Privacy Policy</a
              >
            </li>
            <li class="list-group-item">
              <a data-toggle="modal" data-target="#RefundPolicymodal"
                >Refund Policy</a
              >
            </li>
            <li class="list-group-item">
              <a data-toggle="modal" data-target="#TermsandConditions"
                >Terms and Conditions</a
              >
            </li>
          </ul>
        </div>

        <!-- <div class="col-lg-3 col-sm-6 customercare">
          <h4 style="color: #666666">Product</h4>
          <ul class="list-group">
            <li class="list-group-item">
              <a href="/store">Store</a>
            </li>
            <li class="list-group-item"><a href="/supply">Supply</a></li>
          </ul>
        </div> -->

        <div class="col-lg-4 sociallink">
          <h4 style="color: #666666">Social Media</h4>
          <p class>
            Follow us on social media to find out the latest updates in our
          </p>
          <div class="d-flex">
            <ul class="list-inline mx-auto justify-content-center">
              <li class="list-inline-item">
                <a class="nav-link" v-bind:href="linkfacebook"
                  ><i class="fab fa-facebook-square"></i
                ></a>
              </li>

              <li class="list-inline-item">
                <a class="nav-link" v-bind:href="linkinstagram">
                  <i class="fab fa-instagram-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="copyright container-fluid p-2"
      style="background-color: #e6e6e6"
    >
      <small class="text-center text-secondary"
        >Copyright © 2020 Tea Ana. All rights reserved.</small
      >
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      linkfacebook: "https://www.facebook.com/TeaAna20",
      linktwitter: "https://twitter.com/search?q=tea%20ana&src=typed_query",
      linkinstagram: "https://www.instagram.com/teaana20/",
    };
  },
};
</script>
<style lang="postcss" scoped>
.footer {
  position: relative;
  z-index: 6;
}
</style>