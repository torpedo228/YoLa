import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import TestView from "@/views/TestView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: MainView,
    },
    meta: { transition: "slide-right" },
  },
  {
    path: "/learning-corner",
    name: "learning-corner",
    components: {
      default: () => import("@/views/learning-corner/LearningCorner.vue"),
    },
    meta: { transition: "slide-right" },
  },
  {
    path: "/learning-corner/art",
    name: "art",
    component: () => import("@/views/learning-corner/Art.vue"),
  },
  {
    path: "/test",
    name: "test",
    // this.$router.push({ name: "test" });
    // or <a href="#" @click="$router.push({ name: 'test' })">
    // or <a href="/test">
    component: TestView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
