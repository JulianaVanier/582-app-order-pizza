<template>
  <section class="menu-pizza">
    <div class="container">
      <div v-for="pizzaItem in pizzaList" :key="pizzaItem.id">
        <div v-if="pizzaItem.custom === false" class="box-menu-pizza">
          <h2>{{ pizzaItem.title }}</h2>
          <p><img :src="pizzaItem.image" alt="Pizza image" /></p>
          <p>{{ pizzaItem.description }}</p>
          <!-- <p>Size:</p>
          <p>Small: {{ pizzaItem.size.small }}</p>
          <p>Medium: {{ pizzaItem.size.medium }}</p>
          <p>Large: {{ pizzaItem.size.large }}</p>
          <p>X-Large: {{ pizzaItem.size.xlarge }}</p> -->
          <div class="btn">Add to cart</div>
        </div>
      </div>
    </div>
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
    console.log("olha aqui", pizzaStore.pizza);
    return { pizzaList: pizzaStore.pizza };
  },
};
</script>

<style lang="scss" scoped></style>
