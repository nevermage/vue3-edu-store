<template>
  <div class="container">
    <div class="card my-5 shadow">
      <div class="card-body">
        <div class="row">
        <product
            v-for="product in products"
            :key="product.id"
            v-bind:title="product.title"
            v-bind:category="product.category"
            :price="product.price"
            :isAv="product.isAv"
            :image="product.image"
            @add-to-cart="$root.addToCart(product)"
        ></product>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import product from "./product";
export default {
  name: "products",
  components: { product },
  data: () => ({
    products:
    []
  }),
  methods: {
    async fetchProducts() {
      const response = await fetch("http://localhost:3000/products");
      const products = await response.json();
      this.products = products;
      console.log(products);
    },
  },
  mounted() {
    this.fetchProducts();
  }
}
</script>
