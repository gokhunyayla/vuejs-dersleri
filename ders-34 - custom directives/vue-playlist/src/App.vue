<template>
  <div>
  <show-blogs></show-blogs>
</div>
</template>

<script>
import AddBlog from './components/add-blog.vue'
import ShowBlogs from './components/show-blogs.vue'

export default{
  components: {
    "add-blog": AddBlog,
    "show-blogs": ShowBlogs
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>