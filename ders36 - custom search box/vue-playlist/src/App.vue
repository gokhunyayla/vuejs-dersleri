<template>
  <div>
    <show-blogs></show-blogs>
  </div>
</template>

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
