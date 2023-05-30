<template> <!-- Bir vue dosyası basit bir component olarak düşünülebilir. -->
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default { //component alanı, tüm component bilgileri burada yer alıyor, mesela adı.
  name: 'app',
  data () { //data: function(){} ile aynı anlama geliyor.
    return {
      title: "Bu ilk vue dosyamız!!!"
    }
  },
  methods: {
    greeting: function(){
      return "Naber dostum!";
    }
  }
}
</script>


<style>

</style>
