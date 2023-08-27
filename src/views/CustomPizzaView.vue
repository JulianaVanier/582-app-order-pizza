<template>
  <!-- {{ pizzaToCustom }} -->
  <PizzaItem
    v-for="pizzaItemCustomize in pizzaToCustomize"
    :key="pizzaItemCustomize.id"
    :pizza="pizzaItemCustomize"
  ></PizzaItem>
  <IngredientList></IngredientList>
</template>

<script>
import IngredientList from "@/components/IngredientList.vue";
import { usePizzaStore } from "@/store/PizzaStore";
import PizzaItem from "@/components/PizzaItem.vue";

export default {
  name: "CustomPizzaView",
  components: {
    IngredientList,
    PizzaItem,
  },
  setup() {
    const pizzaStore = usePizzaStore();
    const pizzaToCustomize = pizzaStore.getPizzaCustomized;

    // pizzaStore.fetchPizza();
    return { pizzaToCustomize };
  },
  // computed: {
  //   pizzaToCustom() {
  //     for (let pizza of this.pizzaStore.getPizzas) {
  //       if (this.$router.params.pizza._id === pizza._id) {
  //         return pizza;
  //       }
  //     }
  //     return null;
  //   },
  // },
};
</script>

<style lang="scss" scoped></style>
