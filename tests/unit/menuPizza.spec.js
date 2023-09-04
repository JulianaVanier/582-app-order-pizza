// import { createTestingPinia } from '@pinia/testing';
// import { mount } from '@vue/test-utils';
// import { shallowMount } from "@vue/test-utils";
// import { usePizzaStore } from '@/store/PizzaStore';
// import MenuPizza from "@/components/MenuPizza.vue";

// const wrapper = mount(MenuPizza, {
//     global: {
//       plugins: [createTestingPinia()],
//     },
//   })
// console.log("WRAPER", wrapper);
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

// store.addPizza(pizza);
// expect(store.getPizzas).toHaveBeenCalledTimes(1)

// actions are stubbed by default, meaning they don't execute their code by default.
// See below to customize this behavior.
// store.someAction()

// expect(store.someAction).toHaveBeenCalledTimes(1)
// expect(store.someAction).toHaveBeenLastCalledWith()

// describe("MenuPizza.vue", async () => {
//     // beforeEach(() => {
//     //     setActivePinia(createPinia());
//     //   });

//   it("loop displaying pizza's", () => {
//     const wrapper = shallowMount(MenuPizza);
//     const pizzas = wrapper.findAll(".pizza");

//     expect(pizzas.length).toBe(3);
//   });

// //   it("emit event when clicked Add to Cart", () => {});
// });
