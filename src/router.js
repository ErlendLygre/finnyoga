import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Dropins from './components/Dropins.vue'
import Dropin from './components/Dropin.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import MakeDropin from './components/MakeDropin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'homeLink', component: Home },
    { path: '/dropins', name: 'dropinsLink', component: Dropins },
    { path: '/dropin', name: 'dropinLink', component: Dropin },
    { path: '/login', name: 'loginLink', component: Login },
    { path: '/profile', name: 'profileLink', component: Profile },
    { path: '/make-dropin', name: 'makeDropinLink', component: MakeDropin }
  ]
})

