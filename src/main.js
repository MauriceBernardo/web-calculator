import Vue from 'vue'
import Calculator from './components/Calculator.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Calculator),
}).$mount('#app')
