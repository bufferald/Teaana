<template>
  <section id="landing-content" class="landing container-fluid p-0">
    <div class="overlay vh-auto d-flex justify-content-center col-lg-12 col-md-12 wrap">
      <div class="media m-auto">
        <a href="#" class="pull-left">
          <img
            src="../assets/Images/milkteamodel.png"
            class="media-object img img-fluid"
            alt="Sample Image"
          />
        </a>
        <div class="media-body m-auto">
          <h1 class="text-white">{{ header1 }}</h1>
          <h1 class="text-white">{{ header2 }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      header1: "Experience Nature with every sip",
      header2: "TEA ANA",
    };
  },
};
</script>
