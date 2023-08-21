import { defineStore } from "pinia";

export const usePizzaStore = defineStore('pizza',{
  // state = data
  state: () => ({
    pizza:[]
  }),
  // getters = computed
//   getters: {
//     doubleCount() {
//       return this.count * 2;
//     },
//   },
  // actions = methods
  actions: {
    async fetchPizza() {
        try{ 
            const response = await fetch('http://localhost:3000/pizza');
            this.pizza = await response.json();
            return this.pizza;
        } catch (error) {
            console.log(error);
        }
    }
  },
});