<template>
  <div class="container row">
    <div class="col-lg-6 bg-info vh-100 mx-auto">
      <form class="p-4 my-auto" @submit.prevent="onSubmit">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="email address"
            id="email"
            required
            v-model="email"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="password"
            id="password"
            required
            v-model="password"
          />
          <!-- <small class="d-flex justify-content-end">
                <a class="text-secondary">forgot password?</a></small
              > -->
        </div>

        <button
          type="submit"
          class="float-right btn btn-sm pl-3 pr-3 text-white"
          style="background-color: #028476"
          @click="login()"
        >
          Login
        </button>
      </form>
    </div>
    <div class="col-lg-6"></div>
  </div>
</template>