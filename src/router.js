import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Users from './views/Users.vue'
import Teams from './views/Teams.vue'
import Challenges from './views/Challenges.vue'
import Competitions from './views/Competitions.vue'
import Admins from './views/Admins.vue'
import Instances from './views/Instances.vue'
import Files from './views/Files.vue'
import Shell from './views/Shell.vue'

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
    },
    {
      path: '/competitions',
      name: 'competitions',
      component: Competitions
    },
    {
      path: '/admins',
      name: 'admins',
      component: Admins
    },
    {
      path: '/instances',
      name: 'instances',
      component: Instances
    },
    {
      path: '/files',
      name: 'files',
      component: Files
    },
    {
      path: '/shell',
      name: 'shell',
      component: Shell
    }
  ]
})
