<template>
  <!-- <h3>{{ pizzaStore.getPizzas[0] }}</h3> -->
  <div class="box-menu-pizza">
    <h2>{{ pizza.title }}</h2>
    <img :src="pizza.image" alt="Pizza image" />
    <p>{{ pizza.description }}</p>

    <!-- Button display pop up to select size of pizza -->
    <div
      class="btn"
      v-if="pizza.custom === false"
      @click="selectSizeRun(pizza._id)"
    >
      Add to cart
    </div>

    <!-- Condition to show customize button for Custom Pizza - go to new View -->
    <div v-else-if="pizza.custom === true">
      <router-link :to="'/customize/' + pizza._id">
        <div class="btn">Customize</div>
      </router-link>
    </div>

    <!-- Condition to show options when pizza is in the cart -->
    <div v-else>
      <div class="box-features-cart">
        <div class="btn" @click="removePizzaFromCart(pizza)">Remove</div>
        <div class="qt-order-item">
          <div class="qt-btn" @click="pizzaAddQuantity(pizza)">+</div>
          <div class="qt-number">{{ pizza.quantity }}</div>
          <div class="qt-btn" @click="pizzaRemoveQuantity(pizza)">-</div>
        </div>
        <p>Item total: {{ pizza.priceSelected }}</p>
      </div>
    </div>

    <!-- Popup to select size of pizza -->
    <div class="select-size" :class="[selectSize ? 'appears' : 'disappears']">
      <p @click="selectSize = false">X</p>
      <h3>Add Item</h3>
      <div class="select-size-box">
        <div class="size" @click="sizeSelected('small', pizza.size.small)">
          <img src="/img/pizza-icon.png" alt="Icon pizza" />
          <p>Small</p>
        </div>
        <div class="size" @click="sizeSelected('medium', pizza.size.medium)">
          <img src="/img/pizza-icon.png" alt="Icon pizza" />
          <p>Medium</p>
        </div>
        <div class="size" @click="sizeSelected('large', pizza.size.large)">
          <img src="/img/pizza-icon.png" alt="Icon pizza" />
          <p>Large</p>
        </div>
        <div class="size" @click="sizeSelected('xlarge', pizza.size.xlarge)">
          <img src="/img/pizza-icon.png" alt="Icon pizza" />
          <p>X-Large</p>
        </div>
      </div>

      <!-- Display value size selected -->
      <p>{{ selectedSizePrice }}</p>
      <!-- -- -->

      <div class="btn" @click="sendingToCart(pizza)">Add to cart</div>
    </div>
  </div>
</template>

<script>
import { usePizzaStore } from "@/store/PizzaStore";

export default {
  name: "PizzaItem",
  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectSize: false,
      selectedSizePrice: null,
      selectedSize: null,
    };
  },
  setup() {
    const pizzaStore = usePizzaStore();
    return { pizzaStore };
  },
  methods: {
    selectSizeRun() {
      // console.log(id);
      this.selectSize = !this.selectSize;
      this.selectedSizePrice = null;
    },
    sizeSelected(size, price) {
      console.log("size", size);
      console.log("price", price);
      // console.log("price", price);
      this.selectedSizePrice = price;
      this.selectedSize = size;
    },
    sendingToCart(pizza) {
      // var selectedPrice = this.selectedSizePrice;
      this.pizzaStore.addPizzaToCart(
        pizza,
        this.selectedSizePrice,
        this.selectedSize
      );
      this.selectSize = false;
      this.$router.push("/cart/" + pizza._id);
    },
    removePizzaFromCart(pizza) {
      this.pizzaStore.removePizzaFromCart(pizza);
    },
    pizzaAddQuantity(pizza) {
      this.pizzaStore.pizzaAddQuantityInStore(pizza);
    },
    pizzaRemoveQuantity(pizza) {
      this.pizzaStore.pizzaRemoveQuantityInStore(pizza);
    },
  },
  // components: {
  //   CheckoutView,
  // },
};
</script>

<style lang="scss" scoped>
.disappears {
  display: none;
}
.appears {
  display: block;
}
</style>
