import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Users from './views/Users.vue'
import Teams from './views/Teams.vue'
import Challenges from './views/Challenges.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    },
    {
      path: '/challenges',
      name: 'challenges',
      component: Challenges
    }
  ]
})
