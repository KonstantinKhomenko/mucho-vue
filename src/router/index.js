import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/UsersList.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/SearchUser.vue"),
  },
  {
    path: "/details",
    name: "details",
    component: () => import("../views/Details.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
