<script>
// router.js
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: require("./views/Home"),
    meta: {
      requiresAuth: true
    }
  }
];
const router = new VueRouter({
  routes: routes
});
router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem("token");
  if (to.matched.some((record) => record.meta.requiresAuth) && (!token || token === null)) {
    next({
      path: "/login",
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
});
export default router;
</script>
