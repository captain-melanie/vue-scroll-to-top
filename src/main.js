import Vue from 'vue'
import App from './App.vue'
import VueScrollToTop from './lib/vscroll'

Vue.use(VueScrollToTop)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
