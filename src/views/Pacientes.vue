<template>
  <Dashboard>
    <div slot="slot-pages" class="content-pages">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Cadastro de Pacientes</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2">
            <router-link class="color-0e5caf" :to="'/pacientes-form'">
              <button type="submit" class="btn btn-warning">
                <i class="fa fa-plus"> </i>
                Novo
              </button>
            </router-link>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-12">
            <table class="table table-condensed table-hover">
              <thead>
                <tr class="light-blue darken-2">
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Idade</th>
                  <th>CEP</th>
                  <th>Endereço</th>
                  <th>numero</th>
                  <th>bairro</th>
                  <th>Comorbidade</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="paciente in paciente" :key="paciente.id">
                  <td>{{ paciente.nome }}</td>
                  <td>{{ paciente.cpf }}</td>
                  <td>{{ paciente.idade }}</td>
                  <td>{{ paciente.cep }}</td>
                  <td>{{ paciente.endereco }}</td>
                  <td>{{ paciente.numero }}</td>
                  <td>{{ paciente.bairro }}</td>
                  <td>{{ paciente.comorbidade }}</td>
                  <td>
                    <button class="btn btn-primary" @click="mostrarPaciente">
                      <i class="fa fa-plus"></i>
                      Editar
                    </button>
                    <button class="btn btn-danger" click="novoCadastro()">
                      <i class="fa fa-plus"></i>
                      Deletar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </Dashboard>
</template>

<script>
import Dashboard from "../views/Dashboard.vue";
import axios from "../../axios";

export default {
  name: "Pacientes",
  data() {
    return {
      paciente: [],
    };
  },
  mounted() {
    this.getPacientes();
  },
  methods: {
    async getPacientes() {
      let response = await axios.get("/cliente", this.paciente);
      if (response.status == 200) {
        this.paciente = response.data;
      } else {
        console.error("Ocorreu um erro na API.");
      }
    },
    mostrarPaciente() {
      axios.put("/cliente/{id}", this.paciente);
    }
  },
  components: {
    Dashboard,
  },
  props: {},
};
</script>

<style lang="scss" src="../styles/pacientes.scss" scoped></style>
