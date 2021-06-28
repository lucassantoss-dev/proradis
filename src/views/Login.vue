<template>
<div class="main">
  <div class="container">
      <div class="header">
        <div class="col-md-12">
              <img class="img" id="logo" src="@/assets/logo.png" alt="logo.png" />
                  <div class="texto-login">
                  <h1 class="vac">Vacinação Covid</h1>
                  <h1 class="vac">Login</h1>
                </div>
            </div>
          <div class="login-content">
             <form @submit.prevent>
               <div class="form-floating mb-3">
                <input 
                type="email" 
                class="form-control" 
                id="floatingInput" 
                placeholder="name@example.com" 
                v-model="user.email">
                <label for="floatingInput">Email</label>
              </div>
              <div class="form-floating">
                <input 
                type="password" 
                class="form-control" 
                id="floatingPassword" 
                placeholder="Password"
                v-model="user.password"
                >
                <label for="floatingPassword">Password</label>
              </div><br>
              <button @click="logar" type="submit" class="btn btn-primary input-group-btn">
                    <i class="fa fa-save"></i> Entrar
                </button>
              <!-- <router-link class="color-0e5caf" :to="'/home'">
                <button type="submit" class="btn btn-primary" click="login">Entrar</button>
              </router-link> -->
              </form>
                
          </div>
      </div>
    </div>
</div>

</template>
<script>
import axiosIns from '../../axios'

export default {
    name: 'Login',
    data(){
      return{
        user: {}
      }
    },
    methods: {
      logar(){
        axiosIns.post('/login', this.user)
        .then( response => {localStorage.setItem('userData', JSON.stringify(response.data))
        this.$router.push('/home')})  
      }
    }
  }
</script>

<style lang="scss" src="../styles/login.scss" scoped>
  
</style>
