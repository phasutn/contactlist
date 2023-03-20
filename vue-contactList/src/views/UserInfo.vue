<template>
  <main>
    <div class="container" >
      <div>
        <h1 style="text-align: center;">User Info<br></h1>
        <div class="list">
          <table>
            <tr>
              <th>Username</th>
              <th style="text-align: center">Password [MD5]</th>
            </tr>
            <tr v-for="auser in filterUsers" v-bind:key="auser.id">
              <td>{{auser.username}}</td>
              <td>{{auser.password}}</td>
              <td><button @click="deleteUser(auser._id)" class="btn btn-danger">Delete</button></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Users',
  data() {
    return {
      search: '',
      Users : [],
      uid: ''
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:5001/loggedin', {
      params: {
        token: localStorage.getItem('AuthToken'),
      }
    })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
        if(error.response.status && error.response.status == 401){
          this.$router.push('/notloggedin');
        }
      })
    axios.get('http://127.0.0.1:5001/users')
      .then((response)=>{
        console.log(response.data)
        this.Users = response.data
      })
      .catch((error)=>{
        console.log(error)
      })
  },
  computed :{
    filterUsers: function(){
      return this.Users.filter((user)=>{
        return user.username.match(this.search)
      })
    }
  },
  methods:{
    deleteUser(UserId) {
      axios.delete("http://127.0.0.1:5001/users/"+UserId)
      .then((response)=>{
        console.log('Delete User Id: ' + UserId)
      })
      .catch((error)=>{
        console.log(error)
      })
      window.location.reload()
    }
  }
}
</script>

<style>

.list{
  display: block;
}

th{
  text-decoration: underline 3px;
}



</style>