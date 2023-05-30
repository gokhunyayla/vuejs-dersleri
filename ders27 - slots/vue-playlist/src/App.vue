<template>
  <div>
    <form-helper>
      <h2 slot="title">{{ title }}</h2> <!-- slot=title şeklinde belirtmeseydik, iç bileşende slot görüntülemek istediğimizde başlığı olmayan her slot'u aynı anda gösterecekti. -->
      <p slot="text">Ben root'tan gelen bir paragrafım</p>
      <div slot="form-header">
        <h3>Form Başlığı</h3>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Kullanıcı Adı" required>
        <input type="text" placeholder="Şifre" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Gönder</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'

//slots kullanarak ana bileşenden alt bileşenlere html içerik gönderebiliyoruz.

export default {
  components: {
    'form-helper': formHelper
  },
  data () {
    return {
      title: "Ben bir dinamik slot başlığıyım."
    }
  },
  methods: {
    handleSubmit: function(){
      alert('Gönderildi!');
    }
  }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
