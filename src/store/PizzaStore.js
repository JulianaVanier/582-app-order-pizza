import { defineStore } from "pinia";

export const usePizzaStore = defineStore("pizzaStore", {
  // state = data
  state: () => ({
    pizza: [],
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
      try {
        const response = await fetch("http://localhost:3000/pizza");

        const data = await response.json();
        this.pizza = data;
        return data;
      } catch (error) {
        console.log("Error fetching pizza:", error);
      }
    },
  },
});
