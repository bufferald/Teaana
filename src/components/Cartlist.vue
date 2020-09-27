<template>
  <section class="container-fluid cart">
    <div class="row">
      <div class="col-lg-8 mb-5">
        <div class="card">
          <div class="card-body header-msg bg-white">
            <h1 class="text-left mb-3 font-weight-bold">
              <label>Your</label> <label>Cart</label>
            </h1>

            <div class="col-md-4 ml-auto">
              <b-input-group size="md" class="mb-3">
                <b-form-input
                  v-model="filter"
                  type="search"
                  id="filterInput"
                  placeholder="Type to Search"
                  size="sm"
                ></b-form-input>
                <b-input-group-append>
                  <b-button :disabled="!filter" size="sm" @click="filter = ''"
                    >Clear</b-button
                  >
                </b-input-group-append>
              </b-input-group>
            </div>

            <b-table
              caption-top
              :items="items"
              :fields="fields"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :filter="filter"
              responsive="sm"
              :current-page="currentPage"
              :per-page="perPage"
            >
            </b-table>
            <b-pagination
              pills
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              align="right"
            ></b-pagination>
          </div>
        </div>
      </div>
      <div class="col-lg-4 border mb-5 form p-4">
        <h1 class="text-dark">Payment</h1>
        <form class="p-4">
          <div class="form-group text-left mb-3">
            <p class="text-dark">Shipping Address</p>
            <small class="text-secondary"
              >Note: Place your current Address / Landmark</small
            >
            <textarea
              class="form-control"
              name="feedback"
              rows="5"
              placeholder="State your address here..."
              required
            ></textarea>
          </div>
          <div class="form-group text-left">
            <p class="text-dark">Payment Method</p>
            <small>Note: Send an exact amount of payment</small>
            <form>
              <div class="d-flex payments mb-4">
                <button class="btn">
                  <img
                    src="../assets/Images/gcash.png"
                    class="img img-fluid"
                    alt="Gcash-payment"
                  />
                </button>
                <button class="btn">
                  <img
                    src="../assets/Images/paymaya.png"
                    class="img img-fluid"
                    alt="Payment-payment"
                  />
                </button>
                <button class="btn">
                  <img
                    src="../assets/Images/cashondelivery.png"
                    class="img img-fluid"
                    alt="CashonDelivery-payment"
                  />
                </button>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-transparent border-0 font-weight-bold"
                    id="basic-addon1"
                    >Total</span
                  >
                </div>
                <input
                  type="number"
                  class="border-0 text-right form-control bg-white"
                  readonly
                  placeholder="0.00"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <input
                type="submit"
                value="Submit Payment"
                class="form-control border-0 text-white"
                style="background-color: #028476"
              />
            </form>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
//import axios from 'axios';
export default {
  data() {
    return {
      sortBy: "country",
      sortDesc: true,
      fields: [
        { key: "imagePath", sortable: true, label: "Image" },
        { key: "name", sortable: true },
        { key: "price", sortable: true },
        { key: "quantity", sortable: true },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 8,
      filter: null,
      items: [
        {
          id: 1,
          name: "Wintermelon Milktea",
          slug: "wintermelon-milktea",
          price: 79,
          productType: "New",
          imagePath: "no-image.jpeg",
          category_id: 1,
          subcategory_id: 1,
          quantity: 2,
        },
        {
          id: 2,
          name: "Okinawa",
          slug: "okinawa",
          price: 79,
          productType: "Best-selling",
          imagePath: "no-image.jpeg",
          category_id: 1,
          subcategory_id: 1,
          quantity: 6,
        },
        {
          id: 3,
          name: "Thai Milktea",
          slug: "thai-milktea",
          price: 79,
          productType: "New",
          imagePath: "no-image.jpeg",
          category_id: 1,
          subcategory_id: 1,
          quantity: 3,
        },
        {
          id: 4,
          name: "Taro Milktea",
          slug: "taro-milktea",
          price: 79,
          productType: "New",
          imagePath: "no-image.jpeg",
          category_id: 1,
          subcategory_id: 1,
          quantity: 1,
        },
        {
          id: 5,
          name: "Matcha",
          slug: "matcha",
          price: 79,
          productType: "New",
          imagePath: "no-image.jpeg",
          category_id: 1,
          subcategory_id: 1,
          quantity: 4,
        },
        {
          id: 6,
          name: "Wintermelon",
          slug: "wintermelon",
          price: 89,
          productType: "New",
          imagePath: "no-image.jpeg",
          category_id: 1,
          subcategory_id: 2,
          quantity: 7,
        },
        {
          id: 7,
          name: "Brown Sugar Milktea",
          slug: "brown-sugar-milktea",
          price: 79,
          productType: "New",
          imagePath: "no-image.jpeg",
          category_id: 1,
          subcategory_id: 2,
          quantity: 11,
        },
        {
          id: 8,
          name: "Chocolate Mousse",
          slug: "chocolate-mousse",
          price: 89,
          productType: "New",
          imagePath: "no-image.jpeg",
          category_id: 1,
          subcategory_id: 2,
          quantity: 1,
        },
        {
          id: 9,
          name: "Nutella Milktea",
          slug: "nutella-milktea",
          price: 89,
          productType: "New",
          imagePath: "no-image.jpeg",
          category_id: 1,
          subcategory_id: 2,
          quantity: 9,
        },
        {
          id: 10,
          name: "Oreo",
          slug: "oreo",
          price: 89,
          productType: "New",
          imagePath: "no-image.jpeg",
          category_id: 1,
          subcategory_id: 2,
          quantity: 3,
        },
      ],
    };
  },

  /* methods: {
		getGlobalData() {
			axios
				.get('https://corona.lmao.ninja/v2/countries?yesterday=false')
				.then(res => {
					return res.data;
				})
				.then(
					data => {
						this.items = data;
						this.totalRows = this.items.length;
					},
					error => {
						console.log(error);
					}
				);
		},
	},
	mounted() {
		this.getGlobalData();
	},
	 */
};
</script>

<style>
table {
  table-layout: fixed;
}
.payments {
  border-bottom: 2px solid grey;
}
</style>
