<template>
  <div>
    <show-blogs></show-blogs>
  </div>
</template>

<!-- Bu çalışmada npm install vue-resouce --save ile vue-resource paketi yüklendi, main.js içinde gerekli değişiklikler yapıldı. -->

<script>
import addBlog from './components/add-blog.vue'
import showBlogs from './components/show-blogs.vue'
export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
