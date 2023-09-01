import { defineStore } from "pinia";
import { usePizzaStore } from "@/store/PizzaStore";

export const useIngredientStore = defineStore("ingredientStore", {
  // state = data
  state: () => ({
    ingredients: [],
    ingredientsAdded: [],
    // priceIngredientAdded: [],
    // displayIngredient: false,
    totalPriceIngredientAdded: 0,
  }),
  getters: {
    getIngredients: (state) => state.ingredients,
    // getIngredientsAdded: (state) => state.ingredientsAdded,
    // getPriceIngredientAdded: (state) => state.priceIngredientAdded,
    // getdisplayIngredient: (state) => state.displayIngredient,
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

      console.log("PARA VER AQUI", pizzaCustomWithIngredient);
      for (let i = 0; i < pizzaCustomWithIngredient.ingredient.length; i++) {
        if (pizzaCustomWithIngredient.ingredient[i]._id === ingredient._id) {
          // var pizzaCustomIngredient = pizzaCustomWithIngredient.ingredient[i];

          pizzaCustomWithIngredient.ingredient =
            pizzaCustomWithIngredient.ingredient.filter(
              (ing) => ing._id !== ingredient._id
            );
          // this.ingredientsAdded.splice(i, 1);

          // pizzaCustomWithIngredient.ingredient.splice(i, 1);
          pizzaCustomWithIngredient.priceSelected -= ingredient.price;
          // this.totalPriceIngredientAdded -= ingredient.price;

          // this.totalPriceIngredientAdded.toFixed(2);
          return;
        }
      }

      pizzaCustomWithIngredient.ingredient.push(ingredient);
      pizzaCustomWithIngredient.priceSelected += ingredient.price;
      // this.totalPriceIngredientAdded += ingredient.price;

      // this.totalPriceIngredientAdded.toFixed(2);
      // this.ingredientsAdded.push(ingredient._id);
    },
  },
});
