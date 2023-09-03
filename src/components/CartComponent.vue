<template>
  <section class="review-order">
    <div class="container">
      <div class="box-title-checkout">
        <div class="title">
          <h1>CHECKOUT</h1>
        </div>
      </div>
      <PizzaItem
        v-for="pizzaItemInCart in pizzaInCart"
        :key="pizzaItemInCart.id"
        :pizza="pizzaItemInCart"
      ></PizzaItem>
      <!-- <h1>this is cart component:</h1>
      {{ listPizzaSelected }} -->
      <div class="box-total-price">
        <div class="total-price">
          <div class="total-price-title">Total:</div>
          <div class="total-price-value">
            ${{ pizzaStore.getTotalPriceCart() }}
            <!-- {{ pizzaStore.getTotalPriceCart }} -->
          </div>
        </div>
      </div>
      <div class="box-btn-checkout">
        <div class="btn" @click="placeOrder(pizzaInCart)">Place Order</div>
      </div>
    </div>
  </section>
</template>

<script>
import PizzaItem from "./PizzaItem.vue";
import { usePizzaStore } from "@/store/PizzaStore";

export default {
  name: "CartComponent",
  data() {
    return {
      totalPrice: null,
    };
  },
  components: {
    PizzaItem,
  },
  setup() {
    const pizzaStore = usePizzaStore();
    // const listOfPizzas = pizzaStore.getPizzas;
    const pizzaInCart = pizzaStore.getPizzasInCart;

    // pizzaStore.fetchPizza();
    return { pizzaStore, pizzaInCart };
  },
  methods: {
    placeOrder(pizzaInCart) {
      console.log("PLACE ORDER", pizzaInCart);

      var orderToDb = {
        _id: null,
        //https://singhak.in/create-n-length-random-number-in-javascript/
        orderNumber: Math.floor(
          Math.pow(10, 3 - 1) +
            Math.random() * (Math.pow(10, 3) - Math.pow(10, 3 - 1) - 1)
        ),
        pizza: this.pizzaStore.distributionPizzasinOrder(),
        date: new Date().toISOString(),
        totalprice: this.pizzaStore.getTotalPriceCart(),
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
          // alert("Order placed successfully!");
          return response.text();
        })
        .then((data) => {
          console.log(data);
          this.pizzaStore.cleanCartOrded();
          this.$router.push("/orderplaced/" + orderToDb.orderNumber);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
