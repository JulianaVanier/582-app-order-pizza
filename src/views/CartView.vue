<template>
  <section class="top">
    <p>Back</p>
    <p>{{ $route.params }}</p>
    <h1>Cart</h1>
    <div class="cart">
      <img src="/img/cart-icon.png" alt="Cart icon" />
      <p>{{ counterCart }}</p>
    </div>
  </section>
</template>

<script>
import { usePizzaStore } from "@/store/PizzaStore";

export default {
  name: "CartView",
  setup() {
    const pizzaCart = usePizzaStore();
    return { pizzaCart };
  },
  computed: {
    counterCart() {
      if (this.pizzaCart.getPizzasInCart.length > 0) {
        return this.pizzaCart.getPizzasInCart.length;
      } else {
        return 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
