import Vue from 'vue'
import App from './App.vue'
import Webtangular from './webtangular.vue' //global olarak eklendi

Vue.component("webtangular", Webtangular) //global olarak eklendi.

new Vue({
  el: '#app',
  render: h => h(App)
})
