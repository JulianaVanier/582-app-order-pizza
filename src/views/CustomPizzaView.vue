<template>
  <CustomPizza></CustomPizza>
  <IngredientList></IngredientList>
</template>

<script>
import IngredientList from "@/components/IngredientList.vue";
import CustomPizza from "@/components/CustomPizza.vue";

export default {
  name: "CustomPizzaView",
  components: {
    IngredientList,
    CustomPizza,
  },
};
</script>

<style lang="scss" scoped></style>
