<template>
  {{ title }}
  <button v-on:click="changeTitle">Beni Tıkla</button>
</template>

<script>
export default{
  data(){
    return {
      title: 'İlk Vue CLI çalışmam'
    }
  },
  methods: {
    changeTitle: function(){
      this.title = "Başlığı Değiştirdim";
    }
  }
}
</script>