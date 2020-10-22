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
                      class="form-control text-center bg-white font-weight-bold"
                      style="color: #028476; border: none"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      v-model="input.name"
                    />
                  </div>

                  <figure>
                    <img
                      class="img img-fluid w-75 m-auto border-0 form-control"
                      alt="Tea-ana-product"
                      style="height: auto"
                      :src="path + `1601472795874-milktea1.png`"
                      fluid
                    />
                  </figure>
                </div>
                <div class="col-lg-5">
                  <div class="form-group">
                    <select class="custom-select" id="inputGroupSelect01">
                      <option selected>Size</option>
                      <option value="1">16 Oz</option>
                      <option value="2">22 Oz</option>
                      <option value="3">1 L</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select
                      class="custom-select"
                      id="inputGroupSelect01"
                      v-model="input.sugarlevel"
                    >
                      <option selected>Sugar Level</option>
                      <option value="1">25%</option>
                      <option value="2">50%</option>
                      <option value="3">75%</option>
                      <option value="3">100%</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Quantity"
                    />
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text bg-transparent border-0">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <label class="text-dark my-auto"
                      >Black Pearl<small>(₱15.00)</small></label
                    >
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text bg-transparent border-0">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <label class="text-dark my-auto"
                      >Fruit Jelly<small>(₱18.00)</small></label
                    >
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text bg-transparent border-0">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <label class="text-dark my-auto"
                      >Nata De Coco<small>(₱22.00)</small></label
                    >
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text bg-transparent border-0">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <label class="text-dark my-auto"
                      >Cream Cheese<small>(₱35.00)</small></label
                    >
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text bg-transparent border-0">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <label class="text-dark my-auto"
                      >Pink Pearl<small>(₱15.00)</small></label
                    >
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text bg-transparent border-0">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <label class="text-dark my-auto"
                      >Coffee Pearl<small>(₱15.00)</small></label
                    >
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text bg-transparent border-0">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <label class="text-dark my-auto"
                      >Popping Boba<small>(₱15.00)</small></label
                    >
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text bg-transparent border-0">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                    </div>
                    <label class="text-dark my-auto"
                      >Crushed Oreo<small>(₱18.00)</small></label
                    >
                  </div>
                  <hr />
                  <div class="input-group">
                    <input
                      type="text"
                      readonly
                      class="form-control text-center bg-white font-weight-bold"
                      style="color: #028476"
                      placeholder="Price"
                      aria-label="Price"
                      aria-describedby="basic-addon1"
                      v-model="input.price"
                    />
                  </div>
                  <small>Price varies on selected order</small>
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

      input: {
        id: "",
        name: "",
        price: "",
        size: "",
        sugarlevel: "",

        quantity: "",
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
