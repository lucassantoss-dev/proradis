<template>
<Dashboard>
    <div slot="slot-pages" class="content-pages">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Registro de Vacinação</h2>
                        </div>
                    </div>

                <div class="row">
                    <div class="col-md-2">
                        <router-link class="color-0e5caf" :to="'/registro-form'">    
                            <button type="submit" class="btn btn-warning">
                            <i class="fa fa-plus">
                            </i>
                            Primeira Dose
                            </button>
                        </router-link><br>
                        <router-link class="color-0e5caf" :to="'/segunda-dose'">    
                            <button type="submit" class="btn btn-danger">
                            <i class="fa fa-plus">
                            </i>
                            Segunda Dose
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
                                    <th>Data</th>
                                    <th>Identificacao</th>
                                    <th>Controle</th>
                                    <th>
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="registro in registros" :key="registro.id">
                                    <td>{{registro.id}}</td>
                                    <td>{{registro.data}}</td>
                                    <td>{{registro.identificacao}}</td>
                                    <td>{{registro.controle}}</td>
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
    name: 'Registro',
    data() {
        return {
            registros: [],
        }
    },
    mounted(){
        this.getRegistro();
    },
    methods: {
        async getRegistro(){
            let response = await axios.get('/registros');
            if(response.status == 200){
                this.registros = response.data;
            }else{
                console.error("Ocorreu um erro na API.");
            }
        },
        addVacina(regadd){
            regadd.id = Date.now();
            this.regform.push(regadd);
            this.regadd = {checked: false};
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
  
