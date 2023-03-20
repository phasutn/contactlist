<template>
  <main>
    <div class="container">
      <div class="editPanel">
        <h1 style="text-align: center;">Edit Contact<br></h1>
          <div>
            <p class="info">Contact ID (required)</p>
            <input type="number" placeholder="Contact ID" v-model="Contact.contactid"/>
            <p class="info">First Name (required)</p>
            <input type="text" placeholder="First Name" v-model="Contact.firstname"/>
            <p class="info">Last Name (required)</p>
            <input type="text" placeholder="Last Name" v-model="Contact.lastname"/>
            <p class="info">Mobile Number (required)</p>
            <input type="text" placeholder="Mobile Number" v-model="Contact.mobileNo"/>
            <p class="info">Email</p>
            <input type="text" placeholder="Email" v-model="Contact.email"/>
            <p class="info">Facebook</p>
            <input type="text" placeholder="Facebook" v-model="Contact.facebook"/>
            <p class="info">Image Url</p>
            <input type="text" placeholder="Image Url" v-model="Contact.imageUrl"/>
            <br>
            <div id="info_missing">All required field must be filled in</div>
            <br>
            <button type="submit" @click="updateToAPI">Save</button>
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
    async updateToAPI() {
      let info_missing = document.getElementById('info_missing')
      if(this.Contact.contactid.length == 0 || this.Contact.firstname.length == 0 || this.Contact.lastname.length == 0 || this.Contact.mobileNo.length == 0){
          info_missing.style.display = "block";
          return;
      }
      else info_missing.style.display = "none";
      
      axios.post('http://127.0.0.1:5001/contacts/'+this.$route.params.contactId, this.Contact)
      .then((response)=>{
        console.log(response)
        this.$router.push('/contactlist')
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  },
  mounted(){
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
#info_missing{
  margin-left: 2px;
  opacity: 60%;
  text-align: left;
  font-size: 85%;
  color:red;
  display: none;
}
</style>