<template>
  <!-- <h3>{{ pizzaStore.getPizzas[0] }}</h3> -->
  <div class="box-menu-pizza">
    <h2>{{ pizza.title }}</h2>
    <img :src="pizza.image" alt="Pizza image" />
    <p>{{ pizza.description }}</p>
    <div
      class="btn"
      v-if="pizza.custom === false"
      @click="selectSizeRun(pizza._id)"
    >
      Add to cart
    </div>
    <div v-else class="btn">Customize</div>
    <div class="select-size" :class="[selectSize ? 'appears' : 'disappears']">
      <p @click="selectSize = false">X</p>
      <h3>Add Item</h3>
      <div class="select-size-box">
        <div class="size" @click="sizeSelected(pizza.size.small)">
          <img src="/img/pizza-icon.png" alt="Icon pizza" />
          <p>Small</p>
        </div>
        <div class="size" @click="sizeSelected(pizza.size.medium)">
          <img src="/img/pizza-icon.png" alt="Icon pizza" />
          <p>Medium</p>
        </div>
        <div class="size" @click="sizeSelected(pizza.size.large)">
          <img src="/img/pizza-icon.png" alt="Icon pizza" />
          <p>Large</p>
        </div>
        <div class="size" @click="sizeSelected(pizza.size.xlarge)">
          <img src="/img/pizza-icon.png" alt="Icon pizza" />
          <p>X-Large</p>
        </div>
      </div>
      <p>{{ selectedSizePrice }}</p>
      <router-link :to="'/checkout/' + pizza._id">
        <div class="btn">Add to cart</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { usePizzaStore } from "@/store/PizzaStore";
// import CheckoutView from "@/views/CheckoutView.vue";

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
    };
  },
  setup() {
    const pizzaStore = usePizzaStore();

    // pizzaStore.fetchPizza();
    return { pizzaStore };
  },
  methods: {
    selectSizeRun(id) {
      console.log(id);
      this.selectSize = !this.selectSize;
    },
    sizeSelected(size) {
      this.selectedSizePrice = size;
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
