import Vue from 'vue'
import Router from 'vue-router'
import ErrorPage from '@/components/common/Error'
import Login from '@/components/common/Login'
import Register from '@/components/common/Register'
import Sale from '@/components/common/Sale'
import Buy from '@/components/common/Buy'
import Release from '@/components/common/Release'
import Person from '@/components/person/Person'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/sale',
      name: 'Sale',
      component: Sale
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/release',
      name: 'Release',
      component: Release
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/*',
      name: 'ErrorPage',
      component: ErrorPage
    }
  ]
})
