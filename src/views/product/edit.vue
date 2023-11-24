<template>
    <div>
      <div v-if="item">
        <h2>Product Details</h2>
        <p>ID: {{ item.id }}</p>
        <p>Product Code: {{ item.productCode }}</p>
        <p>Product Name: {{ item.productName }}</p>
        <p>Product Price: {{ item.productPrice }}</p>
        <p>Status: {{ item.status }}</p>
        <p>Product Categories: {{ item.productCategories }}</p>
        <p>Product Unit: {{ item.productUnit }}</p>
        <!-- <img src="required('../../assets/product/${{ item.productImages }}')" alt=""> -->
      </div>
    </div>
  </template>
<template>
    <div v-if="item">
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-user">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Add Product</h1>
                    <p class="mt5 mb20 tc-green">Add new Product to help you do it as soon as possible</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Images</label>
                </div>
                <div class="w80">
                    <img :src="require(`../../assets/product/${item.productImages}`)" width="65" alt="Nama Gambar" />
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Code</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="text" maxlength="8" minlength="8" v-model="item.productCode" readonly disabled>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Name</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="text" placeholder="Product Name" maxlength="20" minlength="5" v-model="item.productName">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Price</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="text" placeholder="Product Price" v-model="item.productPrice">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Description</label>
                </div>
                <div class="w80">
                    <textarea class="form-text" cols="20" rows="5" placeholder="Masukkan Product Description" v-model="item.productDescription"></textarea>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Unit</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="number" placeholder="Product Unit" v-model="item.productUnit">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Min Purchase</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="number" placeholder="Masukkan Min Purchase" v-model="item.productMinPurchase">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Maximal Purchase</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="number" placeholder="Masukkan Max Purchase" v-model="item.productMaxPurchase">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Categories</label>
                </div>
                <div class="w80">
                    <select class="form-select">
                        <option disabled>--- Select Categories ---</option>
                        <option value="1" selected>Electronic</option>
                        <option value="2">Vehicle</option>
                    </select>
                </div>
            </div>

            <div class="flex mt30">
                <router-link to="/list-product">
                    <button class="bt-submit-green">Update Product</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import Menu from "../../components/menu.vue";

export default {
    name: "list-product",
    components: {
        Menu,
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
                    productDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quod tempore? Enim temporibus quasi ipsa reiciendis, labore animi tempora dicta vero nostrum placeat culpa cum laboriosam ipsam totam! Porro, animi.",
                    productUnit: 20,
                    productStatus: "Indent",
                    productMinPurchase :1,
                    productMaxPurchase :5,
                    productImages: "iphonex.png",
                },
                {
                    id: "2",
                    productCode: "QZ7589",
                    productName: "Iphone X",
                    productPrice: "15.000.000",
                    status: "Publish",
                    productCategories: "Electronic",
                    productDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quod tempore? Enim temporibus quasi ipsa reiciendis, labore animi tempora dicta vero nostrum placeat culpa cum laboriosam ipsam totam! Porro, animi.",
                    productUnit: 200,
                    productStatus: "Available",
                    productMinPurchase :1,
                    productMaxPurchase :5,
                    productImages: "samsungfold5.png",
                },
            ],
            item: null,
        };
    },
    created() {
        // Mendapatkan parameter ID dari URL
        const productId = this.$route.params.id;

        // Mencari produk berdasarkan ID yang diberikan
        this.item = this.list_product.find(
            (product) => product.id === productId
        );
    },
};
</script>
