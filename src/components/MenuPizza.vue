<template>
  <div class="cart-btn">
    <router-link to="/cart/1">
      <div class="cart">
        <img src="/img/cart-icon.png" alt="Cart icon" />
        <!-- <p>{{ itemsCart }}</p> -->
        <div class="qt-cart">{{ pizzaStore.count }}</div>
      </div>
    </router-link>
  </div>

  <!-- <div class="cart-qt">{{ pizzaStore.count }}</div> -->
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
import { useIngredientStore } from "@/store/IngredientStore";

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
    const ingredientStore = useIngredientStore();

    // pizzaStore.fetchPizza();
    return { pizzaStore, ingredientStore };
  },
  created() {
    this.pizzaStore.pizzas = [];
    this.ingredientStore.ingredientsAdded = [];

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
