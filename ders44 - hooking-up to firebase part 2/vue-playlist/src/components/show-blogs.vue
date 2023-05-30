<template>
    <div id="show-blogs">
        <h1>Tüm Blog Gönderileri</h1>
        <input type="text" v-model="keyword" placeholder="Bloglarda ara...">
        <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title | to-uppercase }}</h2></router-link> <!-- filtreler | işareti ile kullanılır ve örneğin küçük karakterli bir yazıyı büyük karakterlere çevirmek için kullanılır. Orjinal datayı değiştirmez, önce belirtilen parametrelere uygun şekilde görünümü değiştir. -->
            <p>{{ blog.content | snippet }}</p>
        </div>
    </div>
</template>

<script> 
import searchMixin from '../mixins/search-mixin'

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
        this.$http.get("https://vue-playlist-17761-default-rtdb.firebaseio.com/posts.json").then(function(data){
            return data.json(); // burada promise çeviriyorus json() ile bu da burada bir işlem yapılacağını ve işlem bitene kadar bu datayı kullanamayacağımızı söyler.
        }).then(function(data){
            var blogsArray = [];

            for (let key in data){
                data[key].id=key;
                blogsArray.push(data[key]);
            }

            console.log(data);
            this.blogs=blogsArray;
        });
    },
    computed: {
        
    },
    filters: {
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    directives: { //directive'ler de localde bu şekilde tanımlanırlar.
        'rainbow': {
            bind(el, binding, vnode){
                el.style.color = "#" + Math.random().toString().slice(2, 8);
            } 
        }
    },
    mixins: [searchMixin]
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