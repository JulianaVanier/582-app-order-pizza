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
      // clean the array of customized pizzas
      if (this.pizzaCustomized !== null) {
        this.pizzaCustomized = [];
      }

      if (pizza.custom === true) {
        var pizzaToCustomize = {
          _id: pizza._id,
          customize: pizza.custom,
          title: pizza.title,
          description: pizza.description,
          sizeSelected: size,
          priceSelected: price,
          image: pizza.image,
          quantity: 1,
        };
        this.pizzaCustomized.push(pizzaToCustomize);
        console.log("pizza to customize", this.pizzaCustomized);
        return;
      }

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
        customize: pizza.custom,
        description: pizza.description,
        sizeSelected: size,
        priceSelected: price,
        image: pizza.image,
        toppings: pizza.toppings,
        quantity: 1,
      };
      this.pizzasInCart.push(pizzaToCart);
      this.count++;
      // console.log("objeto to cart", this.pizzasInCart);
    },

    addCustomToCart(pizza) {
      this.pizzasInCart.push(pizza);
    },

    removePizzaFromCart(pizza) {
      if (pizza.customize === true) {
        this.pizzaCustomized.splice(pizza, 1);
      } else {
        this.pizzasInCart.splice(pizza, 1);
        this.count--;
      }
    },

    pizzaAddQuantityInStore(pizza) {
      for (let i = 0; i < this.pizzasInCart.length; i++) {
        if (this.pizzasInCart[i]._id === pizza._id) {
          this.pizzasInCart[i].quantity++;
          this.count++;
          this.calcTotalPricePizzaCustom(pizza._id);
        }
      }
    },
    pizzaCustomAddQuantityInStore(pizza) {
      for (let i = 0; i < this.pizzaCustomized.length; i++) {
        if (this.pizzaCustomized[i]._id === pizza._id) {
          this.pizzaCustomized[i].quantity++;
          this.count++;
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
    calcTotalPricePizzaCustom(id, totalPriceIngredientAdded) {
      var totalPriceCustom = 0.0;

      for (let i = 0; i < this.pizzaCustomized.length; i++) {
        if (this.pizzaCustomized[i]._id === id) {
          totalPriceCustom =
            (this.pizzaCustomized[i].priceSelected +
              totalPriceIngredientAdded) *
            this.pizzaCustomized[i].quantity;
        }
      }
      return totalPriceCustom;
    },

    pizzaRemoveQuantityInStore(pizza) {
      if (pizza.customize === true) {
        for (let i = 0; i < this.pizzaCustomized.length; i++) {
          if (this.pizzaCustomized[i]._id === pizza._id) {
            this.pizzaCustomized[i].quantity--;
            this.count--;
          }
        }
      } else {
        for (let i = 0; i < this.pizzasInCart.length; i++) {
          if (this.pizzasInCart[i]._id === pizza._id) {
            this.pizzasInCart[i].quantity--;
            this.count--;
          }
        }
      }
    },
  },
});
