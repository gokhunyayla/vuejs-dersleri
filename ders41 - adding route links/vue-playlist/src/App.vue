<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/add-blog.vue'
import showBlogs from './components/show-blogs.vue'
import listBlogs from './components/list-blogs.vue'
import header from './components/header.vue'

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
    'app-header': header
  },
  data () {
    return {

    }
  }
}
</script>

<style>
body{margin:0px auto;}
</style>
