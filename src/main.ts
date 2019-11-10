import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('date', function (value: string) {
  if (!value) return ''
  return new Date(value).toLocaleString(undefined, {
    'year': 'numeric',
    'month': '2-digit',
    'day': '2-digit'
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
