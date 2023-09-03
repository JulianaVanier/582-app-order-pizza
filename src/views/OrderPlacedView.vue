<template>
  <TopBarCart></TopBarCart>
  <div class="box-order-placed">
    <div class="title">
      <h1>Order Placed</h1>
      Your order number is:
      {{ $route.params.id }}
      <br />
      <br />
      <br />
      <img src="/img/delivery.gif" alt="Gif delivery" />
    </div>
  </div>
</template>

<script>
import TopBarCart from "@/components/TopBarCart.vue";

export default {
  name: "OrderPlaced",
  components: {
    TopBarCart,
  },
};
</script>

<style lang="scss" scoped></style>
