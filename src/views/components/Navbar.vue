<template>
    <div class="nav">
        <div>
            <h3 class="logo"><i class="fa fa-users"></i>Logo</h3>
        </div>
    <div class="logout">
        <router-link class="color-0e5caf"  :to="'/'">
        <a href="">Sair<i class="fa fa-sign-out-alt"></i></a>
        </router-link>
    </div>
    
    </div>
</template>

<script>

export default {
    name: 'Navbar',
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
.nav{
        justify-content: space-between;
    .logo {
        color: #fff;
    }
    .logout a{
        color: #fff;
        text-decoration: none;
        align-items: right;
        flex-direction: column;      
    }

}


</style>
