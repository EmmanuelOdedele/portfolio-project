import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
import Resume from "../views/Resume.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
