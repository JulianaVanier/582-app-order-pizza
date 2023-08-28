import { defineStore } from "pinia";

export const useIngredientStore = defineStore("ingredientStore", {
  // state = data
  state: () => ({
    ingredients: [],
    ingredientsAdded: [],
    priceIngredientAdded: [],
    displayIngredient: false,
    totalPriceIngredientAdded: 0,
  }),
  getters: {
    getIngredients: (state) => state.ingredients,
    getIngredientsAdded: (state) => state.ingredientsAdded,
    getPriceIngredientAdded: (state) => state.priceIngredientAdded,
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
        this.totalPriceIngredientAdded += ingredient.price;
        return;
      }

      for (let i = 0; i < this.ingredientsAdded.length; i++) {
        if (ingredient._id === this.ingredientsAdded[i]) {
          this.ingredientsAdded.splice(i, 1);
          this.priceIngredientAdded.splice(i, 1);
          this.totalPriceIngredientAdded -= ingredient.price;
          console.log("removidooooo", this.totalPriceIngredientAdded);
          return;
        }
      }
      this.ingredientsAdded.push(ingredient._id);
      this.priceIngredientAdded.push(ingredient);
      this.totalPriceIngredientAdded += ingredient.price;

      // for (let i = 0; i < this.priceIngredientAdded.length; i++) {

      //   this.totalPriceIngredientAdded += this.priceIngredientAdded[i].price;
      // }
      console.log(this.totalPriceIngredientAdded);
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
