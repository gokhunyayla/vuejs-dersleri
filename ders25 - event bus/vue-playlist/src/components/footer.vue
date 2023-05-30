<template>
    <footer>
        <p>{{ copyright }} {{ title }}</p>
    </footer>
</template>

<script>
import { bus } from '../main'; //import ettik buraya 

export default{
    props: {
        title: {
            type: String
        }
    },
    data(){
        return {
            copyright: "Tüm Hakları Saklıdır (c) 2023 - "
        }
    },
    created(){
      bus.$on("titleChanged", (data)=>{
        this.title = data;
      })
    }
}
</script>

<style scoped>
footer{
    background: #222;
    padding: 6px;
}
p{
    color: lightgreen;
    text-align: center;
}
</style>