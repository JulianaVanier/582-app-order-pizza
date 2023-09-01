<template>
  <section class="review-order">
    <div class="container">
      <PizzaItem
        v-for="pizzaItemInCart in pizzaInCart"
        :key="pizzaItemInCart.id"
        :pizza="pizzaItemInCart"
      ></PizzaItem>
      <!-- <h1>this is cart component:</h1>
      {{ listPizzaSelected }} -->
      <div class="box-total-price">
        <div class="total-price">
          <div class="total-price-title">Total</div>
          <div class="total-price-value">
            {{ pizzaStore.getTotalPriceCart() }}
            <!-- {{ pizzaStore.getTotalPriceCart }} -->
          </div>
        </div>
      </div>
      <div class="box-btn-checkout">
        <div class="btn">Place Order</div>
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
};
</script>

<style lang="scss" scoped></style>
