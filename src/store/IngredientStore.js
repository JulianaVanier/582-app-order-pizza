import { defineStore } from "pinia";

export const useIngredientStore = defineStore("ingredientStore", {
  // state = data
  state: () => ({
    ingredients: [],
  }),
  getters: {
    getIngredients: (state) => state.ingredients,
  },
  actions: {
    addIngredient(ingredient) {
      this.ingredients.push(ingredient);
    },
  },
});
