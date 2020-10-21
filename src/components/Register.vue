<template>
  <div
    class="modal fade register"
    id="Registermodal"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content w-75 mx-auto">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Create Account</h5>
          <button
            type="button"
            class="border-0 close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body p-4">
          <form class="p-4" @submit.prevent="onSubmit">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                id="username"
                v-model="username"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="email address"
                id="emailaddress"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                class="form-control"
                placeholder="contact number"
                id="contactno"
                v-model="contactno"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="password"
                id="password"
                v-model="password"
              />
            </div>

            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Confirm password"
                id="confirm-password"
                v-model="confirmPassword"
              />
            </div>

            <button
              type="submit"
              class="float-right btn btn-sm pl-3 pr-3 text-white"
              style="background-color: #028476"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      /* age: null, */
      contactno: "",
      password: "",
      confirmPassword: "",
      terms: false,
    };
  },
  methods: {
    /* onAddHobby() {
      const newHobby = {
        id: Math.random() * Math.random() * 1000,
        value: "",
      };
      this.hobbyInputs.push(newHobby);
    }, */
    /* onDeleteHobby(id) {
      this.hobbyInputs = this.hobbyInputs.filter((hobby) => hobby.id !== id);
    }, */
    onSubmit() {
      const formData = {
        email: this.email,
        username: this.username,
        /* age: this.age, */
        contactno: this.contactno,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      console.log(formData);
    },
  },
};
</script>
