import showBlogs from './components/show-blogs.vue'
import addBlog from './components/add-blog.vue'
import singleBlog from './components/single-blog.vue'

export default [
    {path: '/', component: showBlogs},
    {path: '/add', component: addBlog},
    {path: '/blog/:id', component: singleBlog}
]