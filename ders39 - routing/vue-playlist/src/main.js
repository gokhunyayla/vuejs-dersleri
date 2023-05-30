import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router' // npm install vue-router --save eski sürümse npm install vue-router@3.5.2 şeklinde ile önce bu öğeyi kuruyoruz sonra main.js üzerine import ediyoruz. sonra use metodu ile uygulama genelinde çalışır hale getiriyoruz.
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

//Filters
Vue.filter('snippet', function(value){
  return value.slice(0, 100) + "...";
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
