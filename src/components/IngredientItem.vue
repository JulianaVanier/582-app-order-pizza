<template>
  <div class="box-indredient">
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
};
</script>

<style lang="scss" scoped></style>
