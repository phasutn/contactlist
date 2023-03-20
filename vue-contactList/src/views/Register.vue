<template>
  <main>
    <div class="container">
      <div class="loginPanel">
        <h1>REGISTER</h1><br/>
          <div>
            <p class="info">USERNAME</p>
            <input type="text" placeholder="Username" v-model="User.username"/>
            <div id="username_empty" >Invalid Username</div>
            <div id="username_exists" >Username already exists</div>
            <p class="info">PASSWORD</p>
            <input type="password" placeholder="Password" v-model="User.password"/>
            <div id="password_empty" >Invalid Password</div>
          </div><br/>
        <button type="submit" @click="addToAPI">REGISTER</button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddUser',
  data() {
    return {
      User: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async addToAPI() {
      let user_empty = document.getElementById('username_empty')
      let pass_empty = document.getElementById('password_empty')
      let user_exists = document.getElementById('username_exists')
      console.log(this.User)

      user_empty.style.display = (this.User.username.length == 0) ? "block" : "none";
      pass_empty.style.display = (this.User.password.length == 0) ? "block" : "none";

      if (user_empty.style.display == "block" || pass_empty.style.display == "block") {
        return;
      }

      axios.get(`http://localhost:5001/users?username=${this.User.username}`)
        .then((result) => {
          //Check if username is unique
          if (result.data.length != 0) {
            user_exists.style.display = "block"
            return
          } else {
            axios.post('http://localhost:5001/users', this.User)
              .then((response) => {
                console.log(response)
                this.$router.push('/login')
              })
              .catch((error) => {
                console.log(error)
              })
          }
      })
    },
  }
}
</script>

<style>

#username_exists{
  margin-left: 2px;
  opacity: 60%;
  text-align: left;
  font-size: 85%;
  color:red;
  display: none;
}

</style>