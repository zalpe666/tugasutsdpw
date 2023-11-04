<template>
    <div>
		<Menu/>
        <div class="header">
			<div class="logo">
				<img src="../assets/images/logo.png" width="100">
			</div>
			<div class="sort">
				<h3 class="sort-text">Sort By</h3>
				<select name="one" class="sort-dropdown" v-model="sort_by">
					<option value="0">Select…</option>
					<option value="1">Price 0 > 9</option>
					<option value="2">Price 9 > 0</option>
					<option value="3">Name A > Z</option>
					<option value="4">Name Z > A</option>
				</select>
			</div>
			<router-link to="/cart" class="cart-link">
				<img src="../assets/icons/cart.svg" width="50" class="cart-icon">
			</router-link>
        </div>
        <div class="box bg-body">
            <div class="container">
                <div class="cards" v-for="item of listItem" :key="item.id">
                    <div class="card-item">
                        <div class="card-image">
                            <img height="200" :src="item.image">
                        </div>
                        <div class="card-price">
                            <h3 class="card-title">{{ item.name}}</h3>
                            <h2 class="card-intro">Rp {{ formatUnitPrice(item.price) }}</h2>
                        </div>
						<button v-if="item.is_selected != true" v-on:click="addToCart(item)" class="btn-15">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
		<div class="mt20">@2023 - Vioni Wita Elya</div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Menu from "../components/menu.vue"

export default {
	name: 'catalog',
	components: {
		Menu
	},
	data(){
		return {
			sort_by: 0
		}
	},
	computed: {
        ...mapState({ // get data from state
			listItem: state => state.items
		})
	},
	methods: {
		...mapActions([
			'getItems',
		]),
		formatUnitPrice(value) { // formating number to 0.000
			let val = (value / 1).toFixed(0).replace(".", ",");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		},
		addToCart(item){ // update selected item
			this.$store.commit('setItem', {item: item, from: 'catalog'})
		},
	},
	mounted() {
		this.getItems() // render items for the first
	},
	watch:{
		'sort_by': { // to filter by search box
            handler: function (val) {
				this.$store.commit('sortItems', val)
            },
            deep: true
        },
	}
}
</script>

<style scoped>
  	@import "../assets/styles/main.css";
</style>
