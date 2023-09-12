<template>
  <!-- {{ pizzaToCustom }} -->
  <!-- <TopBarCart></TopBarCart> -->
  <div class="container">
    <div class="top-customize-view">
      <div class="back-btn">
        <router-link to="/">
          <img
            src="/web-framework/582-app-order-pizza/img/back-icon.png"
            alt="Back icon"
          />
        </router-link>
      </div>
      <div class="box-title-custom">
        <div class="title">
          <h1>Customize</h1>
        </div>
      </div>
    </div>
    <div class="pizza-custom">
      <PizzaItem
        :pizza="getPizzaCustomUsingParams"
        :displayBtnCustom="false"
        :displaySetQt="true"
      >
      </PizzaItem>
    </div>
    <div class="box-all-ingredients">
      <IngredientList></IngredientList>
    </div>
  </div>
</template>

<script>
import IngredientList from "@/components/IngredientList.vue";
import { usePizzaStore } from "@/store/PizzaStore";
import PizzaItem from "@/components/PizzaItem.vue";
// import TopBarCart from "@/components/TopBarCart.vue";

export default {
  name: "CustomPizzaView",
  components: {
    IngredientList,
    PizzaItem,
    // TopBarCart,
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
      for (let i = 0; i < this.pizzaToCustomize.length; i++) {
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
