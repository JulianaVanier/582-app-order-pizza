<template>
  <!-- <div class="box-indredient" @click="toggleIngredientPizza(ingredient)"> -->
  <div
    class="box-indredient"
    @click="ingredientStore.toggleIngredient(ingredient)"
  >
    <h3>{{ ingredient.title }}</h3>
    <img :src="ingredient.image" alt="Ingredient image" />
    <p>{{ ingredient.price }}</p>
  </div>
</template>

<script>
import { useIngredientStore } from "@/store/IngredientStore";
export default {
  name: "IngredientItem",
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const ingredientStore = useIngredientStore();
    return { ingredientStore };
  },
  methods: {
    // toggleIngredientPizza(ingredient) {
    //   console.log("AQUI TOGGLE");
    //   this.ingredientStore.toggleIngredient(ingredient);
    // },
  },
};
</script>

<style lang="scss" scoped></style>
