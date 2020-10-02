<template>
  <section class="container-fluid shop p-0">
    <div class="header-msg vh-auto w-100 p-4">
      <h1 class="font-weight-bold m-auto text-center">
        Indulge in
        <label>Milktea </label>
        <label>Coffee </label>
        <label>Wings </label>&
        <label>Takoyaki </label>
      </h1>
    </div>
    <div class="container min-vh-100">
      <b-form-group class="w-100 filters">
        <b-form-input
          v-model="search"
          placeholder="ex. Oreo, Thai"
          class="col-2 m-1 d-inline"
        >
        </b-form-input>
        <b-form-select
          v-model="category"
          :options="options1"
          class="col-2 m-1 d-inline"
        ></b-form-select>

        <b-form-select
          v-model="type"
          :options="options2"
          class="col-2 m-1 d-inline"
        ></b-form-select>

        <b-form-select
          v-model="sort"
          :options="options3"
          class="col-2 m-1 d-inline"
        ></b-form-select>

        <b-button variant="secondary" @click="searchProd()">Search</b-button>
      </b-form-group>

      {{ url }}

      <div class="row d-flex justify-content-center">
        <b-card
          v-for="product in products"
          :key="product.id"
          img-alt="Image"
          img-top
          tag="article"
          style=""
          class="m-3 border-0 items"
        >
          <p class="text-dark text-left font-weight-bold">{{ product.name }}</p>
          <figure class="w-100" style="height: 170px">
            <b-img
              class="img img-fluid"
              alt="Tea-ana-product"
              :src="path + product.imagePath"
              fluid
            ></b-img>
          </figure>
          <div class="d-flex justify-content-between">
            <label class="text-dark border p-0">₱{{ product.price }}</label>

            <b-button
              variant="transparent"
              id="show-btn"
              @click="$bvModal.show('bv-modal-example')"
              class="text-success btn btn-lg"
            >
              <i class="fas fa-shopping-cart"></i
            ></b-button>
          </div>
          <b-modal id="bv-modal-example" :show.sync="$bvModal" hide-footer>
            <template v-slot:modal-title>
              {{ product.name }}
            </template>
            <div class="d-block text-center">
              <h3>Hello From This Modal!</h3>
            </div>
            <b-button
              class="mt-3"
              block
              @click="$bvModal.hide('bv-modal-example')"
              >Close Me</b-button
            >
          </b-modal>
        </b-card>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      search: null,
      category: null,
      type: null,
      sort: null,
      products: [],
      res: [],
      name: [],
      price: [],
      image: [],
      path: "http://api.tea-ana.com/uploads/",
      url: "http://api.tea-ana.com/",
      query: null,
      options1: [
        { value: null, text: "Categories" },
        { value: 1, text: "Milktea" },
        { value: 2, text: "Wings" },
        { value: 3, text: "Coffee" },
        { value: 4, text: "Takoyaki" },
      ],
      options2: [
        { value: null, text: "Product Type" },
        { value: "New", text: "New" },
        { value: "Featured", text: "Featured" },
        { value: "Best-Selling", text: "Best-Selling" },
      ],
      options3: [
        { value: null, text: "Order by" },
        { value: "desc", text: "High to Low" },
        { value: "asc", text: "Low to High" },
      ],
    };
  },
  methods: {
    async searchProd() {
      this.query = `?search=${this.search}&category=${this.category}&type=${this.type}&sort=${this.sort}`;

      let res = await axios.get((this.url += this.query));
      this.products = res.data.data;
      this.name = this.products.map((x) => x.name);
    },
    getImage(path) {
      return `http://api.tea-ana.com/v1/uploads/${path}`;
    },
  },
  async mounted() {
    //load all products from api
    try {
      let response = await axios.get(
        "http://api.tea-ana.com/v1/products?page=1"
      );
      this.products = response.data.data;
      //getting all name from
      this.name = this.products.map((x) => x.name);
      this.price = this.products.map((x) => x.id);
      this.image = this.products.map(
        (x) => `http://api.tea-ana.com/v1/uploads/ ${x.image}`
      );
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
<!--SZ Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-msg {
  margin-top: 90px;
}
.items {
  min-width: 250px;
  max-width: 250px;
  height: auto;
  box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.2);
  border-radius: 15px;
}
.items img {
  height: 100%;
}
.filters {
  margin-top: 5%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>