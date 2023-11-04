<template>
    <div class="container">
        <div class="header">
			<router-link to="/" class="logo">
				<img src="../assets/images/logo.png" width="100">
			</router-link>
			<h1 class="cart-text">Cart Items</h1>
        </div>
        <div class="box w60">
			<div class="cards-cart center">
				<div class="w50"><h3>Items</h3></div>
				<div class="w25"><h3>Quantity</h3></div>
				<div class="w25"><h3>Subtotal</h3></div>
			</div>
            <div v-for="item of listItem" :key="item.id">
				<div class="cards-cart" v-if="item.is_selected == true">
					<div class="mt45">
						<button class="unset-btn" v-on:click="removeToCart(item)">
							<img src="../assets/icons/trash.svg" width="20">
						</button>
					</div>
					<div class="cards-cart w50">
						<div>
							<img height="100" :src="item.image">
						</div>
						<div>
							<h3 class="card-title">{{ item.name}}</h3>
							<h3 class="price-cart">Rp {{ formatUnitPrice(item.price) }}</h3>
						</div>
					</div>
					<div class="w25 center">
						<h3 class="card-title">
							<input
								class="qty"
								type="number"
								v-model.number="item.qty"
								@change="updateProductItem(item)"
								min="0"
							/>
						</h3>
					</div>
					<div class="w25 mr50 right">
						<h3 class="card-title">Rp {{ formatPrice(item.qty * item.price) }}</h3>
					</div>
				</div>
			</div>
        </div>
		<div class="box w35 h100">
			<h1 class="m0">Total</h1> 
			<div class="right">
				<h2 class="m0">Rp {{ formatPrice(sumTotal) }}</h2>
			</div>
		</div>
		<div class="mt20">@2023 - Vioni Wita Elya</div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
	name: 'cart',
	computed: {
        ...mapState({
			listItem: state => state.items
		}),
		sumTotal(){ // sum total all item
			let sum = 0
			this.listItem.forEach(item => {
				if(item.is_selected == true)
					sum = sum + (item.qty * item.price)
			});
			return sum
		}
	},
	methods: {
		...mapActions([
			'getItems'
		]),
		formatPrice(value) { // formating number to 0.000,00
			let val = (value / 1).toFixed(2).replace(".", ",");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		},
		formatUnitPrice(value) { // formating number to 0.000
			let val = (value / 1).toFixed(0).replace(".", ",");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		},
		removeToCart(item){ // update deleted item
			this.$store.commit('setItem', {item: item, from: 'cart'})
		},
		updateProductItem(item){
			this.$store.commit('updateQty', item)
		},
	},
	mounted() {
		this.getItems() // render items
	}
}
</script>

<style scoped>
  	@import "../assets/styles/main.css";
</style>
