<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-product">
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
                    <label for="input-file" class="form-select"
                        style="cursor: pointer; display: inline-block; width: 80px; height: 80px; overflow: hidden;">
                        <center><img src="../../assets/icons/add-image.png" alt="Icon Foto" width="32" height="32"><p>Add Images</p></center>
                        <input type="file" accept="images/" id="input-file"
                            style="opacity: 0; position: absolute; top: 0; left: 0;">
                    </label>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Code</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="text" placeholder="Product Code" maxlength="8" minlength="8">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Name</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="text" placeholder="Product Name" maxlength="20" minlength="5">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Price</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="text" placeholder="Product Price">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Price</label>
                </div>
                <div class="w80">
                    <textarea class="form-text" cols="20" rows="5" placeholder="Masukkan Product Description"></textarea>
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Product Unit</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="text" placeholder="Product Unit">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Min Purchase</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="number" placeholder="Masukkan Min Purchase">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Maximal Purchase</label>
                </div>
                <div class="w80">
                    <input class="form-text" type="number" placeholder="Masukkan Max Purchase">
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Categories</label>
                </div>
                <div class="w80">
                    <select class="form-select">
                        <option disabled selected>--- Select Categories ---</option>
                        <option value="1">Electronic</option>
                        <option value="2">Vehicle</option>
                    </select>
                </div>
            </div>

            <div class="flex mt30">
                <router-link to="/list-user">
                    <button class="bt-submit-green">Add User</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'add-user'
}
</script>