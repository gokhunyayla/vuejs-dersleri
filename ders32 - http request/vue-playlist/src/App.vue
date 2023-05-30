<template>
  <div>
    <add-blog></add-blog>
  </div>
</template>

<!-- Bu çalışmada npm install vue-resouce --save ile vue-resource paketi yüklendi, main.js içinde gerekli değişiklikler yapıldı. -->

<script>
import addBlog from './components/add-blog.vue'
export default {
  components: {
    'add-blog': addBlog
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
