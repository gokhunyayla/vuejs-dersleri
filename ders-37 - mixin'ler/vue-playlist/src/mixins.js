export default{
    computed: {
        filteredBlogs(){
            return this.blogs.filter(blog => blog.title.match(this.keyword));
        }
    }
}