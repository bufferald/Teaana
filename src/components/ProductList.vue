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
			<div class="w-100 filters">
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

				<!-- <b-button variant="secondary" @click="searchProd()">Search</b-button> -->
			</div>

			{{ category }} {{ search }} {{ type }} {{ sort }}

			<div class="row d-flex justify-content-center">
				<b-card
					v-for="product in filter"
					:key="product.id"
					img-alt="Image"
					img-top
					tag="article"
					style=""
					class="m-3 border-0 items"
				>
					<label class="text-dark text-left font-weight-bold">{{
						product.name
					}}</label>

					<img
						class="img img-fluid w-100"
						alt="Tea-ana-product"
						style="height: auto"
						:src="path + `1601472795874-milktea1.png`"
						fluid
					/>

					<div class="order">
						<label class="text-dark float-left align-self-center">
							₱{{ product.price }}
						</label>
						<button
							id="show-btn"
							data-toggle="modal"
							data-target="#exampleModalCenter"
							class="align-self-center float-right p-0 btn btn-md"
							style="color: #5cd85c"
						>
							<i class="fas fa-shopping-cart"></i>
						</button>
					</div>
					<!-- <div class="form-group">
              <button
                id="show-btn"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                class="text-success btn btn-lg p-0"
              >
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
           -->
				</b-card>
			</div>
		</div>
	</section>
</template>
<script>
import axios from 'axios';

export default {
	data() {
		return {
			//v-model for filters
			search: '',
			category: null,
			type: null,
			sort: null,

			products: [],
			pagination: [],

			//File Path
			path: 'http://api.tea-ana.com/uploads/',

			//API URL
			url: 'http://api.tea-ana.com/v1/products',

			query: null,
			queryData: null,

			options1: [
				{ value: null, text: 'Categories' },
				{ value: 1, text: 'Milktea' },
				{ value: 3, text: 'Wings' },
				{ value: 2, text: 'Coffee' },
				{ value: 4, text: 'Takoyaki' },
			],
			options2: [
				{ value: null, text: 'Product Type' },
				{ value: 'New', text: 'New' },
				{ value: 'Featured', text: 'Featured' },
				{ value: 'Best-Selling', text: 'Best-Selling' },
			],
			options3: [
				{ value: null, text: 'Order by' },
				{ value: 'asc', text: 'Low to High' },
				{ value: 'desc', text: 'High to Low' },
			],
		};
	},
	methods: {
		async getProducts() {
			let response = await axios.get(
				'http://api.tea-ana.com/v1/products?select=name,price,productType,imagePath,category_id'
			);
			this.products = response.data.data;
			console.log(this.products);
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
				(this.search == '' && this.category == null && this.type == null)
			) {
				if (this.sort == 'desc') {
					return this.products.slice().sort((a, b) => {
						return b.price - a.price;
					});
				}
				if (this.sort == 'asc') {
					return this.products.slice().sort((a, b) => {
						return a.price - b.price;
					});
				}
				return this.products;
			}

			//Filter for search
			data = this.products.filter(el => {
				if (this.search != null && this.search != '') {
					console.log(1);
					return el.name.match(new RegExp(`${this.search}`, 'gi'));
				}
				if (
					this.search == null ||
					(this.search == '' && this.category != null)
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
					if (this.sort == 'desc') {
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
	margin-top: 68px;
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
