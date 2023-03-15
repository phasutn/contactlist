<template>
  <main>
    <div class="container">
      <div>
        <h1 style="text-align: center;">Contact List<br></h1>
        <div class="list">
          <table>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                </tr>
            <tbody>
                <!-- <tr v-for="auser in filterUsers" v-bind:key="auser.id"> -->
                  <tr>
                  <!-- <td>{{auser.firstName}}</td>
                  <td>{{auser.lastName}}</td>
                  <td>{{auser.email}}</td> -->
                  <td>usernameeeeeeeeeeeee</td>
                  <td>passworddddddddddddd</td>
                  <td>
                    <!-- <router-link :to="{path:'updateuser' , name: 'UpdateUser', params: {userId: auser._id}}">
                      <button type="button" class="btn btn-warning">Edit</button>
                    </router-link>
                    <button @click="deleteUser(auser._id)" class="btn btn-danger">Delete</button> -->
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
        return user.firstName.match(this.search)
      })
    }
  },
  methods:{
    deleteUser(UserId) {
      axios.delete("http://127.0.0.1:5001/users/"+UserId)
      .then((response)=>{
        console.log('Delete User Id: '+UserId)
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
@import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap');

.container{
  display: flex;
  font-family: "Tilt Warp";
  color: black;
  background-color: aliceblue;
  border-radius: 16px 16px 16px 16px;
  padding: 70px;
}

.list{
  display: block;
}

</style>