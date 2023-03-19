import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
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
      path: '/contactlist',
      name: 'contactlist',
      component: ContactList
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
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router
