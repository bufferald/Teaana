<template>
  <section class="container-fluid shop p-0">
    <div class="header-msg vh-auto w-100 p-4">
      <h1 class="p-4 text-center font-weight-bold">
        Indulge in
        <strong>Milktea </strong>
        <strong>Coffee </strong>
        <strong>Wings </strong>&
        <strong>Takoyaki </strong>
      </h1>
    </div>
    <div class="container min-vh-100">
      {{ category }} {{ search }} {{ type }} {{ sort }}
      <div class="w-100 filters">
        <b-form-input
          v-model="search"
          placeholder="ex. Oreo, Thai"
          class="col-2 m-1 d-inline fill"
        >
        </b-form-input>
        <b-form-select
          v-model="category"
          :options="options1"
          class="col-2 m-1 d-inline fill"
        ></b-form-select>

        <b-form-select
          v-model="type"
          :options="options2"
          class="col-2 m-1 d-inline fill"
        ></b-form-select>

        <b-form-select
          v-model="sort"
          :options="options3"
          class="col-2 m-1 d-inline fill"
        ></b-form-select>

        <!-- <b-button variant="secondary" @click="searchProd()">Search</b-button> -->
      </div>

      <div class="row d-flex pt-5 pb-5 justify-content-center">
        <b-card
          v-for="product in filter"
          :key="product.id"
          img-alt="Image"
          img-top
          tag="article"
          style=""
          class="m-3 border-0 items"
        >
          <label
            class="text-dark text-left form-control border-0 font-weight-bold"
            >{{ product.name }}</label
          >

          <img
            class="img img-fluid w-75 m-auto border-0 form-control"
            alt="Tea-ana-product"
            style="height: auto"
            :src="path + `1601472795874-milktea1.png`"
            fluid
          />

          <div class="order form-control border-0">
            <label class="text-dark float-left align-self-center">
              ₱{{ product.price }}
            </label>
            <button
              id="show-btn"
              data-toggle="modal"
              data-target="#product-cart"
              class="align-self-center float-right p-0 btn btn-md"
              style="color: #5cd85c"
              @click="addcart(product)"
            >
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </b-card>
      </div>

      <div
        class="modal fade additem"
        id="product-cart"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content mx-auto">
            <div class="modal-header bg-light">
              <h5
                class="modal-title text-dark font-weight-bold"
                id="staticBackdropLabel"
              >
                Add to cart
              </h5>
              <button
                type="button"
                class="border-0 close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body product-data">
              <form class="row">
                <div class="col-lg-7 border-right">
                  <div class="input-group">
                    <input
                      type="text"
                      readonly
                      class="form-control text-center bg-transparent font-weight-bold"
                      style="color: #028476; border: none"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="Username"
                      v-model="input.name"
                    />
                    <input
                      type="text"
                      readonly
                      class="form-control bg-transparent"
                      style="border: none"
                      placeholder="Price"
                      aria-label="Price"
                      aria-describedby="Price"
                      v-model="input.price"
                    />
                  </div>

                  <figure>
                    <img
                      class="img img-fluid w-50 m-auto border-0 form-control"
                      alt="Tea-ana-product"
                      style="height: auto"
                      :src="path + `1601472795874-milktea1.png`"
                      fluid
                    />
                  </figure>
                </div>
                <div class="col-lg-5">
                  <div class="form-group">
                    <select class="custom-select" v-model="input.size">
                      <option v-for="size in sizes" :key="size">
                        {{ size }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select
                      class="custom-select"
                      v-model="input.sugarlevel"
                      id="inputGroupSelect01"
                      v
                    >
                      <option value="25">25%</option>
                      <option value="50">50%</option>
                      <option value="75">75%</option>
                      <option value="100">100%</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Quantity"
                      v-model="input.quantity"
                    />
                  </div>
                  <div class="form-group" v-if="category_id == 1">1</div>
                  <div class="form-group" v-else-if="category == 2">2</div>
                  <div class="form-group" v-else-if="category == 3">3</div>
                  <div class="input-group mt-3">
                    <input
                      type="submit"
                      value="Add to cart"
                      class="mx-auto w-50 btn btn-sm text-white"
                      style="background-color: #028476"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      //v-model for filters
      movetocartbtn: false,
      search: "",
      category: null,
      type: null,
      sort: null,

      products: [],
      pagination: [],

      //File Path
      path: "https://api.tea-ana.com/uploads/",

      //API URL
      url: "https://api.tea-ana.com/v1/products", //http://api.tea-ana.com/v1/products/product.id

      query: null,
      queryData: null,

      options1: [
        { value: null, text: "Categories" },
        { value: 1, text: "Milktea" },
        { value: 3, text: "Wings" },
        { value: 2, text: "Coffee" },
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
        { value: "asc", text: "Low to High" },
        { value: "desc", text: "High to Low" },
      ],
      sizes: ["16", "22"],

      sugarlevels: [
        { value: 16, text: "16 Ounces" },
        { value: 22, text: "22 Ounces" },
      ],
      input: {
        id: "",
        name: "",
        price: "",
        size: "16",
        sugarlevel: "",
        quantity: 1,
        addOns: "",
      },
    };
  },

  methods: {
    async getProducts() {
      let response = await axios.get(
        "https://api.tea-ana.com/v1/products?select=name,price,productType,imagePath,category_id"
      );
      this.products = response.data.data;
      console.log(this.products);
    },
    addcart: function (product) {
      (this.movetocartbtn = true),
        (this.input.id = product.id),
        (this.input.name = product.name),
        (this.input.price = product.price),
        (this.input.size = product.size),
        (this.input.sugarlevel = product.sugarlevel);
    },
  },

  async created() {
    this.getProducts();
  },
  computed: {
    filter() {
      //variable where to store filtered data
      let data = {};

      //returns all products if values are null
      if (
        this.search == null ||
        (this.search == "" && this.category == null && this.type == null)
      ) {
        if (this.sort == "desc") {
          return this.products.slice().sort((a, b) => {
            return b.price - a.price;
          });
        }
        if (this.sort == "asc") {
          return this.products.slice().sort((a, b) => {
            return a.price - b.price;
          });
        }
        return this.products;
      }

      //Filter for search
      data = this.products.filter((el) => {
        if (this.search != null && this.search != "") {
          console.log(1);
          return el.name.match(new RegExp(`${this.search}`, "gi"));
        }
        if (
          this.search == null ||
          (this.search == "" && this.category != null)
        ) {
          console.log(2);
          return el.category_id == this.category;
        }

        /*   if (this.search == null ||
          (this.search == "" && this.category != null)) { */
        //return el.category_id == this.category && el.productType == this.type;
      });

      if (this.sort != null) {
        data.sort((a, b) => {
          if (this.sort == "desc") {
            return b.price - a.price;
          }
          return a.price - b.price;
        });
      }

      console.log(data);

      //returns filted data
      return data;
    },
  },
};
</script>
<!--SZ Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop {
  margin-top: 69px;
}
.items {
  min-width: 250px;
  max-width: 250px;
  height: auto;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}

.btn:focus {
  outline: none;
  box-shadow: none;
}
.filters {
  margin-top: 5%;
  margin-bottom: 5%;
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
@media only screen and (max-width: 576px) {
  nav {
    position: relative;
  }
  .fill {
    max-width: 200px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media only screen and (max-width: 768px) {
}
@media only screen and (max-width: 992px) {
  .fill {
    max-width: 150px;
  }
}
</style>
