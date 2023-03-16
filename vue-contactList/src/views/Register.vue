<template>
  <main>
    <div class="container">
      <div class="loginPanel">
        <h1>REGISTER</h1><br/>
          <div>
            <p class="info">USERNAME</p>
            <input type="text" placeholder="Username" v-model="User.username"/>
            <p class="info">PASSWORD</p>
            <input type="password" placeholder="Password" v-model="User.password"/>
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
    addToAPI() {
      console.log(this.User)
      axios.post('http://127.0.0.1:5001/users', this.User)
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>