<template>
  <app-header></app-header>
  <app-footer></app-footer>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'

export default{
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  data(){
    return {
      
    }
  }
}
</script>