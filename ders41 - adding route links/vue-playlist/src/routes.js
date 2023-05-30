import showBlogs from './components/show-blogs.vue'
import addBlog from './components/add-blog.vue'

export default [
    {path: '/', component: showBlogs},
    {path: '/add', component: addBlog}
]