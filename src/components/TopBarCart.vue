<template>
  <section class="top">
    <div class="back-btn">
      <router-link to="/">
        <img src="/img/back-icon.png" alt="Back icon" />
      </router-link>
    </div>
    <div class="cart-btn">
      <div class="cart">
        <img src="/img/cart-icon.png" alt="Cart icon" />
        <div class="qt-cart">{{ pizzaCart.count }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { usePizzaStore } from "@/store/PizzaStore";

export default {
  name: "TopBarCart",
  setup() {
    const pizzaCart = usePizzaStore();
    return { pizzaCart };
  },
};
</script>

<style lang="scss" scoped></style>
