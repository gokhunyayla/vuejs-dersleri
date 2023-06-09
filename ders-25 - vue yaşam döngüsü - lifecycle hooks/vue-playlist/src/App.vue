<template>
  <h2>Lifecycle Hooks {{ title }}</h2>
  <button v-on:click="basligiGuncelle()">Başlığı Güncelle</button>
</template>

<script>
export default{
  data(){
    return {
      title: "Deneme Başlığı"
    }
  },
  methods: {
    basligiGuncelle: function(){
      this.title="Başlığı Güncelledim";
    }
  },
  beforeCreate(){
    alert("Create Edilmeden Önce");
  },
  created(){
    alert("Create Edildi");
  },
  beforeMount(){
    alert("Mount edilmeden önceki işlemler");
  },
  mounted(){
    alert("Mount ettik artık");
  },
  beforeUpdate(){
    alert("Update etmeden son sözleri olan burda söylesin");
  },
  updated(){
    alert("İş işten geçti, çokten update ettik");
  }
}
</script>