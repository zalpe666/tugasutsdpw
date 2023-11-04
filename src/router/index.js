import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// Product
import Product from '../views/product/list'

import Catalog from '../views/index'
import Cart from '../views/cart'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'catalog',
			component: Catalog
		},
		{
			path: '/cart',
			name: 'cart',
			component: Cart
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		}
	]
})
