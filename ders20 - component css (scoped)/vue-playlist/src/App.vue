<template>
  <div id="app">
   <h1>{{ title }}</h1>
   <webtangular></webtangular>
  </div>
</template>

<script>
import Webtangular from './webtangular.vue'

export default {
  components: {
    'webtangular': Webtangular
  },
  name: 'app',
  data () {
    return {
      title: 'Webtangular App'
    }
  }
}
</script>

<style scoped>
h1{  /* scoped bu componentte kullanılan öğeler için geçerli ID'ye style verir. */
  color: purple;
}
</style>
