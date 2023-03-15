<template>
  <main>
    <div class="container">
      <div class="loginPanel">
        <h1>LOGIN</h1><br/>
          <div>
            <p class="info" placeholder="Username">USERNAME</p>
            <input v-model="username" type="text">
            <p class="info" placeholder="Password">PASSWORD</p>
            <input v-model="password" type="password">
          </div><br/>
          <h5>NO ACCOUNT? <a href="/register">SIGN UP HERE</a></h5>          <br/>
        <button type="submit" @click="login">SIGN IN</button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import md5 from 'md5'

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
    //vulnerability if not provided with password (listAllUsers default to list everything)
      let result = axios.get(`http://localhost:5001/users?username=${this.username}&password=${this.password}`)
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