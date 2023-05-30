<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/add-blog.vue'
import showBlogs from './components/show-blogs.vue'
import listBlogs from './components/list-blogs.vue'
export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
