<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.body }}</article>
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
        this.$http.get("https://jsonplaceholder.typicode.com/posts/" + this.id).then((data)=>{
            console.log(data);
            this.blog=data.body;
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