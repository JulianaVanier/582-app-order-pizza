import { defineStore } from "pinia";

export const usePizzaStore = defineStore("pizzaStore", {
  // state = data
  state: () => ({
    pizzas: [],
    pizzasInCart: [],
    pizzaCustomized: [],
    count: 0,
  }),
  getters: {
    getPizzas: (state) => state.pizzas,
    getPizzasInCart: (state) => state.pizzasInCart,
    getPizzaCustomized: (state) => state.pizzaCustomized,
  },
  actions: {
    addPizza(pizza) {
      this.pizzas.push(pizza);
    },
    addPizzaToCart(pizza, price, size) {
      // if the same pizza with the same size is added again, it doesn't print a new pizza,
      // it just increases the quantity
      for (let i = 0; i < this.pizzasInCart.length; i++) {
        if (
          pizza._id === this.pizzasInCart[i]._id &&
          size === this.pizzasInCart[i].sizeSelected
        ) {
          this.pizzasInCart[i].quantity++;
          return;
        }
      }
      // create new pizza object to add to cart
      var pizzaToCart = {
        _id: pizza._id,
        title: pizza.title,
        description: pizza.description,
        sizeSelected: size,
        priceSelected: price,
        image: pizza.image,
        toppings: pizza.toppings,
        quantity: 1,
      };
      this.pizzasInCart.push(pizzaToCart);
      this.count++;
      console.log("objeto to cart", this.pizzasInCart);
    },

    removePizzaFromCart(pizza) {
      this.pizzasInCart.splice(pizza, 1);
      this.count--;
    },

    pizzaAddQuantityInStore(pizza) {
      for (let i = 0; i < this.pizzasInCart.length; i++) {
        if (this.pizzasInCart[i]._id === pizza._id) {
          this.pizzasInCart[i].quantity++;
        }
      }
    },
    // calculate the total price of the pizza in the cart
    calcTotalPricePizzaInCart(id) {
      var totalPrice = 0.0;
      for (let i = 0; i < this.pizzasInCart.length; i++) {
        if (this.pizzasInCart[i]._id === id) {
          totalPrice =
            this.pizzasInCart[i].priceSelected * this.pizzasInCart[i].quantity;
        }
      }
      return totalPrice;
    },

    pizzaRemoveQuantityInStore(pizza) {
      for (let i = 0; i < this.pizzasInCart.length; i++) {
        if (this.pizzasInCart[i]._id === pizza._id) {
          this.pizzasInCart[i].quantity--;
        }
      }
    },

    addPizzaCustomize(pizza) {
      this.pizzaCustomized.push(pizza);
    },
  },
});
