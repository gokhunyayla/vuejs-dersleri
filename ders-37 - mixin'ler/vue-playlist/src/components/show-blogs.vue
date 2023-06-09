<script setup>
const vRainbow = {
    mounted: (el) => el.style.color = "#" + Math.random().toString().slice(2, 8)
}
</script>

<template>
    <div id="show-blogs">
        <h1>Tüm Blog Gönderileri</h1>
        <input type="text" v-model="keyword" placeholder="Bloglarda ara...">
        <div v-for="blog in filteredBlogs" class="single-blog">
            <h2 v-rainbow>{{ $filters.buyutFiltre(blog.title) }}</h2>
            <p>{{ blog.body }}</p>
        </div>
    </div>
</template>

<script>
import mixins from '../mixins'

export default{
    data(){
        return {
            blogs: [],
            keyword: ""
        }
    },
    methods:{
        buyut: function(title){
            return title.toUpperCase();
        }
    },
    computed: {
        buyutComputed(){
            return (title)=>title.toUpperCase();
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

    },
    mixins: [mixins]
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
input:hover{border:3px solid #ccc}
</style>