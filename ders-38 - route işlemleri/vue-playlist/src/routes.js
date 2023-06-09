import { createRouter, createWebHashHistory } from 'vue-router'

import ShowBlogs from './components/show-blogs.vue'
import AddBlog from './components/add-blog.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: ShowBlogs },
        { path: '/ekle', component: AddBlog },
    ]
});

export default router
