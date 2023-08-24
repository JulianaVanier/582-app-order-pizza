<template>
  <section class="top">
    <p>Back</p>
    <p>{{ $route.params }}</p>
    <h1>Cart</h1>
    <div class="cart">
      <img src="/img/cart-icon.png" alt="Cart icon" />
      <p>{{ counterCart }}</p>
      <!-- <p>{{ itemsCart }}</p> -->
    </div>
  </section>
</template>

<script>
import { usePizzaStore } from "@/store/PizzaStore";

export default {
  name: "CartView",
  data() {
    return {
      itemsCart: [],
    };
  },
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
    // showItemsCart() {
    //   for (let i = 0; i < this.pizzaCart.getPizzasInCart.length; i++) {
    //     if (
    //       this.pizzaCart.getPizzasInCart[i].id === this.pizzaCart.getPizzas.id
    //     ) {
    //       this.itemsCart.push(this.pizzaCart.getPizzas);
    //     }
    //   }
    //   return this.itemsCart;
    // },
  },
};
</script>

<style lang="scss" scoped></style>
