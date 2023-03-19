<template>
  <main>
    <div class="container">
      <div class="editPanel">
        <h1 style="text-align: center;">Edit Contact<br></h1>
          <div>
            <p class="info">Contact ID</p>
            <input type="number" placeholder="Contact ID" v-model="Contact.contactId"/>
            <p class="info">First Name</p>
            <input type="text" placeholder="First Name" v-model="Contact.firstname"/>
            <p class="info">Last Name</p>
            <input type="text" placeholder="Last Name" v-model="Contact.lastname"/>
            <p class="info">Mobile Number</p>
            <input type="text" placeholder="Mobile Number" v-model="Contact.mobileNo"/>
            <p class="info">Email</p>
            <input type="text" placeholder="Email" v-model="Contact.email"/>
            <p class="info">Facebook</p>
            <input type="text" placeholder="Facebook" v-model="Contact.facebook"/>
            <p class="info">Image Url</p>
            <input type="text" placeholder="Image Url" v-model="Contact.imageUrl"/>
            <router-link to = "/contactlist">
              <button type="submit" @click="updateToAPI">Save</button>
            </router-link>
          </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UpdateContact',
  data() {
    return {
      Contact: {
        contactid: '',
        firstname: '',
        lastname: '',
        mobileNo: '',
        email: '',
        facebook: '',
        imageUrl: ''
      }
    }
  },
  methods: {
    updateToAPI() {
      console.log(this.Contact)
      axios.post('http://127.0.0.1:5001/contacts/'+this.$route.params.contactId, this.Contact)
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  },
  mounted(){
    axios.get('http://127.0.0.1:5001/contacts/'+this.$route.params.contactId)
    .then((response)=>{
      console.log(response.data)
      this.Contact = response.data
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}
</script>

<style>

</style>