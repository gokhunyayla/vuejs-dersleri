<template>
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