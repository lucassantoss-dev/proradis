<template>
  <Dashboard>
    <div slot="slot-pages" class="content-pages">
      <header>
        <h1>Dashboard</h1>
      </header>

      <div>
        <div class="row">
          <div class="col-12 col-md-3">
            <Cards />
          </div>
          <div class="col-12 col-md-3"></div>

          <div class="col-12 col-md-3"></div>

          <div class="col-12 col-md-3"></div>
        </div>
      </div>
    </div>
  </Dashboard>
</template>
<script>
import Dashboard from "../views/Dashboard.vue";
import Cards from "../components/Cards.vue";

export default {
  components: {
    Dashboard,
    Cards,
  },
};
</script>

<style lang="scss" src="../styles/login.scss" scoped></style>
