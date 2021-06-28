<template>
  <Dashboard>
    <div slot="slot-pages" class="content-pages">
      <div class="vac-form">
        <div class="tile flex-centered">
          <form @submit.prevent="addVacina(newVac)">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Fabricante: *</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  name="fabricante" 
                  v-model="vacinas.fabricante"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Lote: *</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  name="lote"
                  v-model="vacinas.lote" 
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Validade: *</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  name="validade" 
                  v-model="vacinas.validade"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Quantidade: *</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  name="qtd"
                  v-model="vacinas.qtd" 
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Intervalo entre as doses: *</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  name="intervalo"
                v-model="vacinas.intervalo"
                  />
                </div>
              </div>
            </div>
            <br>
            <div class="row">
            <div class="col-md-3">
                <button @click="addVacina" type="submit" class="btn btn-primary input-group-btn">
                    <i class="fa fa-save"></i> Salvar
                </button>
                <router-link class="color-0e5caf" :to="'/vacinas'">    
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
    name: 'Vacinas-form',
    components: {
        
        Dashboard
        },
    data() {
        return {
            vacinas: {
              Fabricante: '',
              lote: '',
              validade: '',
              qtd: '',
              intervalo: '',
            },
            vacform: [],
            newVac: {
              id: null
            }
        }
    },
    methods: {
        addVacina(){
            axios.post('/vacina', this.vacinas);
            this.newVac.id = Date.now();
            this.vacform.push(this.newVac);
            this.newVac = {checked: false};       
        },
    }
};

</script>

<style lang="scss" scoped>

</style>
