<template>
  <main>
    <div class="container">
      <div>
        <h1 style="text-align: center;">Add Contact<br></h1>

        <div class="form-group row">
          <label for="name" class="col-sm-2 col-form-label">Contact ID:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="contactid" v-model="Contact.contactid" placeholder="Enter contact ID">
          </div>
        </div>

        <div class="form-group row">
          <label for="name" class="col-sm-2 col-form-label">First Name:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="firstname" v-model="Contact.firstname" placeholder="Enter first name">
          </div>
        </div>

        <div class="form-group row">
          <label for="telephone" class="col-sm-2 col-form-label">Last Name:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="lastname" v-model="Contact.lastname" placeholder="Enter last name">
          </div>
        </div>

        <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Mobile Number:</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="mobileNo" v-model="Contact.mobileNo" placeholder="Enter mobile number">
          </div>
        </div>

        <div class="form-group row">
          <label for="telephone" class="col-sm-2 col-form-label">Email:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="email" v-model="Contact.email" placeholder="Enter email address">
          </div>
        </div>

        <div class="form-group row">
          <label for="telephone" class="col-sm-2 col-form-label">Facebook:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="facebook" v-model="Contact.facebook" placeholder="Enter Facebook account">
          </div>
        </div>

        <div class="form-group row">
          <label for="telephone" class="col-sm-2 col-form-label">Image URL:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="imageurl" v-model="Contact.imageUrl" placeholder="Enter image URL">
          </div>
        </div>

        <div id="info_missing">All required field must be filled in</div>
        <br>
        <button type="submit" class="btn btn-primary" @click="addContact">Add</button>

        <hr>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
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
    };
  },
  methods: {
    async addContact() {
        let info_missing = document.getElementById('info_missing')
        if(this.Contact.contactid.length == 0 || this.Contact.firstname.length == 0 || this.Contact.lastname.length == 0 || this.Contact.mobileNo.length == 0){
            info_missing.style.display = "block";
            return;
        }
        else info_missing.style.display = "none";

        axios.post('http://127.0.0.1:5001/contacts', this.Contact)
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
  }
};
</script>

<style>
.card {
  margin-bottom: 20px;
}

#info_missing{
  margin-left: 2px;
  opacity: 60%;
  text-align: left;
  font-size: 85%;
  color:red;
  display: none;
}
</style>
