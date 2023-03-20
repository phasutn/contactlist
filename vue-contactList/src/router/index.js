import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import NotLoggedIn from '../views/NotLoggedIn.vue'
import ContactAdd from '../views/ContactAdd.vue'
import ContactList from '../views/ContactList.vue'
import ContactUpdate from '../views/ContactUpdate.vue'
import UserInfo from '../views/UserInfo.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/notloggedin',
      name: 'notloggedin',
      component: NotLoggedIn
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/contactlist',
      name: 'contactlist',
      component: ContactList,
    },
    {
      path: '/contactadd',
      name: 'contactadd',
      component: ContactAdd
    },
    {
      path: '/contactupdate/:contactId',
      name: 'contactupdate',
      component: ContactUpdate
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: UserInfo
    }
  ]
})

export default router
