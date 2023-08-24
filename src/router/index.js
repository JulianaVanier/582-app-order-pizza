import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import CheckoutView from "../views/CheckoutView.vue";
import CartView from "../views/CartView.vue";
import IndexView from "../views/IndexView.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  // {
  //   path: "/checkout/:id",
  //   name: "checkout",
  //   component: CheckoutView,
  //   // props: true,
  // },

  {
    path: "/",
    name: "index",
    component: IndexView,
    // props: true,
  },
  {
    path: "/cart/:id",
    name: "cart",
    component: CartView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
