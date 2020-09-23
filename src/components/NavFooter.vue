<template>
  <section class="footer bg-light">
    <div class="container p-5 bg-light">
      <div class="row">
        <div class="col-lg-3 col-sm-6 infos">
          <h4 class="text-dark">Contacts</h4>
          <ul class="list-group border-0">
            <li class="list-group-item">5th Floorm 7844 Mavenue Building 1210 Makati Ave.</li>
            <li class="list-group-item">Sales@tea-ana.com</li>
            <li class="list-group-item">09270244269</li>
            <li class="list-group-item">Opens at 10am - 7pm</li>
          </ul>
        </div>
        <div class="col-lg-3 col-sm-6 disclaimer">
          <h4 class="text-dark">Disclaimer</h4>
          <ul class="list-group">
            <li class="list-group-item">Privacy Policy</li>
            <li class="list-group-item">Refund Policy</li>
            <li class="list-group-item">Terms and Condition</li>
          </ul>
        </div>

        <div class="col-lg-3 col-sm-6 customercare">
          <h4 class="text-dark">Customer Care</h4>
          <ul class="list-group">
            <li class="list-group-item">Product</li>
            <li class="list-group-item">Supply</li>
          </ul>
        </div>

        <div class="col-lg-3 sociallink">
          <h4 class="text-dark">Social Media</h4>
          <p class>Follow us on social media to find out the latest updates in our products</p>
          <div class="d-flex">
            <ul class="list-inline mx-auto justify-content-center">
              <li class="list-inline-item">
                <i class="fab fa-facebook-square"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-twitter-square"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-instagram-square"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright container-fluid p-2">
      <span class="text-center text-white">Copyright © 2020 Tea Ana. All rights reserved.</span>
    </div>
  </section>
</template>
<style scoped>
.footer {
  height: auto;
}
.footer ul li,
p {
  border: none;
  color: #777b7e;
}
.infos {
  text-align: left;
  max-width: 300px;
}
.infos ul li {
  padding-left: 0%;
  background-color: transparent;
}
.disclaimer {
  text-align: left;
  max-width: 300px;
}
.disclaimer ul li {
  padding-left: 0%;
  background-color: transparent;
}
.customercare {
  text-align: left;
  max-width: 300px;
}

.customercare ul li {
  padding-left: 0%;
  background-color: transparent;
}
.sociallink ul li {
  display: inline;
  font-size: 2em;
  color: #444;
}
.sociallink {
  text-align: left;
}
.copyright {
  background-color: #028476;
}
</style>