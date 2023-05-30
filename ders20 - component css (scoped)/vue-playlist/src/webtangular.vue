<template>
    <div>
        <h1>Kullanıcı Listesi</h1>
        <ul>
            <li v-for="user in users">{{ user }}</li>
        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return {
            users: ["Gokhun", "Elif", "Han"]
        }
    }
}
</script>

<style>
h1{ /*bu da sayfa geneline hitap eder, üst component dahil*/
  color: green;
}
</style>