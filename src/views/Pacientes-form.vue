<template>
  <Dashboard>
    <div slot="slot-pages" class="content-pages">
      <div class="pac-form">
        <div class="tile flex-centered">
          <form @submit.prevent="addPaciente(newPac)">
            <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                  <label>Nome: *</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  name="nome"
                v-model="paciente.nome"
                  />
                </div>
              </div>
              
              <div class="col-md-6">
                <div class="form-group">
                  <label>CPF: *</label>
                  <input 
                  type="text"
                  class="form-control" 
                  name="cpf"
                  v-model="paciente.cpf" 
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Idade: *</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  name="idade" 
                  v-model="paciente.idade"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>CEP: *</label>
                  <input 
                  type="text" 
                  class="form-control"
                  name="cep"
                  v-model="paciente.cep" 
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Endereço: *</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  name="endereco"
                v-model="paciente.endereco"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Numero: *</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  name="numero"
                v-model="paciente.numero"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Bairro: *</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  name="bairro"
                v-model="paciente.bairro"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Comorbidade: *</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  name="comorbidade"
                v-model="paciente.comorbidade"
                  />
                </div>
              </div>
            </div>
                              
            <br>
            <div class="row">
            <div class="col-md-3">
                <button @click="addPaciente" type="submit" class="btn btn-primary input-group-btn">
                    <i class="fa fa-save"></i> Salvar
                </button>
                <router-link class="color-0e5caf" :to="'/pacientes'">    
                            <button type="submit" class="btn btn-danger ml-1">
                            <i class="fa fa-arrow-alt-circle-left">
                            </i>
                            Voltar
                            </button>
                        </router-link>
            </div>
        </div>
          </form>
        </div>
      </div>
    </div>
  </Dashboard>
</template>

<script>
import Dashboard from '../views/Dashboard.vue';
import axios from '../../axios'
//import Pacientes from './Pacientes.vue';

export default {
    name: 'Pacientes-form',
    components: {
        Dashboard,
        //Pacientes
        },
    data() {
        return {
            paciente: {
              nome: '',
              cpf: '',
              idade: '',
              cep: '',
              endereco: '',
              numero: '',
              bairro: '',
              comorbidade: ''
            },
            pacform: [],
            newPac: {
              id: null
            }
        }
    },
    methods: {
        addPaciente(){
          axios.post('/cliente', this.paciente);
            this.newPac.id = Date.now();
            this.pacform.push(this.newPac);
            this.newPac = {checked: false};
            
        },
      //   addPac() {
      // if (!this.newPac) {
      //   return;
      // }
        // this.paciente.push(this.newPac);
        // this.newPac = '';
        // this.savePac();
        // },
    //     removeCat(x) {
    //   this.paciente.splice(x, 1);
    //   this.savePac();
    // },
    // savePac() {
    //    const parsed = JSON.stringify(this.paciente);
    //    localStorage.setItem('paciente', parsed);
    // }
    },
};

</script>

<style lang="scss" scoped>

.pac-form{
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>
