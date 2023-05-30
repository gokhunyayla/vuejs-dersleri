<template>
  <div>
    <app-header></app-header>
    <app-article></app-article>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue' //local olarak importa ediliyorlar.
import Article from './components/article.vue' //local olarak importa ediliyorlar.
import Footer from './components/footer.vue' //local olarak importa ediliyorlar.

export default {
  components: { //local olarak importa ediliyorlar.
    'app-header': Header, //key bizim tag'imiz oluyor. value ise import edilen component'in değişkeni.
    'app-article': Article,
    'app-footer': Footer
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
