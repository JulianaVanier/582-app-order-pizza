<template>
  <div class="container">
    <TopBarCart></TopBarCart>
    <CartComponent></CartComponent>
  </div>
</template>

<script>
import { usePizzaStore } from "@/store/PizzaStore";
import CartComponent from "@/components/CartComponent.vue";
import TopBarCart from "@/components/TopBarCart.vue";

export default {
  name: "CartView",
  data() {
    return {
      itemsCart: [],
    };
  },
  components: {
    CartComponent,
    TopBarCart,
  },
  setup() {
    const pizzaCart = usePizzaStore();
    return { pizzaCart };
  },
};
</script>

<style lang="scss" scoped></style>
