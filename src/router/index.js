import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const privateRoute = (to, from, next) => {
  console.log("isAuthenticated:" + store.state.user.isAuthenticated);
  if (!store.state.user.isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
};

export default new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "@/components/Login.vue")
      //beforeEnter: privateRoute
    },
    {
      path: "/create-account",
      name: "create-account",
      component: () =>
        import(/* webpackChunkName: "create-account" */ "@/components/CreateAccount.vue")
      //beforeEnter: privateRoute
    },
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/components/Home.vue"),
      props: true
      //beforeEnter: privateRoute
    },
    {
      path: "/home-detail",
      name: "home-detail",
      component: () =>
        import(/* webpackChunkName: "home-detail" */ "@/components/HomeDetail.vue"),
      props: true
      //beforeEnter: privateRoute
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/components/About.vue"),
      props: true
    },
    {
      path: "*",
      name: "NotFound",
      component: () =>
        import(/* webpackChunkName: "notFound" */ "@/components/NotFound.vue")
    }
  ]
});
