<template>
  <section class="review-order">
    <div class="container">
      <PizzaItem
        v-for="pizzaItemInCart in filterListCart"
        :key="pizzaItemInCart.id"
        :pizza="pizzaItemInCart"
      ></PizzaItem>
      <h1>this is cart component:</h1>
      {{ listPizzaSelected }}
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
  computed: {
    filterListCart() {
      var pizzasSelectedCart = [];
      for (let i = 0; i < this.listPizzaSelected.length; i++) {
        for (let j = 0; j < this.listOfPizzas.length; j++) {
          if (this.listPizzaSelected[i] == this.listOfPizzas[j]._id) {
            pizzasSelectedCart.push(this.listOfPizzas[j]);
          }
        }
      }
      return pizzasSelectedCart;
    },
  },
};
</script>

<style lang="scss" scoped></style>
