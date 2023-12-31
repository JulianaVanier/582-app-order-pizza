import { defineStore } from "pinia";

export const useOrdersStore = defineStore("OrdersStore", {
  state: () => ({
    previewOrders: [],
  }),
  getters: {
    getPreviewOrders: (state) => state.previewOrders,
  },
  setup() {
    return {
      pizzaStore: useOrdersStore(),
    };
  },
  actions: {
    addPreviewOrder(order) {
      this.pizzaStore.addPizzaToCart(order);
      console.log("previewOrders", this.previewOrders);
    },
  },
});
