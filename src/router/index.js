import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import MaxProfit from "@/components/MaxProfit.vue";
import Checklist from "@/components/Checklist.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home-page",
      component: Home,
      meta: {
        title: "SLA Home",
      },
    },
    {
      path: "/maxprofit",
      name: "max-profit",
      component: MaxProfit,
      meta: {
        title: "SLA Max Profit",
      },
    },
    {
      path: "/checklist",
      name: "checklist",
      component: Checklist,
      meta: {
        title: "SLA Checklist",
      },
    },
  ],
});
