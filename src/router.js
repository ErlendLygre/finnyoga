import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Events from './components/Events.vue'
import Event from './components/Event.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import MakeEvent from './components/MakeEvent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'homeLink', component: Home },
    { path: '/events', name: 'eventsLink', component: Events },
    { path: '/event', name: 'eventLink', component: Event },
    { path: '/login', name: 'loginLink', component: Login },
    { path: '/profile', name: 'profileLink', component: Profile },
    { path: '/make-event', name: 'makeEventLink', component: MakeEvent }
  ]
})

