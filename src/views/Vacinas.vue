<template>
<Dashboard>
    <div slot="slot-pages" class="content-pages">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Cadastro de Vacinas</h2>
                        </div>
                    </div>

                <div class="row">
                    <div class="col-md-2">
                        <router-link class="color-0e5caf" :to="'/vacinas-form'">    
                            <button type="submit" class="btn btn-warning">
                            <i class="fa fa-plus">
                            </i>
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
                                    <th>ID</th>
                                    <th>Fabricante</th>
                                    <th>Lote</th>
                                    <th>Data de Validade</th>
                                    <th>Quantidade</th>
                                    <th>Intervalo mínimo entre doses</th>
                                    <th>
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="vacinas in vacina" :key="vacinas.id">
                                    <td>{{vacinas.id}}</td>
                                    <td>{{vacinas.fabricante}}</td>
                                    <td>{{vacinas.lote}}</td>
                                    <td>{{vacinas.validade}}</td>
                                    <td>{{vacinas.qtd}}</td>
                                    <td>{{vacinas.intervalo + ' dias'}}</td>
                                    <td>
                                    <button class="btn btn-primary" click="novoCadastro()" >
                                        <i class="fa fa-plus"></i>
                                        Editar
                                    </button>
                                    <button class="btn btn-danger" click="novoCadastro()" >
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
import Dashboard from '../views/Dashboard.vue'
import axios from '../../axios'

export default{
    name: 'Vacinas',
    data() {
        return {
            vacina: [],
        }
    },
    mounted(){
        this.getVacinas();
    },
    methods: {
        async getVacinas(){
            let response = await axios.get('/vacinas');
            if(response.status == 200){
                this.vacina = response.data;
            }else{
                console.error("Ocorreu um erro na API.");
            }
        },
        addVacina(vacadd){
            vacadd.id = Date.now();
            this.vacform.push(vacadd);
            this.vacadd = {checked: false};
        }
    },
    components: {
        Dashboard,
    },
     props: {
       //vacadd: {type: Object, required: true}
     }
}
</script>

<style lang="scss" src="../styles/vacinas.scss" scoped>
  
