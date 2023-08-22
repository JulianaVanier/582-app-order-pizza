<template>
  <section class="menu-pizza">
    <div class="container">
      <div v-for="pizzaItem in pizzaList" :key="pizzaItem.id">
        <div class="box-menu-pizza">
          <h2>{{ pizzaItem.title }}</h2>
          <p><img :src="pizzaItem.image" alt="Pizza image" /></p>
          <p>{{ pizzaItem.description }}</p>
          <!-- <p>Size:</p>
          <p>Small: {{ pizzaItem.size.small }}</p>
          <p>Medium: {{ pizzaItem.size.medium }}</p>
          <p>Large: {{ pizzaItem.size.large }}</p>
          <p>X-Large: {{ pizzaItem.size.xlarge }}</p> -->
          <div class="btn" v-if="pizzaItem.custom === false">Add to cart</div>
          <div v-else class="btn">Customize</div>
        </div>
      </div>
    </div>
  </section>
  <section class="select-size">
    <h3>Add Item</h3>
    <div class="select-size-box">
      <div class="size">
        <img src="/img/pizza-icon.png" alt="Icon pizza" />
        <p>Small</p>
      </div>
      <div class="size">
        <img src="/img/pizza-icon.png" alt="Icon pizza" />
        <p>Medium</p>
      </div>
      <div class="size">
        <img src="/img/pizza-icon.png" alt="Icon pizza" />
        <p>Large</p>
      </div>
      <div class="size">
        <img src="/img/pizza-icon.png" alt="Icon pizza" />
        <p>X-Large</p>
      </div>
    </div>
    <div class="btn">Add to cart</div>
  </section>
</template>

<script>
import { usePizzaStore } from "@/store/PizzaStore";
// import { storeToRefs } from "pinia";

export default {
  name: "RegularPizza",
  setup() {
    const pizzaStore = usePizzaStore();

    pizzaStore.fetchPizza();
    return { pizzaList: pizzaStore.pizza };
  },
};
</script>

<style lang="scss" scoped></style>
