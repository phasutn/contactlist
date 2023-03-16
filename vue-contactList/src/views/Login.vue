<template>
  <main>
    <div class="container">
      <div class="loginPanel">
        <h1>LOGIN</h1><br/>
          <div>
            <p class="info" >USERNAME</p>
            <input v-model="username" type="text" placeholder="Username">
            <div id="username_error" class="input_error" >Invalid Username</div>
            <p class="info" placeholder="Password">PASSWORD</p>
            <input v-model="password" type="password" placeholder="Password">
            <div id="password_error" class="input_error">Invalid Password</div>
          </div><br/>
          <h5>NO ACCOUNT? <a href="/register">SIGN UP HERE</a></h5>          <br/>
        <button type="submit" @click="login">SIGN IN</button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default{
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    goToContact() {
      this.$router.push('/contactlist');
    },
  async login() {
      let user_error = document.getElementById('username_error')
      let pass_error = document.getElementById('password_error')
      if(this.username = ""){
        user_error.style.display = "block"
      }
      if(this.password = ""){
        pass_error.style.display = "block";
      }
      let result = axios.get(`http://localhost:5001/auser?username=${this.username}&password=${this.password}`)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
    },
  },
};

</script>

<style>

::placeholder{
  opacity: 50%;
}

p.info {
  text-align: left;
  margin-top: 10%;
}

#username_error,
#password_error{
  margin-left: 3px;
  opacity: 60%;
  font-size: 80%;
  text-align: left;
  color: red;
  display: none;
}

</style>