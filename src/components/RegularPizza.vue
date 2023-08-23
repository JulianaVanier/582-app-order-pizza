<template>
  <section class="menu-pizza">
    <div class="container">
      <div v-for="pizzaItem in pizzaStore.getPizza" :key="pizzaItem.id">
        <div class="box-menu-pizza">
          <h2>{{ pizzaItem.title }}</h2>
          <p><img :src="pizzaItem.image" alt="Pizza image" /></p>
          <p>{{ pizzaItem.description }}</p>
          <div
            class="btn"
            v-if="pizzaItem.custom === false"
            @click="selectSizeRun(pizzaItem._id)"
          >
            Add to cart
          </div>
          <div v-else class="btn">Customize</div>
        </div>
      </div>
      <!-- <div
        class="select-size"
        :class="['box', selectSize ? 'appears' : 'disappears']"
      >
        <h3>Add Item</h3>
        <div class="select-size-box">
          <div class="size">
            <img src="/img/pizza-icon.png" alt="Icon pizza" />
            <p>Small</p>
            <p></p>
          </div>
          <div class="size">
            <img src="/img/pizza-icon.png" alt="Icon pizza" />
            <p>Medium</p>
            <p></p>
          </div>
          <div class="size">
            <img src="/img/pizza-icon.png" alt="Icon pizza" />
            <p>Large</p>
            <p></p>
          </div>
          <div class="size">
            <img src="/img/pizza-icon.png" alt="Icon pizza" />
            <p>X-Large</p>
            <p></p>
          </div>
        </div>
        <div class="btn">Add to cart</div>
      </div> -->
    </div>
  </section>
</template>

<script>
import { usePizzaStore } from "@/store/PizzaStore";
// import { ref } from "vue";

export default {
  name: "RegularPizza",
  data() {
    return {
      selectSize: false,
    };
  },
  setup() {
    const pizzaStore = usePizzaStore();

    // pizzaStore.fetchPizza();
    return { pizzaStore };
  },
  created() {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        for (let pizza of json) {
          this.pizzaStore.setPizza(pizza);
          // console.log(pizza);
        }
      });
  },
  methods: {
    selectSizeRun(id) {
      console.log(id);
      this.selectSize = !this.selectSize;
    },
  },
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
