<template>
    <h1>İç Component'in Başlığı</h1>
    <ul>
        <li v-for="eleman in liste">{{ eleman }}</li>
    </ul>
</template>

<script>
export default{
  data(){
    return {
      liste: ["Anasayfa", "Hakkımızda", "Blog", "iletişim"]
    }
  }
}
</script>

<style scoped>
h1{
  color:red;
}
</style>