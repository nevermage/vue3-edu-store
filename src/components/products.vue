<template>
  <div class="container">
    <div class="card my-5 shadow">
      <div class="card-body">
        <div class="row">
        <product
            v-for="product in products"
            :id="product.id"
            :key="product.id"
            v-bind:title="product.title"
            v-bind:category="product.category"
            :price="product.price"
            :isAv="product.isAv"
            :image="product.image"
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
  // data: () => ({
  //   products:
  //   []
  // }),
  methods: {

  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    }
  }
}
</script>
