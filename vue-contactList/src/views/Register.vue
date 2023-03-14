<template>
  <main>
    <div class="container">
        <h1>Register</h1><br/>
    </div>
  </main>
</template>

<script>

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
  border-radius: 12px 12px 12px 12px;
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