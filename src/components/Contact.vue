<template>
  <section class="contact">
    <div class="container-fluid header-msg">
      <h1 class="font-weight-bold text-center p-3">
        We love to hear your
        <label>Questions</label> &
        <label>Feedback</label>
      </h1>
    </div>
    <div class="d-flex justify-content-center">
      <div class="row">
        <div class="col-lg-6">
          <img class="img im-fluid" src="../assets/Images/TeaAna2.png" />
        </div>
        <div class="col-lg-6 d-flex justify-content-center">
          <form class="w-75 p-5">
            <h2 class="text-center">Any thoughts? Message us</h2>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="Email"
                aria-describedby="Email Address"
                placeholder="Email Address"
                required
              />
            </div>
            <div class="form-group">
              <textarea
                name="feedback"
                class="form-control"
                rows="7"
                placeholder="Compose a message here..."
                required
              ></textarea>
            </div>

            <input
              type="submit"
              class="btn btn-sm float-right text-white"
              style="background-color: #028476;"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.contact {
  height: auto;
}
</style>
