<template>
  <section class="review-order">
    <div class="container">
      <PizzaItem
        v-for="pizzaItemInCart in pizzaInCart"
        :key="pizzaItemInCart.id"
        :pizza="pizzaItemInCart"
      ></PizzaItem>
      <!-- <h1>this is cart component:</h1>
      {{ listPizzaSelected }} -->
    </div>
  </section>
</template>

<script>
import PizzaItem from "./PizzaItem.vue";
import { usePizzaStore } from "@/store/PizzaStore";

export default {
  name: "CartComponent",
  components: {
    PizzaItem,
  },
  setup() {
    const pizzaStore = usePizzaStore();
    const listOfPizzas = pizzaStore.getPizzas;
    const pizzaInCart = pizzaStore.getPizzasInCart;

    // pizzaStore.fetchPizza();
    return { pizzaInCart, listOfPizzas };
  },
};
</script>

<style lang="scss" scoped></style>
