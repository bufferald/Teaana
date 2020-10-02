<template>
  <section id="landing-content" class="landing container-fluid p-0">
    <div
      class="overlay vh-auto d-flex justify-content-center col-lg-12 col-md-12 wrap"
    >
      <div class="media m-auto">
        <a href="#" class="pull-left"> </a>
        <div class="media-body m-auto">
          <h1 class="text-white font-weight-bold">{{ header1 }}</h1>
          <!--         <h1 class="text-white">{{ header2 }}</h1>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      header1: "Experience Nature with every sip TEA ANA",
      header2: "TEA ANA",
    };
  },
};
</script>
<style scoped>
</style>
