<template>
  <!-- <BtnPreviewOrder :order="previewOrders"></BtnPreviewOrder> -->
  <div class="container">
    <div class="box-input">
      <div class="input-order-number">
        <label for="orderNumber">Order Number:</label>
        <input type="text" id="orderNumber" v-model="orderNumber" required />
        <button class="btn" @click="findOrderNumber()">PREVIEW ORDER</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useOrdersStore } from "@/store/OrdersStore";
// import BtnPreviewOrder from "./BtnPreviewOrder.vue";
import { usePizzaStore } from "@/store/PizzaStore";

export default {
  name: "PreviewOrder",
  data() {
    return {
      orderNumber: "",
    };
  },
  setup() {
    const orderStore = useOrdersStore();
    const previewOrders = orderStore.getPreviewOrders;
    const pizzaStore = usePizzaStore();
    return { orderStore, previewOrders, pizzaStore };
  },

  methods: {
    findOrderNumber() {
      console.log("para VER ORDERRRRRRRRR", this.orderNumber);

      fetch("http://localhost:3000/previewOrder/" + this.orderNumber)
        .then((response) => response.json())
        .then((json) => {
          this.pizzaStore.clearCart();

          console.log("JSONNNN", json);
          for (let pizza of json.pizza) {
            if (pizza.custom === true) {
              this.pizzaStore.addCustomToCart(pizza);
            } else {
              this.pizzaStore.addPizzaToCart(
                pizza,
                pizza.priceSelected,
                pizza.sizeSelected
              );
            }

            console.log("order do FETCH", pizza);
          }
        });
    },
  },
};
</script>
