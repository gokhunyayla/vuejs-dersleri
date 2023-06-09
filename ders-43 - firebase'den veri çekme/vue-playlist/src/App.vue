<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
</div>
</template>

<script>
import AddBlog from './components/add-blog.vue'
import ShowBlogs from './components/show-blogs.vue'
import ListBlogs from './components/list-blogs.vue'
import Header from './components/header.vue'

export default{
  components: {
    "add-blog": AddBlog,
    "show-blogs": ShowBlogs,
    'list-blogs': ListBlogs,
    'app-header': Header,
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>