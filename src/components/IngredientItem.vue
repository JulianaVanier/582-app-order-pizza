<template>
  <div
    class="box-indredient"
    @click="
      ingredientStore.toggleIngredient(
        ingredient,
        $route.params.id,
        pizzaToCustomize
      )
    "
  >
    <h3>{{ ingredient.title }}</h3>
    <img :src="ingredient.image" alt="Ingredient image" />
    <p>$ {{ ingredient.price }}</p>
  </div>
</template>

<script>
import { useIngredientStore } from "@/store/IngredientStore";
import { usePizzaStore } from "@/store/PizzaStore";
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
    const pizzaStore = usePizzaStore();
    const pizzaToCustomize = pizzaStore.getPizzaCustomized;
    return { ingredientStore, pizzaStore, pizzaToCustomize };
  },
};
</script>

<style lang="scss" scoped></style>
