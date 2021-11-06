<template>
  <div class="col-md-6 col-lg-4 py-3">
    <div class="card py-3">
      <img class="card-img-top" v-bind:src="image" alt="imac">
      <div class="card-body">
        <h5 class="card-title">
          {{ title }}
        </h5>
        <p class="card-subtitle mt-2 mb-3">
          {{ category }}
        </p>
        <h5 class="fs-3 text-secondary">
          ${{ price * 26}}
        </h5>
        <p class="mt-3">
          Stock:
          <strong v-if="isAv" class="text-success">Available</strong>
          <strong v-else class="text-danger">Sold out</strong>
        </p>
        <button
            @click="addToCart()"
            :disabled="!isAv"
            class="btn btn-secondary w-100 shadow-none" >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  props: {
    key: Number,
    title: {
      type: String,
      isRequired: true,
      default: "Product name",
    },
    category: String,
    price: Number,
    image: String,
    isAv: Boolean,
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', {
        id: this.id,
        title: this.title,
        category: this.category,
        price: this.price,
        image: this.image,
        isAv: this.isAv,
      });
    }
  },
}
</script>

<style>
.text-important {
  color: blue;
  font-size: 19px;
}
</style>