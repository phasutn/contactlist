<template>
  <main>
    <div class="container">
      <div class="loginPanel">
        <h1>LOGIN</h1><br/>
          <div class="info">
            <p class="infoText">USERNAME</p>
            <input v-model="username" type="text" placeholder="Username">
            <div id="username_empty" >Please enter your username</div>
            <div id="username_incorrect" >Incorrect username or password</div>
            <p class="infoText">PASSWORD</p>
            <input v-model="password" type="password" placeholder="Password">
            <div id="password_empty" class="input_error">Please enter your password</div>
          </div><br/>
          <h5>NO ACCOUNT? <a href="/register">SIGN UP HERE</a></h5><br/>
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
    
  async login() {
      let user_empty = document.getElementById('username_empty')
      let pass_empty = document.getElementById('password_empty')
      let user_incorrect = document.getElementById('username_incorrect')

      //No username or password input
      if(this.username.length == 0){
        user_empty.style.display = "block";
        user_incorrect.style.display = "none"
      } else {
        user_empty.style.display = "none"
      }

      if(this.password.length == 0){
        pass_empty.style.display = "block";
        user_incorrect.style.display = "none"
      } else {
        pass_empty.style.display = "none"
      }
    
      
      let result = await axios.post("http://localhost:5001/login", {
            username: this.username,
            password: this.password
      })
      .then((result) => {
        console.log(result);
        if(result.data.success == true){
          //Set 'AuthToken' to the token generated from
          //JWT in the localStorage so that it can be used
          //to identify this user as loggedin.
          localStorage.setItem('AuthToken', result.data.token);
          this.$router.push('/contactlist');
        }
      })
      .catch((error) => {
        if(error.response.data.errorType == 'LoginFail'){
            pass_empty.style.display == "none"
            user_empty.style.display == "none"
            user_incorrect.style.display = "block"
        }
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

#username_empty,
#password_empty{
  margin-left: 3px;
  opacity: 60%;
  font-size: 80%;
  text-align: left;
  color: red;
  display: none;
}

#username_incorrect{
  margin-left: 3px;
  opacity: 60%;
  font-size: 75%;
  text-align: left;
  color: red;
  display: none;
}

</style>