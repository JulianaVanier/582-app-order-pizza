<template>
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

      fetch(
<<<<<<< HEAD
        "//juliana71.web582.com/web-framework/582-app-order-pizza/previewOrder/" +
=======
        "https://bookish-rotary-phone-j6j6g76r445255vv-3000.app.github.dev/previeworder/" +
>>>>>>> bf96e734e39c899e04c5f49c8533e6c8d7d71dec
          this.orderNumber
      )
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
            this.$router.push("/cart/" + pizza.id);
            console.log("order do FETCH", pizza);
          }
        });
    },
  },
};
</script>
