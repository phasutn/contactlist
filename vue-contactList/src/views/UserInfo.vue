<template>
  <main>
    <div class="container">
      <div>
        <h1 style="text-align: center;">User Info<br></h1>
        <div class="list">
          <table>
                <tr>
                  <th>Username</th>
                  <th>Password [MD5]</th>
                </tr>
            <tbody>
                <tr v-for="auser in filterUsers" v-bind:key="auser.id">
                  <td>{{auser.username}}</td>
                  <td>{{auser.password}}</td>
                  <td>
                    <!-- <router-link :to="{path:'updateuser' , name: 'UpdateUser', params: {userId: auser._id}}">
                      <button type="button" class="btn btn-warning">Edit</button>
                    </router-link> -->
                    <button @click="deleteUser(auser._id)" class="btn btn-danger">Delete</button>
                  </td>
                </tr>
            </tbody>
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