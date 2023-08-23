import { defineStore } from "pinia";

export const usePizzaStore = defineStore("pizzaStore", {
  // state = data
  state: () => ({
    selectSize: false,
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
        const response = await fetch("http://localhost:3000/");

        const data = await response.json();
        this.pizza = data;
        return data;
      } catch (error) {
        console.log("Error fetching pizza:", error);
      }
    },
    // selectSize() {
    //   // console.log("Size selected:", size);

    //   this.selectSize = true;
    //   console.log("Size selected:", this.selectSize);
    // },
  },
});
