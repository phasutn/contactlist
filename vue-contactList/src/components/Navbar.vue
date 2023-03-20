<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #111;">
    <a class="navbar-brand" href="#">
      <img src="@/assets/logo.png" width="80" height="80" alt="logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/contactlist" class="nav-link" style="color: white;">CONTACT LIST</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contactadd" class="nav-link" style="color: white;">ADD CONTACT</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/register" class="nav-link" style="color: white;">REGISTER</router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="/" class="nav-link" style="color: white;">LOGIN</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

    
    <script>
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
export default {
  components: {
    Register,
    Login
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    goToSignUp() {
      this.$router.push('/register')
    },
    goToSignIn() {
      this.$router.push('/login')
    }
  }
}
</script>
    
    
    
    
    <style>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      }
    </style>