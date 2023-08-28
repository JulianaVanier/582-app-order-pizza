import { defineStore } from "pinia";

export const useIngredientStore = defineStore("ingredientStore", {
  // state = data
  state: () => ({
    ingredients: [],
    ingredientsAdded: [],
    displayIngredient: false,
    // isTomato: false,
    // isRedOnions: false,
  }),
  getters: {
    getIngredients: (state) => state.ingredients,
    getIngredientsAdded: (state) => state.ingredientsAdded,
    // getDisplayIngredient: (state) => state.displayIngredient,
    // getIsTomato: (state) => state.isTomato,
    // getIsRedOnions: (state) => state.isRedOnions,
  },
  actions: {
    addIngredient(ingredient) {
      this.ingredients.push(ingredient);
    },

    testAlert() {
      console.log("ALERT");
    },

    toggleIngredient(ingredient) {
      console.log("Ju", new Date());
      console.log("ingredient para ver", ingredient._id);
      // console.log("ingredient para ver", ingredient);
      if (this.ingredientsAdded.length === 0) {
        this.ingredientsAdded.push(ingredient._id);
        return;
      }

      for (let i = 0; i < this.ingredientsAdded.length; i++) {
        if (ingredient._id === this.ingredientsAdded[i]) {
          // this.ingredientStore.removeIngredientToStore(ingredientId);
          this.ingredientsAdded.splice(i);
          return;
        }
      }
      this.ingredientsAdded.push(ingredient._id);
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
