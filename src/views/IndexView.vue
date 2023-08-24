<template>
  <HeaderApp />
  <MenuPizza />
  <!-- <HeaderApp></HeaderApp>
  <MenuPizza></MenuPizza> -->
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import MenuPizza from "@/components/MenuPizza.vue";
// import HeaderApp from "./components/HeaderApp.vue";
// import MenuPizza from "./components/MenuPizza.vue";
// import CartView from "./views/CartView.vue";

export default {
  name: "IndexView",
  components: {
    HeaderApp,
    MenuPizza,
  },
};
</script>
