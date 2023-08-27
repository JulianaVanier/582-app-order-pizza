<template>
  <!-- {{ pizzaToCustom }} -->
  <PizzaItem
    v-for="pizzaItemCustomize in pizzaToCustomize"
    :key="pizzaItemCustomize.id"
    :pizza="pizzaItemCustomize"
  ></PizzaItem>
  <CustomPizza></CustomPizza>
  <IngredientList></IngredientList>
</template>

<script>
import IngredientList from "@/components/IngredientList.vue";
import CustomPizza from "@/components/CustomPizza.vue";
import { usePizzaStore } from "@/store/PizzaStore";
import PizzaItem from "@/components/PizzaItem.vue";

export default {
  name: "CustomPizzaView",
  components: {
    IngredientList,
    CustomPizza,
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
