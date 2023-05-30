<template>
    <ul>
        <li v-for="user in users">{{ user }}</li>
    </ul>
  </template>
  
  <script>
  export default {
    data () {
      return {
        users: ['Gokhun', 'Elif', 'Han']
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  