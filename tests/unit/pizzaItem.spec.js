import { shallowMount } from "@vue/test-utils";
import PizzaItem from "@/components/PizzaItem.vue";

describe("PizzaItem.vue", () => {
  it("display Ingredient in Pizza when ingredient._id = true", () => {});

  it("display Ingredient in Pizza when ingredient._id = false", () => {});
  it("renders and display props tasks when passed", () => {
    const pizza = {
      id: 1,
      custom: false,
      title: "Pizza 1",
      description: "Pizza 1 description",
      size: {
        small: 10,
        medium: 20,
        large: 30,
      },
      image: "pizza1.png",
    };
    const wrapper = shallowMount(PizzaItem, {
      props: { pizza },
    });
    expect(wrapper.find("h2").text()).toBe(pizza.title);
  });

  it("display btn Add to cart when pizza.cutom = false && displayBtnCart===true", () => {
    const pizza = {
      id: 1,
      custom: false,
      title: "Pizza 1",
      description: "Pizza 1 description",
      size: {
        small: 10,
        medium: 20,
        large: 30,
      },
      image: "pizza1.png",
    };
    const wrapper = shallowMount(PizzaItem, {
      props: { pizza, displayBtnCart: true },
    });
    expect(wrapper.find(".btn").exists()).toBe(true);
  });

  it("display btn customize when pizza.cutom = true && this.$route.name === 'index'", () => {
    const pizza = {
      id: 1,
      custom: true,
      title: "Pizza 1",
      description: "Pizza 1 description",
      size: {
        small: 10,
        medium: 20,
        large: 30,
      },
      image: "pizza1.png",
    };
    const wrapper = shallowMount(PizzaItem, {
      props: { pizza },
    });
    expect(wrapper.find(".btn").exists()).toBe(true);
  });

  it("renders props.pizza when passed", () => {
    const pizza = {
      id: 1,
      custom: false,
      title: "Pizza 1",
      description: "Pizza 1 description",
      size: {
        small: 10,
        medium: 20,
        large: 30,
      },
      image: "pizza1.png",
    };
    const wrapper = shallowMount(PizzaItem, {
      props: { pizza },
    });
    expect(wrapper.find("h2").text()).toBe(pizza.title);
  });
  it("toggles selectSize property when selectSizeRun method is called", async () => {
    const pizza = {
      id: 1,
      custom: false,
      title: "Pizza 1",
      description: "Pizza 1 description",
      size: {
        small: 10,
        medium: 20,
        large: 30,
      },
      image: "pizza1.png",
    };

    const wrapper = shallowMount(PizzaItem, {
      props: { pizza, selectSize: false },
    });

    expect(wrapper.vm.selectSize).toBe(false);

    await wrapper.vm.selectSizeRun("1");

    expect(wrapper.vm.selectSize).toBe(true);
  });
});

// describe("PizzaItem.vue", () => {
//     it("renders and display props tasks when passed", () => {
//         const wrapper = mount(PizzaItem, {
//             global: {
//               plugins: [createTestingPinia()],
//             },
//           })
//         expect(wrapper.find("h2").text()).toBe(pizza.title);
//     }
//     );
// });

// const store = usePizzaStore() // uses the testing pinia!

// const pizza = {
//     id: 1,
//     custom: false,
//     title: "Pizza 1",
//     description: "Pizza 1 description",
//     size:{
//         small: 10,
//         medium: 20,
//         large: 30,
//     },
//     image: "pizza1.png",
// };

// sendingToCart(pizza) {
//     // returning the id of the pizza to customize to function sendingToCart in PizzaItem
//     store.addPizzaToCart(pizza);
// }

// expect(store.addPizzaToCart).toHaveBeenCalled();
