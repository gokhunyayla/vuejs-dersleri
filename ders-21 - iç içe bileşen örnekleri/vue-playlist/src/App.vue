<template>
  <app-header></app-header>
  <app-article></app-article>
  <app-footer></app-footer>
</template>

<script>
import Header from './components/header.vue'
import Article from './components/article.vue'
import Footer from './components/footer.vue'

export default{
  components: {
    "app-header": Header,
    "app-article": Article,
    "app-footer": Footer
  },
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>

</style>