import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`);
}

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "main",
      component: lazyLoad("Login"),
    },
    {
      path: "/home",
      name: "Home",
      component: lazyLoad("Home"),
    },
    {
      path: "/login",
      redirect: "/home",
      name: "Login",
      component: lazyLoad("Login"),
    },
    {
      path: "/vacinas",
      name: "Vacinas",
      component: lazyLoad("Vacinas"),
    },
    {
      path: "/pacientes",
      name: "Pacientes",
      component: lazyLoad("Pacientes"),
    },
    {
      path: "/registro",
      name: "Registro",
      component: lazyLoad("Registro"),
    },
    {
      path: "/vacinas-form",
      name: "Vacinas-form",
      component: lazyLoad("Vacinas-form"),
    },
    {
      path: "/pacientes-form",
      name: "Pacientes-form",
      component: lazyLoad("Pacientes-form"),
    },
    {
      path: "/registro-form",
      name: "Registro-form",
      component: lazyLoad("Registro-form"),
    },
    {
      path: "/segunda-dose",
      name: "SegundaDose",
      component: lazyLoad("SegundaDose"),
    },
    {
      path: "/novaconta",
      name: "NovaConta",
      component: lazyLoad("NovaConta"),
    },
  ],
});
