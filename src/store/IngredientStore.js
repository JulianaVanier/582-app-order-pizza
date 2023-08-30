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
    getdisplayIngredient: (state) => state.displayIngredient,
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

    toggleIngredient(ingredient, pizzaCustomized) {
      var pizzaCustomWithIngredient = pizzaCustomized[0];

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
          this.displayIngredient = false;
          // this.ingredientsAdded.splice(i, 1);

          // pizzaCustomWithIngredient.ingredient.splice(i, 1);
          this.totalPriceIngredientAdded -= ingredient.price;
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
      // this.ingredientsAdded.push(ingredient);

      // console.log(
      //   "para ver o array do ingredient dentro da pizza",
      //   pizzaCustomWithIngredient
      // );
      // console.log(
      //   "preco total depois adicionar",
      //   this.totalPriceIngredientAdded
      // );
    },

    // displayIngredient(ingredient, pizzaCustomized) {
    //   console.log("ingredient aaaaaaaaaaaa", ingredient);
    //   console.log("pizzaCustomize bbbbbbbbbb", pizzaCustomized);
    //   console.log("pizzaCustomize ccccccccccc", pizzaCustomized.ingredient);
    //   // if (pizzaCustomized.ingredient === 0) {
    //   //   return false;
    //   // }
    //   // var pizzaCustomWithIngredient = pizzaCustomize[0];
    //   // console.log("TOMA", pizzaCustomWithIngredient.ingredient);
    //   // for (let i = 0; i < pizzaCustomized.ingredient.length; i++)
    //   //   if (pizzaCustomized.ingredient[i]._id === ingredient._id) {
    //   //     return true;
    //   //   }
    //   // return false;
    // },

    // displayIngredient(ingredientId) {
    //   console.log("ingredient aADED", this.ingredientsAdded);
    //   console.log("ingredient aaaaaaaaaaaa", ingredientId);
    //   // console.log("pizzaCustomize bbbbbbbbbb", pizzaCustomized);
    //   // console.log("pizzaCustomize ccccccccccc", pizzaCustomized.ingredient);

    //   // if (this.ingredientsAdded.includes(ingredientId)) {
    //   //   return true;
    //   // } else {
    //   //   return false;
    //   // }

    //   // var pizzaCustomWithIngredient = pizzaCustomized[0];
    //   // for (let i = 0; i < pizzaCustomWithIngredient.ingredient.length; i++) {
    //   //   if (pizzaCustomWithIngredient.ingredient[i]._id === ingredient._id) {
    //   //     return true;
    //   //   }
    //   // }
    //   // return false;
    // },
  },
});
