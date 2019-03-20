import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    primary: '#406b3f',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

Vue.config.productionTip = false

Vue.component('event', {
  template: '<div class="card-wrapper">I´m a card</div>',
  methods: {
    toggle() {
      this.showSection = !this.showSection
    }
  },
  data() {
    return {
      showSection: true,
    }
  }
})

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
