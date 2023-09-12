<template>
  <div class="container">
    <div class="display-cart-index">
      <div class="cart-btn">
        <router-link to="/cart/1">
          <div class="cart">
            <img
              src="/web-framework/582-app-order-pizza/img/cart-icon.png"
              alt="Cart icon"
            />
            <div class="qt-cart">{{ pizzaStore.count }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <section class="menu-pizza">
    <div class="container">
      <PizzaItem
        v-for="pizzaItem in pizzaStore.getPizzas"
        :key="pizzaItem.id"
        :pizza="pizzaItem"
        :displayBtnCart="true"
        :displaySetQt="false"
        :displayBtnCustom="true"
      ></PizzaItem>
    </div>
  </section>
</template>

<script>
import PizzaItem from "./PizzaItem.vue";
import { usePizzaStore } from "@/store/PizzaStore";
import { useIngredientStore } from "@/store/IngredientStore";

export default {
  name: "RegularPizza",
  components: {
    PizzaItem,
  },
  setup() {
    const pizzaStore = usePizzaStore();
    const ingredientStore = useIngredientStore();

    return { pizzaStore, ingredientStore };
  },
  created() {
    this.pizzaStore.pizzas = [];
    this.ingredientStore.ingredientsAdded = [];

    fetch(
      "https://bookish-rotary-phone-j6j6g76r445255vv-3000.app.github.dev +/pizza"
    )
      .then((response) => response.json())
      .then((json) => {
        for (let pizza of json) {
          this.pizzaStore.addPizza(pizza);
        }
      });
  },
};
</script>

<style lang="scss" scoped></style>
