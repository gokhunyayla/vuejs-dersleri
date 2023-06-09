<script setup>
const vRainbow = {
    mounted: (el) => el.style.color = "#" + Math.random().toString().slice(2, 8)
}
</script>

<template>
    <div id="single-blog">
        <h2 v-rainbow>{{ $filters.buyutFiltre(blog.title) }}</h2>
        <p>{{ blog.body }}</p>
    </div>
</template>

<script>
import mixins from '../mixins' 

export default{
    data(){
        return {
            id: this.$route.params.id,
            blog: {}
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

        fetch("https://jsonplaceholder.typicode.com/posts/" + self.id, {
                method: 'GET',
                header: {
                    'Content-Type': 'content/type'
                }
                }).then((res) => res.json())
                .then(function(json){
                    console.log(json);
                    self.blog=json;

                }).catch(function(err){
                    console.log(err);
                });

    },
    mixins: [mixins]
}
</script>

<style scoped>
#single-blog{
    width: 960px;
    margin:10px auto;
}
</style>