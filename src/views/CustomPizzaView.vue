<template>
  <!-- {{ pizzaToCustom }} -->
  <TopBarCart></TopBarCart>
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
import TopBarCart from "@/components/TopBarCart.vue";

export default {
  name: "CustomPizzaView",
  components: {
    IngredientList,
    PizzaItem,
    TopBarCart,
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
