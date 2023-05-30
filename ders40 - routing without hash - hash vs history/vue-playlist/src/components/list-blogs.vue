<template>
    <div id="show-blogs">
        <h1>Tüm Blog Başlıklarını Listele</h1>
        <input type="text" v-model="keyword" placeholder="Bloglarda ara...">
        <div v-for="blog in filteredBlogs" class="single-blog">
            <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2> <!-- filtreler | işareti ile kullanılır ve örneğin küçük karakterli bir yazıyı büyük karakterlere çevirmek için kullanılır. Orjinal datayı değiştirmez, önce belirtilen parametrelere uygun şekilde görünümü değiştir. -->
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
        this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
            console.log(data);
            this.blogs=data.body.slice(0, 10) //slice(0, 10) ilk 10 elemanı almak için array içinden seçme yapar ve sonuç döner
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
    mixins: [searchMixin] //burada ve show-blogs bileşeni içinde mixin'leri bu şekilde verdik. tekrar tekrar her sayfada yazmak yerine tek bir yerden kontrol edilebilmesini sağladık.
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