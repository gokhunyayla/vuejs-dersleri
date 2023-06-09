<template>
  <div>
    <show-blogs></show-blogs>
    <list-blogs></list-blogs>
</div>
</template>

<script>
import AddBlog from './components/add-blog.vue'
import ShowBlogs from './components/show-blogs.vue'
import ListBlogs from './components/list-blogs.vue'

export default{
  components: {
    "add-blog": AddBlog,
    "show-blogs": ShowBlogs,
    'list-blogs': ListBlogs
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>