<template>
  <HeaderApp />
  <PreviewOrder />
  <MenuPizza />
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import MenuPizza from "@/components/MenuPizza.vue";
import PreviewOrder from "@/components/PreviewOrder.vue";
export default {
  name: "IndexView",
  components: {
    HeaderApp,
    MenuPizza,
    PreviewOrder,
  },
};
</script>
