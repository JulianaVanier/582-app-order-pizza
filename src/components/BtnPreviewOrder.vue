<template>
  <div class="container">
    <div class="box-btn-previewOrder">
      <div class="btn-previewOrder">
        <div class="btn" @click="previewOrder(order)">PREVIEW ORDER</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useOrdersStore } from "@/store/OrdersStore";

export default {
  name: "PreviewOrder",
  setup() {
    const orderStore = useOrdersStore();
    const previewOrders = orderStore.getPreviewOrders;
    return { orderStore, previewOrders };
  },
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  methods: {
    previewOrder(order) {
      this.pizzaStore.addPreviewOrder(order);
      this.$router.push("/cart");
    },
  },
};
</script>
