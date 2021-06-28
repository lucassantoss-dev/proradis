<template>
  <Dashboard>
    <div slot="slot-pages" class="content-pages">
      <div class="vac-form">
        <div class="tile flex-centered">
          <form @submit.prevent="addDose2(newDose)">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Paciente_id: *</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  name="cliente_id"
                  v-model="segunda.cliente_id" 
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Vacina_id: *</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  name="vacina_id" 
                  v-model="segunda.vacina_id"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Identificação: *</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  name="identificacao"
                  v-model="segunda.identificacao" 
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Data: *</label>
                  <input 
                  type="date" 
                  class="form-control" 
                  name="data_segunda" 
                  v-model="segunda.data_segunda"
                  />
                </div>
              </div>
            </div>
            <br>
            <div class="row">
            <div class="col-md-3">
                <button @click="addDose2" type="submit" class="btn btn-primary input-group-btn">
                    <i class="fa fa-save"></i> Salvar
                </button>
                <router-link class="color-0e5caf" :to="'/registro'">    
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

export default {
    name: 'Segunda-dose',
    components: {
        Dashboard
        },
    data() {
        return {
            segunda: {
              cliente_id: '',
              vacina_id: '',
              identificacao: '',
              data_segunda: '',
            },
            dosedois: [],
            newDose: {
              id: 2
            }
        }
    },
    methods: {
        addDose2(){
            axios.post('/segunda', this.segunda);
            this.newDose.id = Date.now();
            this.dosedois.push(this.newDose);
            this.newDose = {checked: false};       
        },
    }
};

</script>

<style lang="scss" scoped>

</style>
