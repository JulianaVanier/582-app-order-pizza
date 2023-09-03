<template>
  <!-- {{ pizzaToCustom }} -->
  <TopBarCart></TopBarCart>
  <div class="box-title-custom">
    <div class="title">
      <h1>Customize</h1>
    </div>
  </div>
  <PizzaItem
    :pizza="getPizzaCustomUsingParams"
    :displayBtnCustom="false"
    :displaySetQt="true"
  >
  </PizzaItem>
  <div class="box-all-ingredients">
    <IngredientList></IngredientList>
  </div>
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
  computed: {
    //https://stackoverflow.com/questions/56303878/vue-js-cant-access-to-router-parameters-from-computed-property
    getPizzaCustomUsingParams: function () {
      // console.log("ROUTER", this.$route.params.id);
      console.log("AQUI", this.pizzaToCustomize);
      for (let i = 0; i < this.pizzaToCustomize.length; i++) {
        // console.log("TEST 1 ", typeof this.pizzaToCustomize[i].id);
        // console.log("TEST 2 ", typeof this.$route.params.id);
        if (this.pizzaToCustomize[i].id == this.$route.params.id) {
          return this.pizzaToCustomize[i];
        }
      }
      return [];
    },
  },
};
</script>

<style lang="scss" scoped></style>
