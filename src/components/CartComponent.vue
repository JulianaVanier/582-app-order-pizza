<template>
  <section class="review-order">
    <div class="container">
      <PizzaItem
        v-for="pizzaItemInCart in listPizzaSelected"
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
    const listPizzaSelected = pizzaStore.getPizzasInCart;

    // pizzaStore.fetchPizza();
    return { listPizzaSelected, listOfPizzas };
  },
};
</script>

<style lang="scss" scoped></style>
