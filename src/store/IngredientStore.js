import { defineStore } from "pinia";
import { usePizzaStore } from "@/store/PizzaStore";

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
    gettotalPriceIngredientAdded: (state) => state.totalPriceIngredientAdded,
  },
  setup() {
    return {
      pizzaStore: usePizzaStore(),
    };
  },
  actions: {
    addIngredient(ingredient) {
      this.ingredients.push(ingredient);
    },

    // toggleIngredient(ingredient, pizzaCustomize) {
    //   console.log("ingredient", ingredient);
    //   console.log("pizzaCustomize", pizzaCustomize.ingredient);
    //   var ingredientPizzaCustom = pizzaCustomize.ingredient;
    //   console.log("ingredientPizzaCustom", ingredientPizzaCustom);

    //   if (ingredientPizzaCustom === 0) {
    //     ingredientPizzaCustom.push(ingredient);
    //     this.totalPriceIngredientAdded += ingredient.price;
    //     console.log("o que deu", ingredientPizzaCustom);
    //     return;
    //   }

    //   for (let i = 0; i < ingredientPizzaCustom.length; i++)
    //     if (ingredientPizzaCustom[i] === ingredient._id) {
    //       ingredientPizzaCustom.splice(i, 1);
    //       this.totalPriceIngredientAdded -= ingredient.price;
    //     } else {
    //       ingredientPizzaCustom.push(ingredient);
    //       this.totalPriceIngredientAdded += ingredient.price;
    //       // console.log("ingredient added", ingredient);
    //       // console.log("pizzaCustomize", pizzaCustomize[i].ingredient);
    //       // console.log("total price", this.totalPriceIngredientAdded);
    //       return;
    //     }

    //   for (let i = 0; i < ingredientPizzaCustom.length; i++)
    //     if (ingredientPizzaCustom[i] === ingredient._id) {
    //       ingredientPizzaCustom.splice(i, 1);
    //       this.totalPriceIngredientAdded -= ingredient.price;
    //     } else {
    //       ingredientPizzaCustom.push(ingredient);
    //       this.totalPriceIngredientAdded += ingredient.price;
    //       // console.log("ingredient added", ingredient);
    //       // console.log("pizzaCustomize", pizzaCustomize[i].ingredient);
    //       // console.log("total price", this.totalPriceIngredientAdded);
    //       return;
    //     }
    // },

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
          return;
        }
      }
      this.ingredientsAdded.push(ingredient._id);
      this.priceIngredientAdded.push(ingredient);
      this.totalPriceIngredientAdded += ingredient.price;
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
