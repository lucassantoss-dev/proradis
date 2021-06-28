<template>
    <div class="sidenav">
        <div class="top">
        <div class="avatar">
            <span><i class="fa fa-user icon"></i></span>
        </div>
        <div class="info">
            <p class="name">Lucas Santos</p>
            <p class="status">Online</p>
        </div>
        
        </div>

        <div class="menu">
        <ul class="teste">
            <li><router-link :to="{name: 'Home'}"><i class="fa fa-home"></i> Início</router-link></li>
            <li><router-link :to="{name: 'Vacinas'}"><i class="fa fa-syringe"></i> Cadastro de Vacinas</router-link></li>
            <li><router-link :to="{name: 'Pacientes'}"><i class="fa fa-hospital-user"></i> Cadastro de Pacientes</router-link></li>
            <li><router-link :to="{name: 'Registro'}"><i class="fa fa-virus"></i> Registro de vacinação</router-link> </li>  
        </ul>   
    </div>
</div>
</template>

<script>

export default ({
    name: 'Sidebar',
})
</script>

<style lang="scss" scoped>

.sidenav {

    .top{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 5px;
    margin-top: 60px;

    .avatar {
    margin-right: 10px;
        span {
            display: block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #CCC;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            color: black;
            }
        }
        .info{
            p{
            margin: 0;
            color: #FFF;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            }
            .name {
                font-size: 20px;
            }
            .status {
                font-size: 14px;
            }
        }
    }
    .menu {
        margin-top: 30px;
        padding: 10px;
        margin-right: 18px;

        ul li {
            margin: 15px 0;
            font-size: 18px;
            list-style: none;
            text-align: left;
            a {
            
            color: #FFF;
            text-decoration: none;
            } 
        } 
    }
}

</style>
