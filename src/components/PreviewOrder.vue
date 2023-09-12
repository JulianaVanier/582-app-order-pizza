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

      fetch(
        "https://bookish-rotary-phone-j6j6g76r445255vv-3000.app.github.dev/previeworder/" +
          this.orderNumber
      )
        .then((response) => response.json())
        .then((json) => {
          this.pizzaStore.clearCart();

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
          }
        });
    },
  },
};
</script>
