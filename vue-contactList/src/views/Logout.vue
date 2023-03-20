<template>
  <main>
    <div class="container">
      <div class="loginPanel">
        <h1>LOGOUT</h1><br/>
          <h4>CLICK <a href="/login">HERE</a> TO CHANGE ACCOUNT</h4><br/>
        <button type="submit" @click="logout">SIGN OUT</button>
      </div>
    </div>
  </main>
</template>

<script>

export default{
  name: 'Logout',
  methods:{
    logout(){
      localStorage.removeItem('AuthToken');
      this.$router.push('/login');
    }
  }
};

</script>

<style>

</style>