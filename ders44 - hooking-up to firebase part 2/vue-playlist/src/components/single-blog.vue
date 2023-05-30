<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <p>Yazar: {{ blog.author }}</p>
        <ul>
            <li v-for="category in blog.categories">{{ category }}</li>
        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    methods: {

    },
    created(){
        this.$http.get("https://vue-playlist-17761-default-rtdb.firebaseio.com/posts/" + this.id + ".json").then((data)=>{
            return data.json();
        }).then(function(data){
            this.blog = data;
        });
    }
}
</script>

<style scoped>
#single-blog{
    width:960px;
    margin:10px auto;
}
</style>