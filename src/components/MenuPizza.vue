<template>
  <div class="cart-qt">{{ pizzaStore.count }}</div>
  <section class="menu-pizza">
    <div class="container">
      <PizzaItem
        v-for="pizzaItem in pizzaStore.getPizzas"
        :key="pizzaItem.id"
        :pizza="pizzaItem"
      ></PizzaItem>
    </div>
  </section>
</template>

<script>
import PizzaItem from "./PizzaItem.vue";
import { usePizzaStore } from "@/store/PizzaStore";

export default {
  name: "RegularPizza",
  data() {
    //   return {
    //     selectSize: false,
    //   };
  },
  components: {
    PizzaItem,
  },
  setup() {
    const pizzaStore = usePizzaStore();

    // pizzaStore.fetchPizza();
    return { pizzaStore };
  },
  created() {
    this.pizzaStore.pizzas = [];
    fetch("http://localhost:3000/pizza")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        // this.pizzaStore.setPizza(json);
        for (let pizza of json) {
          this.pizzaStore.addPizza(pizza);
          // console.log(pizza);
        }
      });
  },
};
</script>

<style lang="scss" scoped></style>
