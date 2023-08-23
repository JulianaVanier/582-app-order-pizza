import { defineStore } from "pinia";

export const usePizzaStore = defineStore("pizzaStore", {
  // state = data
  state: () => ({
    pizzas: [],
  }),
  getters: {
    getPizza: (state) => state.pizzas,
  },
  actions: {
    setPizza(pizza) {
      this.pizzas.push(pizza);
    },
  },
});
