<template>
  <main>
    <div class="container">
      <div>
        <h1 style="text-align: center;">Contact List<br></h1>
        <div class="list">
          <table>
                <tr>
                  <th>Info</th>
                </tr>
            <tbody>
                <tr v-for="acontact in filterContacts" v-bind:key="acontact.id">
                  <img v-bind:src=acontact.imageUrl style="max-width: 00px; max-height: 300px;"/>
                  <tr>
                    <td>{{acontact.firstname}}</td>
                    <td>{{acontact.lastname}}</td><br>
                  </tr>
                  <tr>
                    <td>Mobile:</td><td>{{acontact.mobileNo}}</td><br>
                  </tr>
                  <tr>
                    <td>Email:</td><td>{{acontact.email}}</td><br>
                  </tr>
                  <tr>
                    <td>Facebook:</td><td>{{acontact.facebook}}</td>
                  </tr>
                  <td>
                    <router-link :to="{path:'/contactupdate' , name: 'contactupdate', params: {contactId: acontact._id}}">
                      <button type="button" class="btn btn-warning">Update User</button>
                    </router-link >
                    <button @click="deleteContact(acontact._id)" class="btn btn-danger">Delete User</button>
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
  name: 'Contacts',
  data() {
    return {
      search: '',
      Contacts : [],
      uid: ''
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:5001/contacts')
    .then((response)=>{
      console.log(response.data)
      this.Contacts = response.data
    })
    .catch((error)=>{
      console.log(error)
    })
  },
  computed :{
    filterContacts: function(){
      return this.Contacts.filter((contact)=>{
        return contact.firstname.match(this.search)
      })
    }
  },
  methods:{
    deleteContact(contactId) {
      axios.delete("http://127.0.0.1:5001/contacts/"+contactId)
      .then((response)=>{
        console.log('Delete Contact Id: ' + contactId)
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

</style>