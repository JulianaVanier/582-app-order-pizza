import { defineStore } from "pinia";

export const usePizzaStore = defineStore("pizzaStore", {
  // state = data
  state: () => ({
    pizzas: [],
    pizzasInCart: [],
  }),
  getters: {
    getPizzas: (state) => state.pizzas,
  },
  actions: {
    addPizza(pizza) {
      this.pizzas.push(pizza);
    },
    addPizzaToCart(pizza) {
      this.pizzasInCart.push(pizza);
    },
  },
});
