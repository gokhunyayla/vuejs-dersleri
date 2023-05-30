import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

//Custom Directives
Vue.directive('rainbow', {
  bind(el, binding, vnode){ //hook'lar gibi çalışırlar, bind olacağı zaman tetikler
    el.style.color = "#" + Math.random().toString().slice(2, 8); // ilk directive'imiz. 6 karakterli hex rakamlardan oluşan renkler verdi.
  } 
});

Vue.directive('theme', {
  bind(el, binding, vnode){
    if (binding.value == "wide"){
      el.style.maxWidth = "1200px";
    } else if (binding.value == "narrow"){
      el.style.maxWidth = "560px";
    }

    if (binding.arg == "column"){
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
