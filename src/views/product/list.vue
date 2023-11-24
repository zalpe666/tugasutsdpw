<template>
    <div>
        <Menu />
        <div class="container">
            <h1 class="m0">Product</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage Product data here</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-product">
                        <button class="bt-green">+ Add Product</button>
                    </router-link>
                </div>
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input class="search-field" type="text" id="deskripsi" placeholder="Tambah deskripsi..." />
                </div>
                <div class="col flex">
                    <button class="bt-blue">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th>Product Code</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Status</th>

                            <th>Product Categories</th>
                            <th>Unit</th>
                            <th>Product Status</th>
                            <th>Product Images</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_product" :key="item.id">
                            <td class="center">#{{ item.productCode }}</td>
                            <td class="center">{{ item.productName }}</td>
                            <td class="center">Rp{{ item.productPrice }}</td>
                            <td class="center">
                                <label class="label-green">{{ item.status }}</label>
                            </td>
                            <td class="center">{{ item.productCategories }}</td>
                            <td class="center">{{ item.productUnit }}</td>
                            <td class="center">
                                <label class="label-green">{{ item.productStatus }}</label>
                            </td>
                            <td class="center">
                                <div>
                                <img :src="require(`../../assets/product/${item.productImages}`)" width="65" alt="Nama Gambar" />
                                </div>
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link :to="`/edit-product/${item.id}`">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link :to="`/detail-product/${item.id}`">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>

                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu.vue"

export default {
    name: 'list-product',
    components: {
        Menu
    },
    data() {
        return {
            list_product: [
                {
                    id: "1",
                    productCode: "QZ7527",
                    productName: "Samsung Fold 5",
                    productPrice: "5.000.000",
                    status: "Publish",
                    productCategories: "Electronic",
                    productUnit: 20,
                    productStatus: "Available",
                    productImages: "iphonex.png",

                },
                {
                    id: "2",
                    productCode: "QZ7589",
                    productName: "Iphone X",
                    productPrice: "5.000.000",
                    status: "Publish",
                    productCategories: "Electronic",
                    productUnit: 200,
                    productStatus: "Available",
                    productImages: "samsungfold5.png",

                },
            ]
        }
    }
}
</script>