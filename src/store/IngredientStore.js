import { defineStore } from "pinia";
import { usePizzaStore } from "@/store/PizzaStore";

export const useIngredientStore = defineStore("ingredientStore", {
  // state = data
  state: () => ({
    ingredients: [],
    ingredientsAdded: [],
    priceIngredientAdded: [],
    // displayIngredient: false,
    totalPriceIngredientAdded: 0,
  }),
  getters: {
    getIngredients: (state) => state.ingredients,
    getIngredientsAdded: (state) => state.ingredientsAdded,
    getPriceIngredientAdded: (state) => state.priceIngredientAdded,
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
        console.log("TEST 1 ", pizzaToCustomize[i].id);
        console.log("TEST 2 ", pizzaId);
        if (pizzaToCustomize[i].id == pizzaId) {
          pizzaCustomWithIngredient = pizzaToCustomize[i];
        }
      }
      console.log("para ver o que e", pizzaCustomWithIngredient);

      for (let i = 0; i < pizzaCustomWithIngredient.ingredient.length; i++) {
        console.log("para ver o objeto", pizzaCustomWithIngredient.ingredient);
        console.log("id do array", pizzaCustomWithIngredient.ingredient[0]._id);
        console.log("id que entrou", ingredient._id);
        if (pizzaCustomWithIngredient.ingredient[i]._id === ingredient._id) {
          // var pizzaCustomIngredient = pizzaCustomWithIngredient.ingredient[i];

          pizzaCustomWithIngredient.ingredient =
            pizzaCustomWithIngredient.ingredient.filter(
              (ing) => ing._id !== ingredient._id
            );
          this.ingredientsAdded.splice(i, 1);

          // pizzaCustomWithIngredient.ingredient.splice(i, 1);
          this.totalPriceIngredientAdded -= ingredient.price;

          // this.totalPriceIngredientAdded.toFixed(2);
          console.log(
            "preco total depois remover",
            this.totalPriceIngredientAdded
          );
          console.log("para ver AQUI", pizzaCustomWithIngredient.ingredient);
          return;
        }
      }

      pizzaCustomWithIngredient.ingredient.push(ingredient);
      this.totalPriceIngredientAdded += ingredient.price;

      // this.totalPriceIngredientAdded.toFixed(2);
      this.ingredientsAdded.push(ingredient._id);
      console.log("bbbbbbbbbb", pizzaToCustomize);
    },

    // displayIngredientInPizza(ingredient) {
    //   if (this.ingredientsAdded.includes(ingredient._id)) {
    //     return true;
    //   }
    //   return false;
    // },
  },
});
