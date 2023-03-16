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
@import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap');

p.info {
  margin-top: 10%;
}

.loginPanel{
  margin-left:auto;
  margin-right:auto;
  width: 100%;
  text-align: center;
}

.container{
  display: flex;
  font-family: "Tilt Warp";
  color: black;
  background-color: aliceblue;
  border-radius: 16px 16px 16px 16px;
  padding: 70px;
}

input[type='text'],
input[type='password']{
  padding: 5px 7px 4px;
  border-radius: 8px 8px 8px 8px;
}

button[type='submit']{
  background: black;
  color: white;
  font-family: "Tilt Warp";
  width: 100px;
  height: 30px;
  border-radius: 12px 12px 12px 12px;
}

button[type='submit']:active{
  background: none;
  color: black;
  font-family: "Tilt Warp";
  width: 100px;
  height: 30px;
  border-radius: 12px 12px 12px 12px;
}

</style>