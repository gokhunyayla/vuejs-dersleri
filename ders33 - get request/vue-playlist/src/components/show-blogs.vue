<template>
    <div id="show-blogs">
        <h1>Tüm Blog Gönderileri</h1>
        <div v-for="blog in blogs" class="single-blog">
            <h2>{{ blog.title }}</h2>
            <p>{{ blog.body }}</p>
        </div>
    </div>
</template>

<script> 
export default{
    data(){
        return{
            blogs: []
        }
    },
    methods: {

    },
    created(){
        this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
            console.log(data);
            this.blogs=data.body.slice(0, 10) //slice(0, 10) ilk 10 elemanı almak için array içinden seçme yapar ve sonuç döner
        });
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