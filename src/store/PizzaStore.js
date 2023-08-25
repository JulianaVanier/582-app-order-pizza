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
    addPizzaToCart(pizza, price, size) {
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
          // var priceFloat = parseFloat(this.pizzasInCart[i].priceSelected);
          // this.pizzasInCart[i].priceSelected = priceFloat + priceFloat;
          // console.log("pizzaAddQuantityInStore", priceFloat);
          // console.log("pizzas.sizeSelected2", this.pizzas.size.small);
          // console.log("pizzas", pizzas);
          // this.priceAddUpdate(pizza, pizzas);
        }
      }
    },
    // priceAddUpdate(pizza, pizzas) {
    //   for (let i = 0; i < this.pizzasInCart.length; i++) {
    //     if (this.pizzasInCart[i]._id === pizzas._id) {
    //       var priceFloat = parseFloat(this.pizzasInCart[i].priceSelected);
    //       var valueSizeIncrease = pizzas.size[valueSizeIncrease];
    //       this.pizzasInCart[i].priceSelected = priceFloat + valueSizeIncrease;
    //       console.log("priceFloat", priceFloat);
    //       console.log("pizzas.sizeSelected2", pizzas.size[valueSizeIncrease]);
    //       console.log("priceAddUpdate", valueSizeIncrease);
    //     }
    //   }
    // },

    pizzaRemoveQuantityInStore(pizza) {
      for (let i = 0; i < this.pizzasInCart.length; i++) {
        if (this.pizzasInCart[i]._id === pizza._id) {
          this.pizzasInCart[i].quantity--;
        }
      }
    },
  },
});
