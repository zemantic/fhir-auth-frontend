import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ClientView from "../views/ClientView.vue";
import DashboardView from "@/views/DashboardView.vue";
import { KeyStore } from "@/store/keyStore";
import FhirServerView from "@/views/FhirServerView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dashboard/client/create",
      name: "dashboard",
      component: ClientView,
    },
    {
      path: "/dashboard/client/:id",
      name: "clientEdit",
      component: ClientView,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: DashboardView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/dashboard/fhir-server/register",
      name: "FhirRegister",
      component: FhirServerView,
    },
    {
      path: "/dashboard/fhir-server/:id",
      name: "FhirServerEdit",
      component: FhirServerView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const keyStore = KeyStore();
  const tokenCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  let authenticated = false;

  if (!tokenCookie) {
    authenticated = false;
  } else {
    authenticated = true;
    keyStore.setKey(tokenCookie);
  }

  if (to.name !== "Login" && !authenticated) next({ name: "Login" });
  else next();
});

export default router;
