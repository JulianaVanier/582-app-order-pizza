<template>
  <section class="list-ingredients">
    <div class="container">
      <IngredientItem
        v-for="ingredientItem in ingredientStore.getIngredients"
        :key="ingredientItem.id"
        :ingredient="ingredientItem"
      ></IngredientItem>
    </div>
  </section>
</template>

<script>
import { useIngredientStore } from "@/store/IngredientStore";
import IngredientItem from "./IngredientItem.vue";

export default {
  name: "IngredientList",
  components: {
    IngredientItem,
  },
  setup() {
    const ingredientStore = useIngredientStore();
    console.log(ingredientStore.getIngredients);
    return { ingredientStore };
  },
  created() {
    // this.pizzaStore.pizzas = [];
    fetch("http://localhost:3000/ingredient")
      .then((response) => response.json())
      .then((json) => {
        for (let ingredient of json) {
          this.ingredientStore.addIngredient(ingredient);
        }
      });
  },
};
</script>

<style lang="scss" scoped></style>
