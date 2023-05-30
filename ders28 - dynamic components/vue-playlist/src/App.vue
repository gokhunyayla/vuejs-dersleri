<template>
  <div>
      <component is="form-one"></component> <!-- sadece form-one bileşenini getirir. <form-one></form-one> ile aynıdır. -->
      <keep-alive> <!-- bileşenler arası geçiş yapıldığında önceki bileşen içinde input vs alanları doldurulmuş ise bunlar silinir, her geçişte bileşenler yeniden oluşturulur. Bu olmaması için keep-alive tag'i kullanılır; bu sayede bileşenler yeniden yüklenmek yerine state'lerini korur. -->
          <component v-bind:is="component"></component> <!-- dinamik bileşen alanı is ile bildirilir. Sadece is -->
      </keep-alive>
      <button v-on:click="component = 'form-one'">Form 1'i Göster</button>
      <button v-on:click="component = 'form-two'">Form 2'yi Göster</button>
  </div>
</template>

<script>
// Imports
import formOne from './components/form-one.vue';
import formTwo from './components/form-two.vue';

export default {
  components: {
      'form-one': formOne,
      'form-two': formTwo
  },
  data () {
      return {
          component: 'form-one' // 'form-two' yaparsak ilk önce o görünür.
      }
  },
  methods: {
      handleSubmit: function(){
          alert('Formu gönderdiğin için teşekkürler.');
      }
  }
}
</script>

<style>
body{
  margin: 0;
}
</style>