import { shallowMount } from "@vue/test-utils";
import IngredientItem from "@/components/IngredientItem.vue";

// Comment Setup first

describe("IngredientItem.vue", () => {
  it("renders props when passed", () => {
    const wrapper = shallowMount(IngredientItem, {
      propsData: {
        ingredient: {
          _id: "64e903d5752a93342434fcc6",
          title: "Tomato",
          price: 1.99,
          image: "/img/tomatos.avif",
          imageCustom: "/img/tomatos-pizza.png",
        },
      },
    });
    expect(wrapper.find("h3").text()).toBe("Tomato");
  });
});
