<template>
    <alt-bilesen>
      
      <template #form-header>
        <h2>Giriş Formu 2</h2>
        <p>Giriş yapabilmek için lütfen formu doldurun</p>
      </template>
  
      <template #form-elements>
        <label for="email">E-Posta</label>
        <input type="email" name="email" placeholder="E-posta adresinizi giriniz">
  
        <label for="password">Şifre</label>
        <input type="password" name="password" placeholder="Şifrenizi giriniz">
      </template>
  
      <template #form-controls>
        <button>Giriş Yap</button>
      </template>
  
      <template>
        <p>Tüm Hakları Saklıdır</p>
      </template>
  
    </alt-bilesen>
  </template>

<script>
import altBilesen from './alt-bilesen.vue'

export default{
  components: {
    "alt-bilesen": altBilesen
  },
  data(){
    return {
     
    }
  }
}
</script>