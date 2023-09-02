<template>
  <!-- <BtnPreviewOrder :order="previewOrders"></BtnPreviewOrder> -->
  <div class="container">
    <div class="box-btn-previewOrder">
      <div class="btn-previewOrder">
        <div class="btn" @click="sendPreviewOrderToCart(previewOrders)">
          PREVIEW ORDER
        </div>
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
  setup() {
    const orderStore = useOrdersStore();
    const previewOrders = orderStore.getPreviewOrders;
    const pizzaStore = usePizzaStore();
    return { orderStore, previewOrders, pizzaStore };
  },

  methods: {
    sendPreviewOrderToCart(previewOrders) {
      console.log("order AQUIIII 1", previewOrders);
      var pizzaInCart = this.pizzaStore.addPreviewOrderInCart(previewOrders);
      console.log("order AQUIIII 2", previewOrders);
      this.$router.push("/cart/" + pizzaInCart);
    },
  },
  //   components: {
  //     BtnPreviewOrder,
  //   },
  created() {
    this.orderStore.previewOrder = [];

    fetch("http://localhost:3000/previewOrder")
      .then((response) => response.json())
      .then((json) => {
        console.log("JSONNNN", json);
        // this.pizzaStore.setPizza(json);
        for (let order of json) {
          this.orderStore.addPreviewOrder(order);
          console.log("order do FETCH", order);
        }
      });
  },
};
</script>
