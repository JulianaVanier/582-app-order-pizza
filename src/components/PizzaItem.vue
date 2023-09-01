<template>
  <div class="box-menu-pizza">
    <h2>{{ pizza.title }}</h2>
    <div class="pizza-image">
      <img :src="pizza.image" alt="Pizza image" class="img-pizza-main" />
      <!-- --------------------------------------------------------------------------- -->
      <!-- CUSTOMIZE -->
      <!-- Looping to display ingredients in custom pizza -->
      <div class="display-ing" v-if="pizza.customize === true">
        <img
          v-for="ingredient in ingredientStore.getIngredients"
          :key="ingredient._id"
          v-show="displayIngredientInPizza(ingredient._id)"
          :src="ingredient.imageCustom"
          alt=""
          class="ingredient"
        />
      </div>
      <!-- --------------------------------------------------------------------------- -->
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
    <!-- --------------------------------------------------------------------------- -->

    <!-- Condition to show customize button for Custom Pizza - go to new View -->
    <div v-else-if="pizza.custom === true">
      <!-- <div class="btn" @click="sentToCustomize(pizza)">Customize</div> -->
      <div class="btn" @click="selectSizeRun(pizza._id)">Customize</div>
    </div>
    <!-- --------------------------------------------------------------------------- -->

    <!-- Condition to show options when pizza is in the cart -->
    <div v-else>
      <div class="box-features-cart">
        <div class="delete-pizza" @click="removePizzaFromCart(pizza)">
          <img src="/img/delete-icon.png" alt="Icon button delete" />
        </div>

        <div class="qt-order-item">
          <div class="qt-btn" @click="pizzaAddQuantity(pizza)">
            <img src="/img/add.png" alt="Icon button add" />
          </div>
          <div class="qt-number">{{ pizza.quantity }}</div>
          <div class="qt-btn" @click="pizzaRemoveQuantity(pizza)">
            <img src="/img/remove.png" alt="Icon button remove" />
          </div>
        </div>
        <div class="total-price" v-if="pizza.customize === false">
          <p>Item total: ${{ totalPrice }}</p>
        </div>
        <div class="total-price" v-else>
          <p>
            Item total: $
            {{
              pizzaStore.calcTotalPricePizzaCustom(
                pizza
                // this.ingredientStore.gettotalPriceIngredientAdded
              )
            }}
          </p>

          <!-- Button add to card in pizza custom in custom view -->
          <div class="btn" @click="sendingCustomToCart(pizza)">Add to Cart</div>
          <!-- --------------------------------------------------------------------------- -->
        </div>
      </div>
    </div>
    <!-- --------------------------------------------------------------------------- -->

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
      <!-- --------------------------------------------------------------------------- -->

      <!-- Display value size selected -->
      <p class="price-size" v-if="selectedSizePrice === null">Select a size</p>
      <p class="price-size" v-else>${{ selectedSizePrice }}</p>
      <!-- --------------------------------------------------------------------------- -->

      <!-- Button add to cart in Menu List -->
      <div class="btn" @click="sendingToCart(pizza)">Add to cart</div>
      <!-- --------------------------------------------------------------------------- -->
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
      totalPriceCustom: 0.0,
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
      var idPizza = this.pizzaStore.addPizzaToCart(
        pizza,
        this.selectedSizePrice,
        this.selectedSize
      );
      this.selectSize = false;
      // console.log("idPizza", idPizza);
      if (pizza.custom === true) {
        this.$router.push("/customize/" + idPizza);
      } else {
        this.$router.push("/cart/" + pizza._id);
      }
    },

    removePizzaFromCart(pizza) {
      this.pizzaStore.removePizzaFromCart(pizza);
    },
    pizzaAddQuantity(pizza) {
      if (pizza.customize === true) {
        this.pizzaStore.pizzaCustomAddQuantityInStore(pizza);
        this.totalPriceCustom = this.pizzaStore.calcTotalPricePizzaCustom(
          pizza._id,
          this.ingredientStore.gettotalPriceIngredientAdded
        );
      } else {
        this.pizzaStore.pizzaAddQuantityInStore(pizza);
        this.totalPrice = this.pizzaStore.calcTotalPricePizzaInCart(pizza._id);
      }
    },
    pizzaRemoveQuantity(pizza) {
      // condition to delete pizza if quantity is 1
      if (pizza.quantity === 1) {
        this.pizzaStore.removePizzaFromCart(pizza);
      }
      this.pizzaStore.pizzaRemoveQuantityInStore(pizza);

      if (pizza.customize === true) {
        this.totalPriceCustom = this.pizzaStore.calcTotalPricePizzaCustom(
          pizza._id,
          this.ingredientStore.gettotalPriceIngredientAdded
        );
      } else {
        this.totalPrice = this.pizzaStore.calcTotalPricePizzaInCart(pizza._id);
      }
      // this.totalPrice = this.pizzaStore.calcTotalPricePizzaInCart(pizza._id);
    },
    sendingCustomToCart(pizza) {
      this.pizzaStore.addCustomToCart(
        pizza,
        this.totalPriceCustom,
        this.selectedSize
      );
      // console.log("pizza", pizza);

      this.$router.push("/cart/" + pizza._id);
    },
    //https://stackoverflow.com/questions/56303878/vue-js-cant-access-to-router-parameters-from-computed-property
    displayIngredientInPizza: function (ingredientId) {
      // console.log("ID INNGREDIENT", ingredientId);
      // console.log("PIZZAAAAA", this.pizza.ingredient);
      for (let i = 0; i < this.pizza.ingredient.length; i++) {
        // console.log("TEST 1 ", typeof this.pizzaToCustomize[i].id);
        // console.log("TEST 2 ", typeof this.$route.params.id);
        if (this.pizza.ingredient[i]._id == ingredientId) {
          return true;
        }
      }
      return false;
    },
  },

  created() {
    this.totalPrice = this.pizzaStore.calcTotalPricePizzaInCart(this.pizza._id);
    this.totalPriceCustom = this.pizzaStore.calcTotalPricePizzaCustom(
      this.pizza._id,
      this.ingredientStore.gettotalPriceIngredientAdded
    );
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
