<template>
  <table class="table cart-table">
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col" class="text-center">Quantity</th>
      <th scope="col" class="text-center">Price</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <cart-product
        v-for="product in cartProducts"
        :key="product.id"
        v-bind:title="product.title"
        v-bind:category="product.category"
        :price="product.price"
        :isAv="product.isAv"
        :image="product.image"
        :quantity="product.quantity"
        @cart-quantity-minus="$root.cartMinusQuantity(product)"
        @cart-quantity-plus="$root.cartPlusQuantity(product)"
        @delete-from-cart="$root.deleteFromCart(product)"
    />
    </tbody>
    <tfoot>
    <tr
        v-if="$root.cartProducts.length!=0"
        class="fw-bold px-4">
      <td class="text-end">
        Total:
      </td>
      <td class="text-center">{{ $root.cartProducts.length }}</td>
      <td class="text-end">$2998</td>
    </tr>
    </tfoot>
  </table>
</template>

<script>
import cartProduct from "./cartProduct";
export default
{
  name: "cart-product-list",
  components: {cartProduct},
  computed: {
    cartProducts() {
      return this.$store.getters.getCartProducts;
    },
  },
}
</script>