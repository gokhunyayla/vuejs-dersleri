<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-article v-bind:users="users"></app-article> <!-- Buradan da users değişkenini bu component içine gönderiyoeruz. Aksi taktirde alt component bu veriye erişemez. -->
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Article from './components/article.vue'
import Footer from './components/footer.vue'

//primitive'ler boolean, integer, string gibi standart değişken tipleri: bir primitive varsa orjinal değerler korunur, component'de değişen değerlerle işlemler yapılır
//reference type'lar ise object ve array.: orjinal değerler değişir, component'ler değişen değerleri hep birlikte görürer.

export default {
  components: {
    'app-header': Header,
    'app-article': Article,
    'app-footer': Footer
  },
  data () {
    return {
      users: [
          {name: 'Gokhun', speciality: 'Geliştirici', show: false},
          {name: 'Elif', speciality: 'Stratejist', show: false},
          {name: 'Han', speciality: 'Daha bebek', show: false},
          {name: 'Alper', speciality: 'Patron', show: false},
          {name: 'Yağız', speciality: 'Patron yavurus', show: false},
          {name: 'Zahide', speciality: 'Ev hanımı', show: false},
      ],
      title: "Vue - Webtangular"
    }
  },
  methods: {
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
    }
  }
}
</script>

<style>

</style>
