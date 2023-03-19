<template>
  <main>
    <div class="container">
      <div>
        <h1 style="text-align: center;">Contact List<br></h1>
        <div class="list">
          <table>
                <tr>
                  <th>Info</th>
                  <th>Info</th>
                </tr>
            <tbody>
                <tr v-for="acontact in filterContacts" v-bind:key="acontact.id">
                  <td>{{acontact.firstname}}</td>
                  <td>{{acontact.lastname}}</td>
                  <td>
                    <router-link :to="{path:'/contactupdate' , name: 'contactupdate', params: {contactId: acontact._id}}">
                      <button type="button" class="btn btn-warning">Edit</button>
                    </router-link >updateuser
                    <button @click="deleteContact(acontact._id)" class="btn btn-danger">Delete</button>
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