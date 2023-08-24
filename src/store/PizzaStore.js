import { defineStore } from "pinia";

export const usePizzaStore = defineStore("pizzaStore", {
  // state = data
  state: () => ({
    pizzas: [],
    pizzasInCart: [],
  }),
  getters: {
    getPizzas: (state) => state.pizzas,
    getPizzasInCart: (state) => state.pizzasInCart,
  },
  actions: {
    addPizza(pizza) {
      this.pizzas.push(pizza);
    },
    addPizzaToCart(id) {
      this.pizzasInCart.push(id);
      console.log("carrinho", this.pizzasInCart);
    },
  },
});
