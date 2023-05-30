<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <webtangular></webtangular>
    <lwebtangular></lwebtangular> <!-- Local Components-->
  </div>
</template>

<script>
import LWebtangular from './local_webtangular.vue' //local component

export default {
  components: {
    'lwebtangular': LWebtangular //local component
  },
  data () {
    return {
      title: 'Webtangular App'
    }
  }
}
</script>

<style>

</style>
