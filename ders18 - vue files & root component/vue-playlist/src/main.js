import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App) //render metodu App içindeki herşeyi render edip root component'e #app'e taşır
})
