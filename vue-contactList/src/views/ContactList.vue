<template>
  <main>
    <div class="container" id="contactlist">
      <div>
        <h1 style="text-align:center">Contact List<br></h1>
        <div class="list">
          <table>
            <tbody>
              <tr v-for="(acontact, index) in filterContacts" :key="acontact.id">
                <div class="contactBox">
                  <div class="contactBoxContent">
                    <img :src="acontact.imageUrl" class="imageHolder">
                    <div style="margin: auto">
                      <div>{{acontact.firstname}} {{acontact.lastname}}</div>
                      <div>Mobile: {{acontact.mobileNo}}</div>
                      <div>Email: {{acontact.email}}</div>
                      <div>Facebook: {{acontact.facebook}}</div>
                      <div>
                        <router-link :to="{path:'/contactupdate' , name: 'contactupdate', params: {contactId: acontact._id}}">
                          <button type="button" class="btn btn-warning">Update User</button>
                        </router-link >
                        <button @click="deleteContact(acontact._id)" class="btn btn-danger">Delete User</button>
                      </div>
                    </div>
                  </div>
                </div>
                <td v-if="index % 2 === 0"></td>
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
    //Authentication
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

    //
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
.card {
  margin-bottom: 20px;
}
.container #contactlist{
  display: flex;
  font-family: "Tilt Warp";
  color: black;
  background-color: aliceblue;
  border-radius: 16px 16px 16px 16px;
  width:100%;
  padding: 100px;
  padding-bottom:400px;
  padding-right:1000px;
  white-space:nowrap;
}

.list table tbody tr {
  display: inline-block;
  vertical-align: top;
  margin-right: flex;
}

.contactBox{
  padding: 10px;
}

.contactBoxContent{
  border: lightblue 10px solid;
  border-radius: 8px;
}

.imageHolder{
    justify-content: center;
    max-width:  150px;
    max-height: 150px;
    min-width:  150px;
    min-height: 150px;
    object-fit: cover;
}
</style>