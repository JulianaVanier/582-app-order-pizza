import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import CheckoutView from "../views/CheckoutView.vue";
import CartView from "../views/CartView.vue";
import IndexView from "../views/IndexView.vue";
import CustomPizzaView from "../views/CustomPizzaView.vue";
import OrderPlacedView from "../views/OrderPlacedView.vue";

const routes = [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

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
  {
    path: "/customize/:id",
    name: "customize",
    component: CustomPizzaView,
    props: true,
  },
  {
    path: "/orderplaced/:id",
    name: "orderplaced",
    component: OrderPlacedView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
