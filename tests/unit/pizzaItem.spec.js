// import { shallowMount } from "@vue/test-utils";
// import PizzaItem from "@/components/PizzaItem.vue";

// describe("PizzaItem.vue", () => {
//     it("renders props.pizza when passed", () => {
//         const pizza = {
//             id: 1,
//             custom: false,
//             title: "Pizza 1",
//             description: "Pizza 1 description",
//             size:{
//                 small: 10,
//                 medium: 20,
//                 large: 30,
//             },
//             image: "pizza1.png",
//         };
//         const wrapper = shallowMount(PizzaItem, {
//             props: { pizza },
//         });
//         expect(wrapper.find("h2").text()).toBe(tasks.title);
//     });
//     it('toggles selectSize property when selectSizeRun method is called', async () => {
//         const pizza = {
//             id: 1,
//             custom: false,
//             title: "Pizza 1",
//             description: "Pizza 1 description",
//             size:{
//                 small: 10,
//                 medium: 20,
//                 large: 30,
//             },
//             image: "pizza1.png",
//         };

//         const wrapper = shallowMount(PizzaItem, {
//             props: { pizza, selectSize: false } 
            
//         });
    
//         expect(wrapper.vm.selectSize).toBe(false);
    
//         await wrapper.vm.selectSizeRun('1');
    
//         expect(wrapper.vm.selectSize).toBe(true);
//       });
// });
