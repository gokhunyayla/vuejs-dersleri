<template>
    <div id="show-blogs">
        <h1>Tüm Blog Gönderileri</h1>
        <input type="text" v-model="keyword" placeholder="Bloglarda ara...">
        <div v-for="blog in filteredBlogs" class="single-blog">
            <h2>{{ blog.title | to-uppercase }}</h2> <!-- filtreler | işareti ile kullanılır ve örneğin küçük karakterli bir yazıyı büyük karakterlere çevirmek için kullanılır. Orjinal datayı değiştirmez, önce belirtilen parametrelere uygun şekilde görünümü değiştir. -->
            <p>{{ blog.body | snippet }}</p>
        </div>
    </div>
</template>

<script> 
export default{
    data(){
        return{
            blogs: [],
            keyword: ''
        }
    },
    methods: {

    },
    created(){
        this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
            console.log(data);
            this.blogs=data.body.slice(0, 10) //slice(0, 10) ilk 10 elemanı almak için array içinden seçme yapar ve sonuç döner
        });
    },
    computed: {
        filteredBlogs: function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.keyword);
            })
        }
    }
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin:20px 0px;
    box-sizing: border-box;
    background-color: #eee;
}
</style>