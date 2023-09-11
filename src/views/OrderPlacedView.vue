<template>
  <div class="container">
    <TopBarCart></TopBarCart>
    <div class="box-order-placed">
      <div class="title">
        <h1>Order Placed</h1>
        <p>
          Your order number is: <span> {{ $route.params.id }}</span>
        </p>
        <div class="delivery-img">
          <img
            src="/web-framework/582-app-order-pizza/img/delivery.gif"
            alt="Gif delivery"
          />
        </div>
      </div>
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
