<template>
  <main>
    <div class="container">
      <div class="loginPanel">
        <h1>LOGIN</h1><br/>
          <div>
            <p class="info" placeholder="Username">USERNAME</p>
            <input type="text">
            <p class="info" placeholder="Password">PASSWORD</p>
            <input type="password">
          </div><br/>
          <h5>NO ACCOUNT? <a href="/register">SIGN UP HERE</a></h5>          <br/>
        <button type="submit" @click="goToContact()">SIGN IN</button>
      </div>
    </div>
  </main>
</template>

<script>
export default{
  methods: {
    goToContact() {
      this.$router.push('/contactlist');
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