<template>
  <section class="top">
    <router-link to="/">
      <img src="/img/back-icon.png" alt="Back icon" />
    </router-link>
    <!-- <p>{{ $route.params }}</p> -->
    <h1>Cart</h1>
    <div class="cart">
      <img src="/img/cart-icon.png" alt="Cart icon" />
      <p>{{ counterCart }}</p>
      <!-- <p>{{ itemsCart }}</p> -->
      <CartComponent></CartComponent>
    </div>
  </section>
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
