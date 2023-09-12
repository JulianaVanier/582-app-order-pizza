import { defineStore } from "pinia";
import { usePizzaStore } from "@/store/PizzaStore";

export const useIngredientStore = defineStore("ingredientStore", {
  // state = data
  state: () => ({
    ingredients: [],
    ingredientsAdded: [],
    totalPriceIngredientAdded: 0,
  }),
  getters: {
    getIngredients: (state) => state.ingredients,
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

    toggleIngredient(ingredient, pizzaId, pizzaToCustomize) {
      var pizzaCustomWithIngredient = null;
      for (let i = 0; i < pizzaToCustomize.length; i++) {
        if (pizzaToCustomize[i].id == pizzaId) {
          pizzaCustomWithIngredient = pizzaToCustomize[i];
        }
      }

      for (let i = 0; i < pizzaCustomWithIngredient.ingredient.length; i++) {
        if (pizzaCustomWithIngredient.ingredient[i]._id === ingredient._id) {
          pizzaCustomWithIngredient.ingredient =
            pizzaCustomWithIngredient.ingredient.filter(
              (ing) => ing._id !== ingredient._id
            );
          pizzaCustomWithIngredient.priceSelected -= ingredient.price;
          return;
        }
      }

      pizzaCustomWithIngredient.ingredient.push(ingredient);
      pizzaCustomWithIngredient.priceSelected += ingredient.price;
    },
  },
});
