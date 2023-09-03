// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/abele",
        name: "Abele",
        component: () =>
          import(/* webpackChunkName: "abele" */ "@/views/Abele.vue"),
      },
      {
        path: "/mumins",
        name: "Mumins",
        component: () =>
          import(/* webpackChunkName: "mumins" */ "@/views/Mumins.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
