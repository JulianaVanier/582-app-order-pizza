// import { shallowMount } from "@vue/test-utils";
// import IngredientItem from "@/components/IngredientItem.vue";

// describe("IngredientItem.vue", () => {
//   it("renders props when passed", () => {
//     const wrapper = shallowMount(IngredientItem, {
//       propsData: {
//         ingredient: {
//             _id:"64e903d5752a93342434fcc6",
//             title:"Tomato",
//             price:1.99,
//             image:"/img/tomatos.avif",
//             imageCustom:"/img/tomatos-pizza.png"
//         }
//       }
//     });
//     expect(wrapper.find("h3").text()).toBe(ingredient.title);

//   });

// //   it("emit event when clicked Add", () => {});

// //   it("emit event when clicked Remove", () => {});
// });

// import { createPinia, setActivePinia, PiniaPlugin } from 'pinia';
// import { createLocalVue } from '@vue/test-utils';
// import IngredientItem from '@/components/IngredientItem.vue';
// import { createTestingPinia } from '@pinia/testing'

// const localVue = createLocalVue();
// localVue.use(PiniaPlugin);

// describe('IngredientItem.vue', () => {
//   beforeEach(() => {
//     const pinia = createPinia();
//     setActivePinia(pinia);
//   });

//   it('renders props when passed', () => {
//     const wrapper = shallowMount(IngredientItem, {
//       localVue,
//       propsData: {
//         ingredient: {
//           _id: '64e903d5752a93342434fcc6',
//           title: 'Tomato',
//           price: 1.99,
//           image: '/img/tomatos.avif',
//           imageCustom: '/img/tomatos-pizza.png',
//         },
//       },
//     });
//     expect(wrapper.find('h3').text()).toBe('Tomato'); // Corrigido o erro aqui
//   });
// });





