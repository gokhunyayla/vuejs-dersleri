<template>
  <alt-bilesen>
    
    <template #form-header>
      <h2>Giriş Formu</h2>
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

  <input type="text" placeholder="Hello">
  <h3 v-bind:class="$style.blue">Rengi deniyoruz</h3>
  <h3 v-bind:class="xbilesen.green">Rengi deniyoruz</h3>
</template>

<script>
import altBilesen from './components/alt-bilesen.vue'

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

<style scoped>
:global(h2){color:red}
:deep(input){width:100%; border:1px solid #e2e2e2; height:35px; border-radius: 5px; margin:5px 0 15px 0; padding-left:15px}
</style>

<style module>
.blue{color: blue;}
</style>

<style module="xbilesen">
.green{color: green;}
</style>