// import { shallowMount } from "@vue/test-utils";
import TopBarCart from "@/components/TopBarCart.vue";
// import { shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
// import { usePizzaStore } from '@/store/PizzaStore';

describe("TopBarCart.vue", () => {
  it("check if component is rendered", () => {
    const wrapper = mount(TopBarCart, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    expect(wrapper.getComponent({ name: "TopBarCart" }).exists()).toBeTruthy();
  });
});

// describe("TopBarCart.vue", () => {
//   it("display count ", () => {

//   });
// });
