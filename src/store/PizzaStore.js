import { defineStore } from "pinia";

export const usePizzaStore = defineStore("pizzaStore", {
  // state = data
  state: () => ({
    pizzas: [],
    pizzasInCart: [],
    count: 0,
  }),
  getters: {
    getPizzas: (state) => state.pizzas,
    getPizzasInCart: (state) => state.pizzasInCart,
  },
  actions: {
    addPizza(pizza) {
      this.pizzas.push(pizza);
    },
    addPizzaToCart(pizza, size) {
      var pizzaToCart = {
        _id: pizza._id,
        title: pizza.title,
        description: pizza.description,
        sizeSelected: size,
        image: pizza.image,
        toppings: pizza.toppings,
        quantity: 1,
        // price: pizza.size[size].price,
      };

      this.pizzasInCart.push(pizzaToCart);
      this.count++;
      console.log("objeto to cart", this.pizzasInCart);
    },
    removePizzaFromCart(pizza) {
      this.pizzasInCart.splice(pizza, 1);
      this.count--;
    },
  },
});
