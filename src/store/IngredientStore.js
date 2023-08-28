import { defineStore } from "pinia";

export const useIngredientStore = defineStore("ingredientStore", {
  // state = data
  state: () => ({
    ingredients: [],
    ingredientsAdded: [],
    priceIngredientAdded: [],
    displayIngredient: false,
    // isTomato: false,
    // isRedOnions: false,
  }),
  getters: {
    getIngredients: (state) => state.ingredients,
    getIngredientsAdded: (state) => state.ingredientsAdded,
    getPriceIngredientAdded: (state) => state.priceIngredientAdded,
    // getDisplayIngredient: (state) => state.displayIngredient,
    // getIsTomato: (state) => state.isTomato,
    // getIsRedOnions: (state) => state.isRedOnions,
  },
  actions: {
    addIngredient(ingredient) {
      this.ingredients.push(ingredient);
    },

    toggleIngredient(ingredient) {
      if (
        this.ingredientsAdded.length === 0 ||
        this.priceIngredientAdded.length === 0
      ) {
        this.ingredientsAdded.push(ingredient._id);
        this.priceIngredientAdded.push(ingredient);
        return;
      }

      for (let i = 0; i < this.ingredientsAdded.length; i++) {
        if (ingredient._id === this.ingredientsAdded[i]) {
          this.ingredientsAdded.splice(i, 1);
          this.priceIngredientAdded.splice(i, 1);
          return;
        }
      }
      this.ingredientsAdded.push(ingredient._id);
      this.priceIngredientAdded.push(ingredient);


    },

    displayIngredient(ingredientId) {
      for (let i = 0; i < this.ingredientsAdded.length; i++) {
        if (ingredientId === this.ingredientsAdded[i]) {
          return true;
        }
      }
      return false;
    },
  },
});
