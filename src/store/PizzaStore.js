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
    // Receiving fetch
    addPizza(pizza) {
      this.pizzas.push(pizza);
    },
    // -- --------------------------------------------------------------------------- --

    addPizzaToCart(pizza, price, size) {
      // Creating custom objetct to add to cart
      if (pizza.custom === true) {
        var pizzaToCustomize = {
          _id: pizza._id,
          id: Date.now(),
          //https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13
          customize: pizza.custom,
          title: pizza.title,
          description: pizza.description,
          sizeSelected: size,
          priceSelected: price,
          image: pizza.image,
          ingredient: [],
          quantity: 1,
        };

        this.pizzaCustomized.push(pizzaToCustomize);
        // returning the id of the pizza to customize to function sendingToCart in PizzaItem
        return pizzaToCustomize.id;
      }
      // -- --------------------------------------------------------------------------- --

      // REGULAR PIZZA
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
      // -- --------------------------------------------------------------------------- --

      // Creating regular pizza objetct to add to cart
      var pizzaToCart = {
        _id: pizza._id,
        title: pizza.title,
        customize: pizza.custom,
        description: pizza.description,
        sizeSelected: size,
        priceSelected: price,
        image: pizza.image,
        ingredient: pizza.ingredient,
        quantity: 1,
      };
      this.pizzasInCart.push(pizzaToCart);
      this.count++;
      // console.log("objeto to cart", this.pizzasInCart);
    },
    // -- --------------------------------------------------------------------------- --

    addCustomToCart(pizza) {
      this.pizzasInCart.push(pizza);
      this.count++;
    },

    removePizzaFromCart(pizza) {
      // if (pizza.customize === true) {
      //   this.pizzaCustomized.splice(pizza, 1);
      // } else {
      //   this.pizzasInCart.splice(pizza, 1);
      //   this.count--;
      // }

      this.pizzasInCart.splice(pizza, 1);
      this.count--;
    },

    pizzaAddQuantityInStore(pizza) {
      for (let i = 0; i < this.pizzasInCart.length; i++) {
        console.log("pizzasInCart", this.pizzasInCart);
        console.log("pizza", pizza);
        if (this.pizzasInCart[i]._id === pizza._id) {
          this.pizzasInCart[i].quantity++;
          this.count++;
          this.calcTotalPricePizzaCustom(pizza);
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
      return totalPrice.toFixed(2);
    },
    calcTotalPricePizzaCustom(pizza) {
      // console.log("CALCULANDO", pizza);
      // for (let i = 0; i < this.pizzaInCart.length; i++) {
      //   if (this.pizzasInCart[i].id === pizza.id || pizza.ingredient == null) {
      //     return pizza.priceSelected;
      //   }
      // }

      var totalPriceCustom = 0.0;

      for (let i = 0; i < this.pizzasInCart.length; i++) {
        if (this.pizzasInCart[i].id === pizza.id) {
          totalPriceCustom =
            this.pizzasInCart[i].priceSelected * this.pizzasInCart[i].quantity;
        }
      }
      return totalPriceCustom.toFixed(2);
      // for (let i = 0; i < this.pizzaCustomized.length; i++) {
      //   if (this.pizzaCustomized[i]._id === id) {
      //     totalPriceCustom =
      //       (this.pizzaCustomized[i].priceSelected +
      //         totalPriceIngredientAdded) *
      //       this.pizzaCustomized[i].quantity;
      //   }
      // }
      // return totalPriceCustom;
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
    getTotalPriceCart() {
      var totalPrice = 0.0;
      console.log("HELLO", this.pizzasInCart);
      for (let i = 0; i < this.pizzasInCart.length; i++) {
        console.log("HELLO 2", this.pizzasInCart[i]);
        totalPrice +=
          this.pizzasInCart[i].priceSelected * this.pizzasInCart[i].quantity;
      }
      return totalPrice.toFixed(2);
    },

    distributionPizzasinOrder() {
      var pizzasInOrder = [];
      for (let i = 0; i < this.pizzasInCart.length; i++) {
        pizzasInOrder.push(this.pizzasInCart[i]);
        // if (this.pizzasInCart[i].customize === false) {
        //   pizzaInCart.push(this.pizzasInCart[i]);
        // }
      }
      return pizzasInOrder;
    },

    placeOrder(pizzaInCart) {
      console.log("PLACE ORDER", pizzaInCart);

      var orderToDb = {
        _id: null,
        pizza: this.distributionPizzasinOrder(),
        // [
        //   {
        //     id: pizzaInCart._id,
        //     size: pizzaInCart.sizeSelected,
        //     quantity: pizzaInCart.quantity,
        //     price: pizzaInCart.priceSelected,
        //     ingredient: pizzaInCart.ingredient,
        //   },
        // ],
        date: new Date().toISOString(),
        totalprice: this.getTotalPriceCart(),
      };

      console.log("ORDER TO DB", orderToDb);

      fetch("http://localhost:3000/placeorder", {
        method: "POST",
        body: JSON.stringify(orderToDb),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response);
          alert("Order placed successfully!");
          return response.text();
        })
        .then((data) => {
          console.log(data);
        });
    },
  },
});
