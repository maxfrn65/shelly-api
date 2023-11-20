import { createRouter, createWebHistory } from 'vue-router'
import Cloud from "@/pages/Cloud.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Cloud',
      component: Cloud
    }
  ]
})

export default router
