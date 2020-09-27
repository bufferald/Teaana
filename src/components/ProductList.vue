<template>
  <section class="container-fluid p-0">
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
      <p v-if="query">
        {{ url }}
      </p>
      <!--   {{ name }} {{ price }} {{ image }} -->
      <!-- localhost:3000/public/uploads/102938129038129038 -->
      <div class="row">
        /
        <b-card
          v-for="product in products"
          :key="product.id"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="m-3 shadow"
        >
          <h3>{{ product.name }}</h3>
          {{ product.imagePath }}
          <figure>
            <b-img :src="path + product.imagePath" fluid></b-img>
          </figure>
          {{ product.price }}
          <b-button href="#" variant="success">Add to Cart</b-button>
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
      path: "http://localhost:3000/uploads/",
      url: "localhost:3000/v1/products",
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
      this.url += this.query;
      let res = await axios.get((this.url += this.query));
      this.products = res.data.data;
    },
    getImage(path) {
      return `localhost:3000/v1/uploads/${path}`;
    },
  },
  async mounted() {
    //load all products from api
    try {
      let response = await axios.get("http://localhost:3000/v1/products");
      this.products = response.data.data;
      //getting all name from
      this.name = this.products.map((x) => x.name);
      this.price = this.products.map((x) => x.id);
      this.image = this.products.map(
        (x) => `localhost:3000/uploads/ ${x.image}`
      );
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
<!--SZ Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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