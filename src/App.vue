<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import Vacinas from "./views/Vacinas.vue";
import Pacientes from "./views/Pacientes.vue";
import Registro from "./views/Registro.vue";

export default {
  name: "App",
  views: {
    Login,
    Home,
    Vacinas,
    Pacientes,
    Registro,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
