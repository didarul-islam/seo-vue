import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue")
  },
  {
    path: "/what-we-do",
    name: "WhatWeDo",
   
    component: () =>
      import("../views/WhatWeDo.vue")
  },
  {
    path: "/faqs",
    name: "FAQs",
   
    component: () =>
      import("../views/FAQs.vue")
  },
  {
    path: "/seo",
    name: "seo",
   
    component: () =>
      import("../views/SEO.vue")
  }

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
