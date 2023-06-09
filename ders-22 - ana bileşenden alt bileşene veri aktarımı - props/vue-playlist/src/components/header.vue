<template>
    <header>
      <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default{
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data(){
    return {
        
    }
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