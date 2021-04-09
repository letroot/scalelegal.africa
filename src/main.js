import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import router from './router/index.js'


Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
