<template>
    <header>
        <h1 @click="changeTitle">{{ title }}</h1>
    </header>
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
        
      }
    },
    methods: {
      changeTitle: function(){
        //this.$emit("changeTitle", "İçerde Değişen Başlık");
        this.title = "İçerde Değiştirdiğimiz Bus Başlığı"; //bunu yapmasaydık sadece bu component'de değişecekti başlık.
        bus.$emit("titleChanged", "İçerde Değiştirdiğimiz Bus Başlığı");
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
header{
  background: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style>
