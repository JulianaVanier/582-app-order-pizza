<template>
  <section class="top">
    <div class="back-btn">
      <router-link to="/">
        <img src="/img/back-icon.png" alt="Back icon" />
      </router-link>
    </div>
    <div class="title">
      <h1>Cart</h1>
    </div>
    <div class="cart-btn">
      <div class="cart">
        <img src="/img/cart-icon.png" alt="Cart icon" />
        <!-- <p>{{ itemsCart }}</p> -->
        <div class="qt-cart">{{ pizzaCart.count }}</div>
      </div>
    </div>
  </section>
  <CartComponent></CartComponent>
</template>

<script>
import { usePizzaStore } from "@/store/PizzaStore";
import CartComponent from "@/components/CartComponent.vue";

export default {
  name: "CartView",
  data() {
    return {
      itemsCart: [],
    };
  },
  components: {
    CartComponent,
  },
  setup() {
    const pizzaCart = usePizzaStore();
    return { pizzaCart };
  },
};
</script>

<style lang="scss" scoped></style>
