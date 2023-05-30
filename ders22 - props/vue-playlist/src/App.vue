<template>
  <div>
    <app-header></app-header>
    <app-article v-bind:users="users"></app-article> <!-- Buradan da users değişkenini bu component içine gönderiyoeruz. Aksi taktirde alt component bu veriye erişemez. -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Article from './components/article.vue'
import Footer from './components/footer.vue'

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
            ]
    }
  }
}
</script>

<style>

</style>
