
<template>
    <div>
        <div class="container">
            <div claass="row">
                <div class="mr40 mt20">
                    <router-link to="/list-product">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Detail Product</h1>
                    <p class="mt5 mb20 tc-green">Your Product details</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50 row">
                    <div class="w50">
                        <img :src="require(`../../assets/product/${item.productImages}`)" width="547" alt="Nama Gambar" />
                        <br>
                         <table>
                            <tr>
                                <td><b>Status</b></td>
                                <td><b>Product Status</b></td>

                            </tr>
                            <tr>
                                <td><label class="label-green">{{ item.status }}</label></td>
                                <td><label class="label-green">{{ item.productStatus }}</label></td>
                            </tr>
                         </table>
                    </div>
                    <div class="w40 pl40">
                        <p class="text-muted">#{{ item.productCode }}</p>
                        <h1>{{ item.productName }}</h1>
                        <h1>Rp {{ item.productPrice }}</h1>
                        <h3>Product Description : </h3>
                        <p class="text-muted">{{ item.productDescription }}</p>
                        <h3>Product Categories: {{ item.productCategories }}</h3>
                        <h3>Unit: {{ item.productCategories }}</h3>
                        <h3>Min Purchase: {{ item.productMinPurchase }} Unit</h3>
                        <h3>Max Purhcase: {{ item.productMaxPurchase }} Unit</h3>

                    </div>

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
