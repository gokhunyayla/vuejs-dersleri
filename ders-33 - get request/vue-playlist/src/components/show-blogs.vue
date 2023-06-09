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
        return {
            blogs: []
        }
    },
    created(){

        self=this;

        fetch("https://jsonplaceholder.typicode.com/posts", {
                method: 'GET',
                header: {
                    'Content-Type': 'content/type'
                }
                }).then((res) => res.json())
                .then(function(json){
                    console.log(json);
                    self.blogs=json.slice(0, 10);

                }).catch(function(err){
                    console.log(err);
                });

    }
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #e2e2e2;
    border-radius: 5px;
}
</style>