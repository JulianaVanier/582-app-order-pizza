<template>
  <!-- <h3>{{ pizzaStore.getPizzas[0] }}</h3> -->
  <div class="box-menu-pizza">
    <h2>{{ pizza.title }}</h2>
    <div class="pizza-image">
      <img :src="pizza.image" alt="Pizza image" class="img-pizza-main" />
      <img
        v-for="ingredient in ingredientStore.getIngredients"
        :key="ingredient._id"
        v-show="ingredientStore.displayIngredient(ingredient._id)"
        :src="ingredient.imageCustom"
        alt=""
        class="ingredient"
      />
    </div>
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
      <!-- <div class="btn" @click="sentToCustomize(pizza)">Customize</div> -->
      <div class="btn" @click="selectSizeRun(pizza._id)">Customize</div>
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
        <p>Item total: {{ totalPrice }}</p>
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
import { useIngredientStore } from "@/store/IngredientStore";

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
      totalPrice: 0.0,
    };
  },
  setup() {
    const pizzaStore = usePizzaStore();
    const ingredientStore = useIngredientStore();
    return { pizzaStore, ingredientStore };
  },
  methods: {
    selectSizeRun() {
      this.selectSize = !this.selectSize;
      this.selectedSizePrice = null;
    },
    sizeSelected(size, price) {
      // console.log("size", size);
      // console.log("price", price);
      this.selectedSizePrice = price;
      this.selectedSize = size;
    },
    sendingToCart(pizza) {
      this.pizzaStore.addPizzaToCart(
        pizza,
        this.selectedSizePrice,
        this.selectedSize
      );
      this.selectSize = false;
      if (pizza.custom === true) {
        this.$router.push("/customize/" + pizza._id);
      } else {
        this.$router.push("/cart/" + pizza._id);
      }
    },

    removePizzaFromCart(pizza) {
      this.pizzaStore.removePizzaFromCart(pizza);
    },
    pizzaAddQuantity(pizza) {
      this.pizzaStore.pizzaAddQuantityInStore(pizza);
      this.totalPrice = this.pizzaStore.calcTotalPricePizzaInCart(pizza._id);
    },
    pizzaRemoveQuantity(pizza) {
      // condition to delete pizza if quantity is 1
      if (pizza.quantity === 1) {
        this.pizzaStore.removePizzaFromCart(pizza);
      }
      this.pizzaStore.pizzaRemoveQuantityInStore(pizza);
      this.totalPrice = this.pizzaStore.calcTotalPricePizzaInCart(pizza._id);
    },
    // sentToCustomize(pizza) {
    //   this.pizzaStore.addPizzaCustomize(pizza);
    //   this.$router.push("/customize/" + pizza._id);
    // },
  },
  created() {
    this.totalPrice = this.pizzaStore.calcTotalPricePizzaInCart(this.pizza._id);
    // this.toggleIngredient("64e904ad752a93342434fcc9");
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
